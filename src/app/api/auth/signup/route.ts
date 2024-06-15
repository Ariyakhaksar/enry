import User from "@/models/User";
import { hashPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";
import { p2e } from "@/utils/replaceNumber";

export async function POST(req: Request) {
   try {
      await connectDB();

      const { email, password } = await req.json();

      if (!email || !password) {
         return Response.json(
            { error: "لطفا اطلاعات معتبر وارد کنید" },
            { status: 422 }
         );
      }

      const existingUser = await User.findOne({ email });

      if (existingUser) {
         return Response.json(
            { error: "این حساب کاربری وجود دارد" },
            { status: 422 }
         );
      }

      const hashedPassword = await hashPassword(password);

      const emailUser = p2e(email.toLocaleLowerCase())

      const newUser = await User.create({
         email: emailUser,
         password: p2e(hashedPassword),
      });

      return Response.json(
         { message: "حساب کاربری ایجاد شد !", data: newUser },
         { status: 201 }
      );
   } catch (err) {
      console.error(err);
      return Response.json(
         { error: "مشکلی در سرور رخ داده است" },
         { status: 500 }
      );
   }
}
