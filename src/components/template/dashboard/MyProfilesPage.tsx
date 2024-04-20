"use client";
import LabelPagesDash from "@/components/modules/LabelPagesDash";
import NothingForShow from "@/components/modules/NothingForShow";
import ProfileCardDashboard from "@/components/modules/ProfileCardDashboard";
import { profileRadios } from "@/constant/Proflie";
import { sp } from "@/utils/replaceNumber";
import { IconButton, Tooltip } from "@mui/material";
import Link from "next/link";
import React from "react";
import { FaArrowLeft, FaPencilAlt, FaRegEye } from "react-icons/fa";
import { FaRegFaceSadTear } from "react-icons/fa6";
import { MdDelete, MdOutlineHomeWork } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";

type Props = {
   profiles: [];
};

const MyProfilesPage = ({ profiles }: Props) => {
   return (
      <div className="w-full">
         <LabelPagesDash title="آگهی های من" icon={<MdOutlineHomeWork />} />
         {profiles.length ? null : (
            <NothingForShow
               title={<>هیچ آگهی ثبت نشده است !</>}
               icon={<FaRegFaceSadTear />}
               link={"/dashboard/add"}
               textLink="ثبت آگهی جدید"
            />
         )}
         <div className="flex p-5 px-10 flex-row-reverse justify-end flex-wrap gap-10">
            {profiles.map(
               (i: {
                  _id: string;
                  title: string;
                  realState: string;
                  location: string;
                  price: string;
                  published: boolean;
                  category: string;
               }) => (
                  <ProfileCardDashboard i={i} key={i._id} />
               )
            )}
         </div>
      </div>
   );
};

export default MyProfilesPage;
