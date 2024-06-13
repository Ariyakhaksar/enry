import { UserInfo } from "@/types/user";
import React from "react";
import { BsCalendar2Date } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { RiFolderUserLine } from "react-icons/ri";

type Props = {
   user: UserInfo;
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
      </div>
   );
};

export default AccountInfoDashHome;
