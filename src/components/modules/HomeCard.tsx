import React from "react";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { MdArticle } from "react-icons/md";
import { RiCheckDoubleFill } from "react-icons/ri";

type Props = {
   createdAt: Date;
   countProfile: number;
   countVerificationProfile: number;
};

const HomeCard = ({
   createdAt,
   countProfile,
   countVerificationProfile,
}: Props) => {
   return (
      <div className="w-full flex gap-10 px-10 flex-col lg:flex-row justify-around my-10 select-none">
         <div className="w-full bg-zinc-800 rounded-md text-zinc-100 p-6 px-10 flex justify-center">
            <div className="w-full flex flex-col gap-y-5 md:flex-row justify-between items-center">
               <div className="flex">
                  <span
                     className="bg-emerald-600 p-3 rounded-full
                        shadow-[0_13px_27px_-5px_rgba(5,150,105,0.5)] "
                  >
                     <MdArticle className="text-3xl text-emerald-100 bg-transparent" />
                  </span>
               </div>
               <div className="flex flex-col gap-3">
                  <p className="text-center text-4xl">{countProfile}</p>
                  <h4>تعداد آگهی های شما</h4>
               </div>
            </div>
         </div>

         <div className="w-full  bg-zinc-800 rounded-md text-zinc-100 p-6 px-10 flex justify-center">
            <div className="w-full flex flex-col gap-y-5 md:flex-row justify-between items-center">
               <div className="flex">
                  <span
                     className="bg-emerald-600 p-3 rounded-full
                        shadow-[0_13px_27px_-5px_rgba(5,150,105,0.5)] "
                  >
                     <RiCheckDoubleFill className="text-3xl text-emerald-100 bg-transparent" />
                  </span>
               </div>
               <div className="flex flex-col gap-3">
                  <p className="text-center text-4xl">
                     {countVerificationProfile}
                  </p>
                  <h4>تعداد آگهی های تایید شده</h4>
               </div>
            </div>
         </div>
         <div className="w-full  bg-zinc-800 rounded-md text-zinc-100 p-6 px-10 flex justify-center">
            <div className="w-full flex flex-col gap-y-5 md:flex-row justify-between items-center">
               <div className="flex">
                  <span
                     className="bg-emerald-600 p-3 rounded-full
                        shadow-[0_13px_27px_-5px_rgba(5,150,105,0.5)] "
                  >
                     <BsFillCalendarDateFill className="text-3xl text-emerald-100 bg-transparent" />
                  </span>
               </div>
               <div className="flex flex-col gap-3 items-center">
                  <p className="text-center text-xl">
                     {new Date(createdAt).toLocaleDateString("fa-IR")}
                  </p>
                  <h4>تاریخ عضویت شما</h4>
               </div>
            </div>
         </div>
      </div>
   );
};

export default HomeCard;
