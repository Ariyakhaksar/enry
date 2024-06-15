"use server";

import Profile from "@/models/Profile";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { ObjectId } from "mongoose";
import { getServerSession } from "next-auth";

type Props = {
   _id: ObjectId;
   title: string;
   description: string;
   location: string;
   phone: string;
   price: string;
   realState: string;
   category: "villa" | "apartment" | "store" | "office";
   rules: string[];
   amenities: string[];
   constructionDate: Date;
};

const ProfileServerEdit = async (values: Props) => {
   try {
      await connectDB();

      const {
         _id,
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
         !_id ||
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

      const filteredRules = rules.filter(
         (item) => item.replace(/\s/g, "") !== ""
      );
      const filteredAmenities = amenities.filter(
         (item) => item.replace(/\s/g, "") !== ""
      );

      const profile = await Profile.findOne({ _id: _id });

      if (!profile) {
         return {
            status: 400,
            message: "",
            errors: " آگهی وجود ندارد !",
         };
      }
      // بررسی مقدار user._id و profile.userId
      if (!user._id || !profile.userId) {
         return {
            status: 400,
            message: "",
            errors: "شناسه‌های کاربر یا آگهی نامعتبر است!",
         };
      }

      if (!user._id.equals(profile.userId)) {
         return {
            status: 403,
            message: "",
            errors: "دسترسی شما به این آگهی محدود است!",
         };
      }
      profile.title = title;
      profile.description = description;
      profile.location = location;
      profile.phone = phone;
      profile.realState = realState;
      profile.price = price;
      profile.constructionDate = constructionDate;
      profile.amenities = filteredAmenities;
      profile.rules = filteredRules;
      profile.category = category;
      profile.published = false;

      profile.save();

      return {
         status: 200,
         message:
            "آگهی با ویرایش شد ! منتظر تایید نهایی از طرف ادمین سایت باشید❤🤞🏻",
         errors: "",
      };
   } catch (err) {
      console.log(err);
      return {
         status: 500,
         message: "",
         errors: "مشکلی در سمت سرور پیش آمده است لطفا بعدا امتحان کنید !",
      };
   }
};

export default ProfileServerEdit;
