"use server";

import Profile from "@/models/Profile";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { Types } from "mongoose";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";

type Props = {
   title: string;
   description: string;
   location: string;
   phone: string;
   price: string;
   realState: string;
   category: string;
   rules: string[];
   amenities: string[];
   constructionDate: Date;
};

const ProfileServerPost = async (values: Props) => {
   try {
      await connectDB();

      const {
         title,
         description,
         location,
         phone,
         realState,
         price,
         constructionDate,
         category,
         amenities,
         rules,
      } = values;

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

      if (
         !title ||
         !location ||
         !description ||
         !phone ||
         !realState ||
         !price ||
         !constructionDate ||
         !category
      ) {
         return {
            status: 400,
            message: "",
            errors: "لطفا اطلاعات معتبر وارد کنید !",
         };
      }

      const newProfile = await Profile.create({
         title,
         description,
         location,
         phone,
         realState,
         constructionDate,
         amenities,
         rules,
         category,
         price: +price,
         userId: new Types.ObjectId(user._id),
      });
      revalidatePath("dashboard/my-profiles");
      return {
         status: 201,
         message:
            "آگهی با موفقیت ثبت شد ! منتظر تایید نهایی از طرف ادمین سایت باشید❤🤞🏻",
         errors: "",
      };
   } catch (err) {
      return {
         status: 500,
         message: "",
         errors: "مشکلی در سمت سرور پیش آمده است لطفا بعدا امتحان کنید !",
      };
   }
};

export default ProfileServerPost;
