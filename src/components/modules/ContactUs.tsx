"use client";

import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

type Props = {};

const ContactUs = (props: Props) => {
   const [DataForm, setDataForm] = useState({
      name: "",
      email: "",
      message: "",
   });
   const changeHandel = (
      e:
         | React.ChangeEvent<HTMLInputElement>
         | React.ChangeEvent<HTMLTextAreaElement>
   ) => {
      const { value, name } = e.target;
      setDataForm({ ...DataForm, [name]: value });
   };
   return (
      <>
         <div className="absolute -top-1 transition-all ease-out bg-[url('/image/shape/shape3.png')] w-full bg-cover h-12"></div>
         <div className="absolute -bottom-1 transition-all ease-out bg-[url('/image/shape/shape4.png')] w-full bg-cover h-12"></div>
         <div className="container mx-auto my-5 flex flex-col lg:flex-row gap-y-10 px-5 justify-between items-center">
            <div className="flex flex-col gap-3 w-full">
               <span className="text-main text-base lg:text-lg font-bold">
                  نقل و قول رایگان
               </span>

               <h3 className="text-xl lg:text-3xl font-extrabold">
                  به دنبال یک مشاور خبره از ما هستید؟
               </h3>
            </div>

            <div className="w-full flex flex-col gap-5 text-zinc-700 bg-white px-8 p-5 rounded-md text-center">
               {/* <span className="text-zinc-500 text-center my-5">فرم تماس بزودی</span> */}
               <h3 className="text-xl font-extrabold text-zinc-800">
                  نقل و قول رایگان
               </h3>
               <span className="h-[0.15rem] w-[50px] bg-main mx-auto"></span>

               <div className="flex flex-col md:flex-row  item-center gap-4">
                  <div className="flex flex-col gap-2 md:w-1/2">
                     {/* <label htmlFor="name" className="text-right font-bold">نام شما</label> */}
                     <input
                        type="text"
                        className="border border-zinc-300 p-3 py-4 outline-none rounded-md
                        placeholder:text-zinc-400 placeholder:font-bold font-bold"
                        placeholder="نام شما"
                        name="name"
                        value={DataForm.name}
                        onChange={(e) => changeHandel(e)}
                     />
                  </div>
                  <div className="flex flex-col gap-2 md:w-1/2">
                     {/* <label htmlFor="email" className="text-right font-bold">ایمیل شما</label> */}
                     <input
                        type="text"
                        className="border border-zinc-300 p-3 py-4 outline-none rounded-md
                        placeholder:text-zinc-400 placeholder:font-bold font-bold"
                        placeholder="ایمیل شما"
                        name="email"
                        value={DataForm.email}
                        onChange={(e) => changeHandel(e)}
                     />
                  </div>
               </div>
               <div className="flex flex-col text-left gap-4">
                  <textarea
                     className="border border-zinc-300 p-3 py-4 outline-none rounded-md w-full
                        placeholder:text-zinc-400 placeholder:font-bold font-bold min-h-[100px] max-h-[150px]"
                     placeholder="پیغام شما"
                     name="message"
                     onChange={(e) => changeHandel(e)}
                     value={DataForm.message}
                     maxLength={250}
                  ></textarea>
                  <span>
                     <span className={`text-second font-bold`}>
                        {DataForm.message.length}
                     </span>{" "}
                     / 250 لغت
                  </span>
               </div>
               <button
                  className="flex flex-row gap-3 items-center
                        active:scale-95
                        group
                        bg-main
                        justify-center
                        hover:bg-black hover:shadow-lg text-white transition-all ease-out
                        border border-main hover:border-black font-bold pr-6 pl-3 py-2 rounded-md"
               >
                  ارسال پیغام
                  <span className="bg-white text-main transition-all ease-out group-hover:-translate-x-1 group-hover:text-white group-hover:bg-main p-2 rounded-lg mr-3">
                     <FaArrowLeft />
                  </span>
               </button>
            </div>
         </div>
      </>
   );
};

export default ContactUs;
