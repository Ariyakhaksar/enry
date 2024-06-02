import { profileRadios } from "@/constant/Proflie";
import ProfileServerDelete from "@/server/profile/ProfileServerDelete";
import ProfileServerPublish from "@/server/profile/ProfileServerPublish";
import { ProfileType } from "@/types/profile";
import { sp } from "@/utils/replaceNumber";
import { IconButton, Tooltip } from "@mui/material";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import React from "react";
import { FaPencilAlt, FaRegEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { RiCheckDoubleFill } from "react-icons/ri";
import Swal from "sweetalert2";

type Props = {
   i: any;
};

const ProfileCardAdmin = ({ i }: Props) => {
   const PublishProfile = async (id: string) => {
      Swal.fire({
         title: "آیا از انشار این آگهی اطمینان دارید ؟",
         showCancelButton: true,
         confirmButtonText: "بله",
         cancelButtonText: "بیخیال !",
         confirmButtonColor: "rgb(16,69,71)",
      }).then(async (result) => {
         /* Read more about isConfirmed, isDenied below */
         if (result.isConfirmed) {
            const res = await ProfileServerPublish({ id });

            if (res.message && res.status === 200) {
               Swal.fire({
                  title: res.message,
                  confirmButtonColor: "rgb(16,69,71)",
                  confirmButtonText: "تایید !",
                  icon: "success",
               });
            } else {
               Swal.fire({
                  title: res.error,
                  confirmButtonColor: "rgb(16,69,71)",
                  confirmButtonText: "تایید !",
                  icon: "error",
               });
            }
         }
      });
   };
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

   const updatedAt = new Date(i.updatedAt);
   return (
      <div className="flex flex-col gap-3 w-72 border border-zinc-200 py-3 px-5 bg-card-pattern bg-center bg-white rounded-md">
         <div className="flex flex-row justify-between items-center">
            <div className="flex items-center gap-3">
               <Tooltip title={"پیشنمایش آگهی"} placement="left-start">
                  <IconButton>
                     <Link href={""} className=" text-lg">
                        <span>
                           <FaRegEye />
                        </span>
                        {/* پیشنمایش */}
                     </Link>
                  </IconButton>
               </Tooltip>
               <Tooltip title={"حذف آگهی"} placement="left-start">
                  <IconButton onClick={() => delHandeler(i._id)}>
                     <span className=" text-lg text-red-400">
                        <MdDelete />
                     </span>
                  </IconButton>
               </Tooltip>
            </div>
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
            <p className="text-sm">
               تاریخ آخرین ویرایش : {updatedAt.toLocaleDateString("fa-IR")}{" "}
            </p>
         </div>
         <div className="flex flex-col items-center justify-center gap-2">
            <button
               onClick={() => PublishProfile(i._id)}
               className="flex flex-row gap-3 items-center justify-center
                        active:scale-95
                        group w-full text-sm
                        text-second
                        hover:bg-second hover:shadow-lg hover:text-zinc-100 transition-all ease-out
                        border border-second  font-bold py-1 rounded-md"
            >
               تایید آگهی
               <span className="bg-second mr-5 text-zinc-100 transition-all ease-out group-hover:-translate-x-1 group-hover:text-second group-hover:bg-zinc-100 p-2 rounded-lg">
                  <RiCheckDoubleFill />
               </span>
            </button>
         </div>
      </div>
   );
};

export default ProfileCardAdmin;
