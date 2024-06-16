import { UserInfo } from "@/types/user";
import { signOut } from "next-auth/react";
import React from "react";
import { BsCalendar2Date } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { RiFolderUserLine } from "react-icons/ri";
import Swal from "sweetalert2";

type Props = {
   user: UserInfo;
};

const logOutUser = async () => {
   Swal.fire({
      title: "آیا میخواهید از حساب کاربری خود خارج شوید ؟",
      showCancelButton: true,
      confirmButtonText: "بله",
      cancelButtonText: "بیخیال !",
      confirmButtonColor: "#ef4444",
   }).then(async (result) => {
      if (result.isConfirmed) {
         await signOut({ callbackUrl: "/auth/signin" });
      }
   });
};

const AccountInfoDashHome = ({ user }: Props) => {
   return (
      <div className="px-10">
         <div className="w-full bg-zinc-50 p-5 rounded-md text-second flex items-center gap-3">
            <span className="text-xl">
               <FaUser />
            </span>
            <h4 className="font-bold text-xl">اطلاعات حساب کاربری شما</h4>
         </div>
         <ul className="flex flex-col gap-3 p-5 lg:px-10">
            <li className="flex flex-row gap-3 items-center">
               <span>
                  <MdOutlineAlternateEmail />
               </span>
               ایمیل شما : {user.email}
            </li>
            <li className="flex flex-row gap-3 items-center">
               {" "}
               <span>
                  <RiFolderUserLine />
               </span>
               نقش کاربر : {user.role === "ADMIN" ? "ادمین" : "کاربر عادی"}
            </li>
            <li className="flex flex-row gap-3 items-center">
               <span>
                  <BsCalendar2Date />
               </span>
               تاریخ عضویت شما :{" "}
               {new Date(user.createdAt).toLocaleDateString("fa-IR")}
            </li>
         </ul>
         <div className="px-5 lg:px-10 mb-10">
            <button
               onClick={logOutUser}
               className="flex flex-row gap-3 items-center justify-center
                        active:scale-95
                        group text-sm
                        bg-red-500 px-4 lg:px-10
                        hover:bg-black hover:shadow-lg text-white transition-all ease-out
                        border border-red-500 hover:border-black font-bold py-1 rounded-md"
            >
               خروج از حساب کاربری
               <span
                  className="bg-white mr-5 text-red-500 transition-all ease-out group-hover:-translate-x-1 group-hover:text-white 
                  group-hover:bg-red-500 p-2 rounded-lg text-xl"
               >
                  <IoLogOut />
               </span>
            </button>
         </div>
      </div>
   );
};

export default AccountInfoDashHome;
