import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import User from "@/models/User";
import HomePageDhashboard from "@/components/template/dashboard/HomePageDhashboard";
import { UserInfo } from "@/types/user";
import { redirect } from "next/navigation";
import FindUser from "@/server/user/FindUser";

async function page() {
   await connectDB();
   const session = await getServerSession(authOptions);
   if (!session) return redirect("/auth/signin");

   const user: UserInfo = await FindUser(session.user?.email);

   const [Puser] = await User.aggregate([
      { $match: { email: session!.user!.email } },
      {
         $lookup: {
            from: "profiles",
            foreignField: "userId",
            localField: "_id",
            as: "profiles",
         },
      },
   ]);


   const VerificationProfiles = Puser.profiles.filter(
      (item: { published: boolean }) => item.published
   );

   return (
      <HomePageDhashboard
         countProfile={Puser.profiles.length}
         countVerificationProfile={VerificationProfiles.length}
         user={JSON.parse(JSON.stringify(user))}
      />
   );
}

export default page;
