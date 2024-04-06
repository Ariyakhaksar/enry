"use client";
import { FormikFormSignInTpye } from "@/types/user";
import { CircularProgress } from "@mui/material";
import { FormikErrors, FormikTouched } from "formik";
import Link from "next/link";
import React, { useState } from "react";
import { FaArrowLeft, FaRegEye, FaRegEyeSlash } from "react-icons/fa";

type Props = { isLoading: boolean };

const SigninForm = ({
   handleSubmit,
   values,
   touched,
   errors,
   handleChange,
   isLoading,
}: FormikFormSignInTpye & Props) => {
   const [togglePassword, setTogglePassword] = useState(false);

   return (
      <form onSubmit={handleSubmit}>
         <div className="InputBox">
            <label htmlFor="email">ایمیل : </label>
            <input
               type="email"
               id="email"
               name="email"
               onChange={handleChange}
               value={values.email}
               autoFocus
               className={`errorOutline ${
                  touched.email && errors.email
                     ? "transition-all ease-in outline-main"
                     : "outline-zinc-800"
               } `}
            />
            <div
               className={`transition-all ease-in h-0 ${
                  touched.email && errors.email ? "h-5" : " "
               }`}
            >
               {touched.email && errors.email ? (
                  <p className="text-sm text-main">{errors.email}</p>
               ) : null}
            </div>
         </div>
         <div className="InputBox">
            <label htmlFor="password">رمز عبور شما : </label>
            <div className="w-full relative">
               <input
                  type={!togglePassword ? "password" : "text"}
                  id="password"
                  name="password"
                  onChange={handleChange}
                  value={values.password}
                  className={`errorOutline ${
                     touched.password && errors.password
                        ? "transition-all ease-in outline-main"
                        : "outline-zinc-800"
                  } `}
               />
               <span
                  className="absolute right-3 top-1/2 transition-all ease-in -translate-y-1/2 px-2 p-1 rounded-md
                            cursor-pointer bg-zinc-200 active:bg-zinc-300"
                  onClick={() => setTogglePassword(!togglePassword)}
               >
                  {!togglePassword ? <FaRegEye /> : <FaRegEyeSlash />}
               </span>
            </div>
            <div
               className={`transition-all ease-in h-0 ${
                  touched.password && errors.password ? "h-5" : " "
               }`}
            >
               {touched.password && errors.password ? (
                  <p className="text-sm text-main">{errors.password}</p>
               ) : null}
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
                        border border-second hover:border-black font-bold pr-6 pl-2 py-2 rounded-md
                        disabled:opacity-40 disabled:pointer-events-none
                        disabled:bg-black disabled:border-black
                        "
               type="submit"
               disabled={isLoading}
            >
               ورود
               <span className={` flex items-center justify-center transition-all 
                    ease-out group-hover:-translate-x-1 group-hover:text-white group-hover:bg-second 
                    p-2 rounded-lg mr-3 ${isLoading ? "-translate-x-1 text-white bg-second" : "bg-white text-second"}`}>
                  {isLoading ? <CircularProgress size={20} color="inherit" /> : <FaArrowLeft />}
               </span>
            </button>
         </div>
      </form>
   );
};

export default SigninForm;
