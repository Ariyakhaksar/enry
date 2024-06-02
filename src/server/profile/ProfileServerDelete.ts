"use server";

import Profile from "@/models/Profile";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";

type Props = {
   id: string;
};

const ProfileServerDelete = async ({ id }: Props) => {
   try {
      await connectDB();

      const session = await getServerSession();
      if (!session) {
         return {
            status: 401,
            message: "",
            errors: "لطفا وارد حساب کاربری خود شوید !",
         };
      }

      const user = await User.findOne({ email: session.user!.email });

      if (!user) {
         return {
            status: 404,
            message: "",
            errors: "حساب کاربری پیدا نشد !",
         };
      }

      if (!id) {
         return {
            status: 404,
            message: "",
            errors: "آگهی یافت نشد !",
         };
      }

      const profile = await Profile.findOneAndDelete({ _id: id });

      
      revalidatePath('/dashboard/my-profiles')
      revalidatePath('/admin')

      return {
         status: 200,
         message: "آگهی با موفیت حذف شد !",
         error: "",
      };
      
   } catch (error) {
      return {
         status: 500,
         message: "",
         errors: "مشکلی در سمت سرور پیش آمده است لطفا بعدا امتحان کنید !",
      };
   }
};

export default ProfileServerDelete;
