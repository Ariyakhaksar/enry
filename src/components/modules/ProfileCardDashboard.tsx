import { profileRadios } from "@/constant/Proflie";
import ProfileServerDelete from "@/server/profile/ProfileServerDelete";
import { sp } from "@/utils/replaceNumber";
import { IconButton, Tooltip } from "@mui/material";
import Link from "next/link";
import React from "react";
import { FaPencilAlt, FaRegEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

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
   const delHandeler = async (id: string) => {
      Swal.fire({
         title: "آیا از حدف این آگهی اطمینان دارید ؟",
         showCancelButton: true,
         confirmButtonText: "بله",
         cancelButtonText: "بیخیال !",
         confirmButtonColor: "#ef4444",
      }).then(async (result) => {
         /* Read more about isConfirmed, isDenied below */
         if (result.isConfirmed) {
            const res = await ProfileServerDelete({ id });

            if (res.message && res.status === 200) {
               Swal.fire({
                  title: res.message,
                  confirmButtonColor: "#ef4444",
                  confirmButtonText: "تایید !",
                  icon: "success",
               });
            } else {
               Swal.fire({
                  title: res.error,
                  confirmButtonColor: "#ef4444",
                  confirmButtonText: "تایید !",
                  icon: "error",
               });
            }
         }
      });
   };

   return (
      <div className="flex flex-col gap-3 w-72 border border-zinc-200 py-3 px-5 bg-card-pattern bg-center bg-white rounded-md">
         <div className="flex flex-row justify-between items-center">
            <Tooltip
               title={i.published ? "نمایش صفحه" : "پیشنمایش آگهی"}
               placement="left-start"
            >
               <Link
                  href={`/ads/${i._id}`}
                  
                  target="_blank"
               >
                  <IconButton>
                     <span className=" text-lg">
                        <FaRegEye />
                     </span>
                     {/* پیشنمایش */}
                  </IconButton>
               </Link>
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
            <Link
               href={`/dashboard/my-profiles/edit/${i._id}`}
               target="_blank"
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
            </Link>
            <button
               onClick={() => delHandeler(i._id)}
               className="flex flex-row gap-3 items-center justify-center
                        active:scale-95
                        group w-full text-sm
                        bg-main
                        hover:bg-black hover:shadow-lg text-white transition-all ease-out
                        border border-main hover:border-black font-bold py-1 rounded-md"
            >
               حذف آگهی
               <span className="bg-white mr-5 text-main transition-all ease-out group-hover:-translate-x-1 group-hover:text-white group-hover:bg-main p-2 rounded-lg">
                  <MdDelete />
               </span>
            </button>
         </div>
      </div>
   );
};

export default ProfileCardDashboard;
