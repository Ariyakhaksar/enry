"use client"
import { profileCategory } from "@/constant/Proflie";
import { Tooltip } from "@mui/material";
import React, { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import toast from "react-hot-toast";
import { FaShare } from "react-icons/fa";
import { MdOutlineDateRange, MdRealEstateAgent } from "react-icons/md";
import { TbCategory2 } from "react-icons/tb";

type Props = {
   realState: string;
   createdAt: Date;
   category: "villa" | "apartment" | "store" | "office";
};

const UlAdsDetails = ({ realState, createdAt, category }: Props) => {
   const [url, setUrl] = useState("");
   useEffect(() => {
      setUrl(window.location.href);
   }, []);
   return (
      <ul className="flex gap-5 p-5 cursor-default">
         <Tooltip title="املاک">
            <li className="flex gap-3 items-center">
               <span className="text-main text-xl">
                  <MdRealEstateAgent />
               </span>
               <span> املاک {realState}</span>
            </li>
         </Tooltip>
         <Tooltip title="تاریخ انتشار">
            <li className="flex gap-3 items-center">
               <span className="text-main text-xl">
                  <MdOutlineDateRange />
               </span>
               <span>{new Date(createdAt).toLocaleDateString("fa-IR")}</span>
            </li>
         </Tooltip>
         <Tooltip title="دسته بندی">
            <li className="flex gap-3 items-center">
               <span className="text-main text-xl">
                  <TbCategory2 />
               </span>
               <span>
                  {profileCategory.find(({ key }) => category === key)?.title}
               </span>
            </li>
         </Tooltip>
         <Tooltip title="اشتراک گذاری">
            <li
               className=" text-second  hover:bg-second hover:text-zinc-50 rounded-md transition-all ease-out
                    active:scale-[0.9]"
            >
               <CopyToClipboard text={url}>
                  <button className="flex gap-3 items-center cursor-pointer py-2 px-3"
                  onClick={() => {toast.success(" آدرس آگهی با موفقیت کپی شد !")}}
                  >
                     <span className="text-xl">
                        <FaShare />
                     </span>
                     <span>اشتراک گذاری</span>
                  </button>
               </CopyToClipboard>
            </li>
         </Tooltip>
      </ul>
   );
};

export default UlAdsDetails;
