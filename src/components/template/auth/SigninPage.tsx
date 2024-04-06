"use client";
import React, { useState } from "react";
import SigninForm from "@/components/modules/SigninForm";
import { validateLogin } from "@/utils/auth";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";

type Props = {};

const SigninPage = (props: Props) => {
   const [isLoading, setIsLoading] = useState(false);
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

   async function SubmitHandler(values: { email: string; password: string }) {
      //
      console.log(values);
   }
   return (
      <div className="FormAuth">
         <div className="BoxFormAuth">
            <div className="font-bold flex flex-col gap-5 text-black">
               <h1 className="font-bold text-2xl">فرم ورود به حساب کاربری</h1>
               <p className="text-optionalColor text-base">
                  برای ورود به حساب کاربری خود فرم زیر را پر کنید!
               </p>
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
