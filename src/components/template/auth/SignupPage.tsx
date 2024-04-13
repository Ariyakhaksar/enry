"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { SigninType, SignupType } from "@/types/user";
import SignupForm from "@/components/modules/SignupForm";
import Opacity from "@/animation/Opacity";
import { validateRegister } from "@/utils/auth";
import { signIn } from "next-auth/react";
import InOut from "@/animation/InOut";
import SuccessAlertRegister from "@/components/modules/SuccessAlertRegister";

type Props = {};

const SignupPage = (props: Props) => {
   const [isLoading, setIsLoading] = useState(false);
   const [signupError, setSignupError] = useState("");
   const [step, setStep] = useState<0 | 1>(0);
   const RegisterFormik = useFormik({
      initialValues: {
         email: "",
         password: "",
         re_password: "",
      },
      validate: validateRegister,
      onSubmit: (values) => {
         setIsLoading(true);
         SubmitHandler(values);
      },
   });
   const { handleSubmit, handleChange, values, errors, touched } =
      RegisterFormik;

   async function SubmitHandler(values: SignupType) {
      const res = await fetch("/api/auth/signup", {
         method: "POST",
         body: JSON.stringify({
            email: values.email,
            password: values.password,
         }),
         headers: { "Content-Type": "apllication/json" },
      });
      const data = await res.json();
      console.log(data);
      if (res.status === 201) {
         setSignupError("");
         signinUser(values);
      } else {
         setSignupError(data.error);
         setIsLoading(false);
      }
   }

   async function signinUser(values: SigninType) {
      const res = await signIn("credentials", {
         email: values.email,
         password: values.password,
         redirect: false,
      });
      if (res?.error) {
         setSignupError(res.error);
         setIsLoading(false);
      } else {
         setSignupError("");
         setIsLoading(false);
         setStep(1);
      }
   }

   return (
      <div className="FormAuth">
         <div className="BoxFormAuth">
            {step === 0 ? (
               <>
                  <div className="font-bold flex flex-col gap-5 text-black">
                     <h1 className="font-bold text-2xl">فرم ثبت نام</h1>
                     <p className="text-optionalColor text-base">
                        برای ثبت نام فرم زیر را پر کنید !
                     </p>
                     <div
                        className={`bg-red-100 text-red-400 rounded-md 
                     transition-all ease-in
                     overflow-hidden ${
                        signupError ? " h-10 py-2 px-5 " : " h-0 p-0 "
                     }`}
                     >
                        {signupError.length > 0 && (
                           <Opacity>
                              <span>{signupError}</span>
                           </Opacity>
                        )}
                     </div>
                  </div>
                  <SignupForm
                     handleSubmit={handleSubmit}
                     handleChange={handleChange}
                     values={values}
                     errors={errors}
                     touched={touched}
                     isLoading={isLoading}
                  />
               </>
            ) : (
               <InOut>
                  <SuccessAlertRegister />
               </InOut>
            )}
         </div>
      </div>
   );
};

export default SignupPage;
