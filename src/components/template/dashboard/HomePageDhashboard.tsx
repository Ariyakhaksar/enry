"use client";
import AccountInfoDashHome from "@/components/modules/AccountInfoDashHome";
import HomeCard from "@/components/modules/HomeCard";
import LabelPagesDash from "@/components/modules/LabelPagesDash";
import { UserInfo } from "@/types/user";
import React from "react";

import { RiHomeOfficeFill } from "react-icons/ri";

type Props = {
   countProfile: number;
   countVerificationProfile: number;
   user: UserInfo;
};

const HomePageDhashboard = ({
   user,
   countProfile,
   countVerificationProfile,
}: Props) => {
   return (
      <div className="w-full">
         <LabelPagesDash
            title="صفحه نخست پنل مدیریت شما"
            icon={<RiHomeOfficeFill />}
         />
         <HomeCard
            createdAt={user.createdAt}
            countProfile={countProfile}
            countVerificationProfile={countVerificationProfile}
         />
         <AccountInfoDashHome user={user} />
      </div>
   );
};

export default HomePageDhashboard;
