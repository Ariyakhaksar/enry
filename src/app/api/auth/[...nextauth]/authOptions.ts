import User from "@/models/User";
import { SigninType } from "@/types/user";
import { verifyPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";
import { p2e } from "@/utils/replaceNumber";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
   session: { strategy: "jwt" },
   providers: [
      CredentialsProvider({
         async authorize(credentials) {
            const { email: Iemail, password } = credentials as SigninType;
            try {
               await connectDB();
            } catch (err) {
               throw new Error("مشکلی در سرور رخ داده است !");
            }

            // Check valid Data
            if (!Iemail || !password)
               throw new Error("لطفا اطلاعات معتبر وارد کنید !");

            const ePassword = p2e(password);
            const email = p2e(Iemail.toLowerCase());

            // Check Exist User
            const user = await User.findOne({ email });
            if (!user) throw new Error("لطفا ابتدا حساب کاربری ایجاد کنید !");

            // Check password
            const isValid = await verifyPassword(ePassword, user.password);
            if (!isValid) throw new Error("ایمیل یا رمز عبور اشتباه است!");

            return {
               name: "",
               email,
               image: "",
            };
         },
      }),
   ],
};
