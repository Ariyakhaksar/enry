"use client";
import LabelPagesDash from "@/components/modules/LabelPagesDash";
import NothingForShow from "@/components/modules/NothingForShow";
import ProfileCardAdmin from "@/components/modules/ProfileCardAdmin";
import { ProfileType } from "@/types/profile";
import React from "react";
import { FaRegFaceSadTear } from "react-icons/fa6";
import { RiCheckDoubleFill } from "react-icons/ri";

type Props = {
   profiles: any[];
};

const AdminPage = ({ profiles }: Props) => {
   return (
      <div className="w-full overflow-auto">
         <LabelPagesDash title="در صف پذیرش" icon={<RiCheckDoubleFill />} />
         {profiles.length ? null : (
            <NothingForShow
               title={<>هیچ آگهی برای تایید وجود ندارد !</>}
               icon={<FaRegFaceSadTear />}
               link={"/dashboard"}
               textLink="بازگشت به صفحه اصلی داشبورد"
            />
         )}
         <div className="flex p-5 px-10 flex-row-reverse justify-end flex-wrap gap-10">
            {profiles.map((i) => (
               <ProfileCardAdmin key={i._id} i={i} />
            ))}
         </div>
      </div>
   );
};

export default AdminPage;
