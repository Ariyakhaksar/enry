import AdsDetailsPage from "@/components/template/AdsDetailsPage";
import Profile from "@/models/Profile";
import FindUser from "@/server/user/FindUser";

import { FullDataProfileType } from "@/types/profile";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

type Props = { params: { profileDetails: string } };

const page = async ({ params: { profileDetails } }: Props) => {
   await connectDB();
   // بررسی معتبر بودن ObjectId و طول آن
   const isValidObjectId = (id: string) => {
      return (
         typeof id === "string" &&
         id.length === 24 &&
         /^[a-fA-F0-9]{24}$/.test(id)
      );
   };

   if (!isValidObjectId(profileDetails)) {
      return redirect("/404");
   }

   const profile: (FullDataProfileType & { userId: string }) | null =
      await Profile.findOne({
         _id: profileDetails,
      });

   if (!profile) {
      return redirect("/404");
   }
   if (!profile.published) {
      const session = await getServerSession();
      if (!session) return redirect("/404");
      const user = await FindUser(session.user?.email);
      if (!user) return redirect("/404");
      if (user.role !== "ADMIN") {
         if (!user._id.equals(profile.userId)) return redirect("/404");
      }
   }

   return <AdsDetailsPage profile={JSON.parse(JSON.stringify(profile))} />;
};

export default page;

export const generateMetadata = async ({
   params: { profileDetails },
}: Props) => {
   await connectDB();
   const isValidObjectId = (id: string) => {
      return (
         typeof id === "string" &&
         id.length === 24 &&
         /^[a-fA-F0-9]{24}$/.test(id)
      );
   };

   if (!isValidObjectId(profileDetails)) {
      return {};
   }
   const profile = await Profile.findOne({ _id: profileDetails });
   if (!profile) {
      return {};
   }
   return {
      title: profile.title,
      description: profile.description,
      authors: { name: profile.realState },
      other: { category: profile.category },
   };
};
