"use client";
import { FormikFormSignUpTpye } from "@/types/user";
import { passwordScore } from "@/utils/auth";
import {
   Box,
   CircularProgress,
   LinearProgress,
   Typography,
} from "@mui/material";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaRegEye, FaRegEyeSlash } from "react-icons/fa";

type Props = { isLoading: boolean };

const SignupForm = ({
   handleSubmit,
   values,
   touched,
   errors,
   handleChange,
   isLoading,
}: FormikFormSignUpTpye & Props) => {
   const [togglePassword, setTogglePassword] = useState(false);
   const [toggleRePassword, setToggleRePassword] = useState(false);
   const { passwordPercent, passwordScoreM, passwordColor, passwordStatus } =
      passwordScore(values.password);
   const [pS, setPColor] = useState(passwordColor);
   useEffect(() => {
      const { passwordColor } = passwordScore(values.password);
      setPColor(passwordColor);
   }, []);
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
            <label htmlFor="password">ساخت رمز عبور : </label>
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
            <span
               className={`transition-all ease-in overflow-hidden text-sm ${
                  values.password.length == 0 ? "h-0" : "h-5"
               }`}
            >
               {passwordStatus}
            </span>
            <div className={`w-full`}>
               <LinearProgress
                  variant="determinate"
                  color={passwordColor}
                  value={passwordPercent}
                  className="text-red-300"
               />
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
         <div className="InputBox">
            <label htmlFor="re_password">تکرار رمز عبور : </label>
            <div className="w-full relative">
               <input
                  type={!toggleRePassword ? "password" : "text"}
                  id="re_password"
                  name="re_password"
                  onChange={handleChange}
                  value={values.re_password}
                  className={`errorOutline ${
                     touched.re_password && errors.re_password
                        ? "transition-all ease-in outline-main"
                        : "outline-zinc-800"
                  } `}
               />
               <span
                  className="absolute right-3 top-1/2 transition-all ease-in -translate-y-1/2 px-2 p-1 rounded-md
                            cursor-pointer bg-zinc-200 active:bg-zinc-300"
                  onClick={() => setToggleRePassword(!toggleRePassword)}
               >
                  {!toggleRePassword ? <FaRegEye /> : <FaRegEyeSlash />}
               </span>
            </div>
            <div
               className={`transition-all ease-in h-0 ${
                  touched.re_password && errors.re_password ? "h-5" : " "
               }`}
            >
               {touched.re_password && errors.re_password ? (
                  <p className="text-sm text-main">{errors.re_password}</p>
               ) : null}
            </div>
         </div>

         <div className="flex flex-row gap-2 p-3">
            <p>قبلا ثبت نام کرده بودی ؟ </p>
            <Link
               className="text-second transition-all ease-out hover:text-black font-bold"
               href={"/auth/signin"}
            >
               ورود به حساب کاربری
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
               ساخت حساب کاربری
               <span
                  className={` flex items-center justify-center transition-all 
                    ease-out group-hover:-translate-x-1 group-hover:text-white group-hover:bg-second 
                    p-2 rounded-lg mr-3 ${
                       isLoading
                          ? "-translate-x-1 text-white bg-second"
                          : "bg-white text-second"
                    }`}
               >
                  {isLoading ? (
                     <CircularProgress size={20} color="inherit" />
                  ) : (
                     <FaArrowLeft />
                  )}
               </span>
            </button>
         </div>
      </form>
   );
};

export default SignupForm;
