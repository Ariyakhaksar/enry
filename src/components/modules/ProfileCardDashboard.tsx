import { profileRadios } from "@/constant/Proflie";
import { sp } from "@/utils/replaceNumber";
import { IconButton, Tooltip } from "@mui/material";
import Link from "next/link";
import React from "react";
import { FaPencilAlt, FaRegEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

type Props = {
   i: {
      _id: string;
      title: string;
      realState: string;
      location: string;
      price: string;
      published: boolean;
      category: string;
   };
};

const ProfileCardDashboard = ({ i }: Props) => {
   return (
      <div className="flex flex-col gap-3 w-72 border border-zinc-200 py-3 px-5 bg-card-pattern bg-center bg-white rounded-md">
         <div className="flex flex-row justify-between items-center">
            <Tooltip
               title={i.published ? "نمایش صفحه" : "پیشنمایش آگهی"}
               placement="left-start"
            >
               <IconButton>
                  <Link href={""} className=" text-lg">
                     <span>
                        <FaRegEye />
                     </span>
                     {/* پیشنمایش */}
                  </Link>
               </IconButton>
            </Tooltip>
            {profileRadios.map((r) => {
               if (r.value == i.category) {
                  return (
                     <Tooltip title={r.label} placement="left-start" key={r.id}>
                        <span className="text-xl py-1 px-2 border rounded-md border-zinc-200">
                           {r.icon}
                        </span>
                        {/* پیشنمایش */}
                     </Tooltip>
                  );
               }
            })}
         </div>
         <div className="flex flex-col gap-3 border-b pb-5 border-zinc-200">
            <p className="font-bold">{i.title}</p>
            <p>بنگاه : {i.realState}</p>
            <p>آدرس : {i.location}</p>
            <p>قیمت : {sp(i.price)}</p>
            <p>
               وضعیت :{" "}
               {i.published ? (
                  <span
                     className={
                        "bg-emerald-100 text-emerald-800 select-none text-sm px-3 mr-2 py-1 rounded-md"
                     }
                  >
                     تایید شده
                  </span>
               ) : (
                  <span
                     className={
                        "bg-red-100 text-red-500 select-none text-sm px-3 mr-2 py-1 rounded-md"
                     }
                  >
                     در انتظار تایید
                  </span>
               )}
            </p>
         </div>
         <div className="flex flex-col items-center justify-center gap-2">
            <button
               className="flex flex-row gap-3 justify-center items-center
                        active:scale-95 
                        group w-full  text-sm
                        hover:bg-black hover:shadow-lg hover:text-white transition-all ease-out
                        border border-main hover:border-black font-bold text-black  py-1 rounded-md"
            >
               ویرایش آگهی
               <span className="bg-main text-white transition-all ease-out group-hover:-translate-x-1 group-hover:text-main group-hover:bg-white p-2 rounded-lg mr-3">
                  <FaPencilAlt />
               </span>
            </button>
            <button
               className="flex flex-row gap-3 items-center justify-center
                        active:scale-95
                        group w-full text-sm
                        bg-main
                        hover:bg-black hover:shadow-lg text-white transition-all ease-out
                        border border-main hover:border-black font-bold py-1 rounded-md"
            >
               حدف آگهی
               <span className="bg-white mr-5 text-main transition-all ease-out group-hover:-translate-x-1 group-hover:text-white group-hover:bg-main p-2 rounded-lg">
                  <MdDelete />
               </span>
            </button>
         </div>
      </div>
   );
};

export default ProfileCardDashboard;
