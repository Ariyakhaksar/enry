"use client"
import { profileRadios } from "@/constant/Proflie";
import { sp } from "@/utils/replaceNumber";
import { Tooltip } from "@mui/material";
import Link from "next/link";
import React from "react";
import { FaArrowLeft, FaPencilAlt } from "react-icons/fa";

type Props = {
   i: {
      _id: string;
      title: string;
      realState: string;
      location: string;
      price: string;
      category: string;
   };
};

const ProfileCardPublic = ({ i }: Props) => {
   return (
      <div className="flex flex-col justify-between gap-3 w-[90%] md:w-[80%] lg:w-72 border border-zinc-200 py-3 px-5 bg-card-pattern bg-center bg-white rounded-md">
         <div className="flex flex-col gap-3">
            <div className="flex flex-row justify-end items-center">
               {profileRadios.map((r) => {
                  if (r.value == i.category) {
                     return (
                        <Tooltip
                           title={r.label}
                           placement="left-start"
                           key={r.id}
                        >
                           <span className="text-xl py-1 px-2 border rounded-md border-zinc-200">
                              {r.icon}
                           </span>
                        </Tooltip>
                     );
                  }
               })}
            </div>
            <div className="flex flex-col gap-3 pb-5 ">
               <p className="font-bold">{i.title}</p>
               <p>بنگاه : {i.realState}</p>
               <p>آدرس : {i.location}</p>
               <p>قیمت : {sp(i.price)}</p>
            </div>
         </div>
         <div className="flex flex-col items-center justify-center gap-2 border-t py-3 border-zinc-200">
            <Link
               href={`/ads/${i._id}`}
               className="flex flex-row gap-3 items-center justify-center
                active:scale-95
                group w-full text-sm
                text-second
                hover:bg-second hover:shadow-lg hover:text-zinc-100 transition-all ease-out
                border border-second  font-bold py-1 rounded-md"
                target="_blank"
            >
               اطلاعات بیشتر
               <span className="bg-second mr-5 text-zinc-100 transition-all ease-out group-hover:-translate-x-1 group-hover:text-second group-hover:bg-zinc-100 p-2 rounded-lg">
                  <FaArrowLeft />
               </span>
            </Link>
         </div>
      </div>
   );
};

export default ProfileCardPublic;
