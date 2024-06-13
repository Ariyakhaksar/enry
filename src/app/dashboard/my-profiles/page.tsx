import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import MyProfilesPage from "@/components/template/dashboard/MyProfilesPage";
import User from "@/models/User";
import { getServerSession } from "next-auth";
import React from "react";

type Props = {};

const page = async (props: Props) => {
   const session = await getServerSession(authOptions);
   const [user] = await User.aggregate([
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

   return (
      <MyProfilesPage profiles={JSON.parse(JSON.stringify(user.profiles))} />
   );
};

export default page;
