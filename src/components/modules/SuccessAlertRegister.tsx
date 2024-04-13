import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";

function SuccessAlertRegister() {
   const router = useRouter();
   const clickHandler = () => {
      router.push("/dashboard", { scroll: false });
   };
   return (
      <div className="flex flex-col gap-5">
         <div className="text-black mt-5 ">
            <p className="text-xl text-[#15803d]">
               ثبت نام شما با موفقیت انجام شد !
            </p>
            <p className="mt-3">
               برای استفاده از خدمات ما باید به پنل مدیریت خود برید
            </p>
         </div>
         <div className="flex">
            <Link
               href={"/dashboard"}
               className="flex flex-row gap-3 items-center
                        active:scale-95
                        group
                        hover:bg-black hover:shadow-lg hover:text-white transition-all ease-out
                        font-bold text-black pr-6 pl-3 py-2 rounded-md"
            >
               ورود به پنل مدیریت
               <span className="bg-main text-white transition-all ease-out group-hover:-translate-x-1 group-hover:text-main group-hover:bg-white p-2 rounded-lg mr-3">
                  <FaArrowLeft />
               </span>
            </Link>
         </div>
      </div>
   );
}

export default SuccessAlertRegister;
