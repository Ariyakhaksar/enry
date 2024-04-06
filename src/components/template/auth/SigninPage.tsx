"use client";
import Link from "next/link";
import React, { use, useState } from "react";
import { FaArrowLeft, FaRegEye, FaRegEyeSlash } from "react-icons/fa";

type Props = {};

const SigninPage = (props: Props) => {
   const [togglePassword, setTogglePassword] = useState(false);
   return (
      <div className="FormAuth">
         <div className="BoxFormAuth">
            <div className="font-bold flex flex-col gap-5 text-black">
               <h1 className="font-bold text-2xl">فرم ورود به حساب کاربری</h1>
               <p className="text-optionalColor text-base">
                  برای ورود به حساب کاربری خود فرم زیر را پر کنید!
               </p>
            </div>
            <div className="">
               <form onSubmit={(e) => e.preventDefault()}>
                  <div className="InputBox">
                     <label htmlFor="email">ایمیل : </label>
                     <input type="email" id="email" name="email" autoFocus />
                  </div>
                  <div className="InputBox">
                     <label htmlFor="password">رمز عبور شما : </label>
                     <div className="w-full relative">
                        <input
                           type={!togglePassword ? "password" : "text"}
                           id="password"
                           name="password"
                        />
                        <span
                           className="absolute right-3 top-1/2 transition-all ease-in -translate-y-1/2 px-2 p-1 rounded-md
                            cursor-pointer bg-zinc-200 active:bg-zinc-300"
                           onClick={() => setTogglePassword(!togglePassword)}
                        >
                           {!togglePassword ? <FaRegEye /> : <FaRegEyeSlash />}
                        </span>
                     </div>
                  </div>
                  <div className="flex flex-row gap-2 p-3">
                     <p>قبلا ثبت نام نکرده بودی؟</p>
                     <Link
                        className="text-second transition-all ease-out hover:text-black font-bold"
                        href={"/auth/signup"}
                     >
                        ثبت نام
                     </Link>
                  </div>
                  <div className="InputBox">
                     <button
                        className="flex flex-row gap-3 justify-center items-center
                        active:scale-95
                        group 
                        bg-second
                        hover:bg-black hover:shadow-lg text-white transition-all ease-out
                        border border-second hover:border-black font-bold pr-6 pl-2 py-2 rounded-md"
                     >
                        ورود
                        <span className="bg-white text-second transition-all ease-out group-hover:-translate-x-1 group-hover:text-white group-hover:bg-second p-2 rounded-lg mr-3">
                           <FaArrowLeft />
                        </span>
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
};

export default SigninPage;
