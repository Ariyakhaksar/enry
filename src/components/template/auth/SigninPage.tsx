"use client";
import React, { useState } from "react";
import SigninForm from "@/components/modules/SigninForm";
import { validateLogin } from "@/utils/auth";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { SigninType } from "@/types/user";
import { signIn } from "next-auth/react";
import Opacity from "@/animation/Opacity";

type Props = {};

const SigninPage = (props: Props) => {
   const [isLoading, setIsLoading] = useState(false);
   const [signinError, setSigninError] = useState("");
   const router = useRouter();
   const LoginFormik = useFormik({
      initialValues: {
         email: "",
         password: "",
      },
      validate: validateLogin,
      onSubmit: (values) => {
         setIsLoading(true);
         SubmitHandler(values);
      },
   });
   const { handleSubmit, handleChange, values, errors, touched } = LoginFormik;

   async function SubmitHandler(values: SigninType) {
      const res = await signIn("credentials", {
         email: values.email,
         password: values.password,
         redirect: false,
      });
      if (res?.error) {
         setSigninError(res.error);
         setIsLoading(false);
      } else {
         setSigninError("");
         setIsLoading(false);
         router.push('/dashboard')
      }
   }
   return (
      <div className="FormAuth">
         <div className="BoxFormAuth">
            <div className="font-bold flex flex-col gap-5 text-black">
               <h1 className="font-bold text-2xl">فرم ورود به حساب کاربری</h1>
               <p className="text-optionalColor text-base">
                  برای ورود به حساب کاربری خود فرم زیر را پر کنید!
               </p>
               <div
                  className={`bg-red-100 text-red-400 rounded-md 
                     transition-all ease-in
                     overflow-hidden ${
                     signinError ? " h-10 py-2 px-5 " : " h-0 p-0 "
                  }`}
               >
                  {
                     signinError.length > 0 && <Opacity><span>{signinError}</span></Opacity>
                  }
               </div>
            </div>
            <SigninForm
               handleSubmit={handleSubmit}
               handleChange={handleChange}
               values={values}
               errors={errors}
               touched={touched}
               isLoading={isLoading}
            />
         </div>
      </div>
   );
};

export default SigninPage;
