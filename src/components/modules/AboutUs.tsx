import Image from "next/image";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { PiStrategyBold } from "react-icons/pi";
import { RiRefund2Line } from "react-icons/ri";

type Props = {};

const AboutUs = (props: Props) => {
   return (
      <>
         <div className="w-full flex justify-center lg:justify-end">
            <Image
               src={"/image/about/about1.png"}
               width={751}
               height={728}
               alt="about-us"
               className="lg:max-w-[600px]"
            />
         </div>
         <div className="w-full flex flex-col gap-5 py-12 items-center lg:items-start">
            <div className="flex flex-col gap-3 w-full">
               <span className="text-main font-bold">درباره ما</span>
               <h3 className="text-zinc-700 font-extrabold text-2xl lg:text-4xl lg:max-w-[610px] lg:leading-[3rem]">
                  یکی از سریعترین راهها برای کسب موفقیت در تجارت
               </h3>
               <p className="lg:max-w-[610px] text-zinc-500 leading-8">
                  لورم ایپسوم ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم
                  استاندارد صنعت بوده است. لورم ایپسوم ساختار چاپ و متن را در بر
                  می گیرد. لورم ایپسوم استاندارد صنعت بوده است. لورم ایپسوم
                  ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم استاندارد صنعت
                  بوده است. لورم ایپسوم ساختار چاپ و متن را در بر می گیرد. لورم
                  ایپسوم استاندارد صنعت بوده است.
               </p>
            </div>
            <div className="flex flex-col md:flex-row gap-x-24 gap-y-10">
               <div className="flex flex-col items-center lg:items-start gap-5">
                  <span
                     className="text-4xl text-main bg-white
                     p-5 rounded-full flex items-center justify-center"
                     style={{
                        boxShadow:
                           "rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px",
                     }}
                  >
                     <IoStar />
                  </span>
                  <h4 className=" text-2xl font-extrabold">ثبات و پایداری</h4>
               </div>
               <div className="flex flex-col items-center lg:items-start gap-5">
                  <span
                     className="text-4xl text-main bg-white
                     p-5 rounded-full flex items-center justify-center"
                     style={{
                        boxShadow:
                           "rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px",
                     }}
                  >
                     <PiStrategyBold />
                  </span>
                  <h4 className=" text-2xl font-extrabold">استراتژی</h4>
               </div>
               <div className="flex flex-col items-center lg:items-start gap-5">
                  <span
                     className="text-4xl text-main bg-white
                     p-5 rounded-full flex items-center justify-center"
                     style={{
                        boxShadow:
                           "rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px",
                     }}
                  >
                     <RiRefund2Line />
                  </span>
                  <h4 className=" text-2xl font-extrabold">سرمایه گذاری</h4>
               </div>
            </div>
            <button
               className="flex flex-row gap-3 items-center mt-3
                        active:scale-95
                        group
                        hover:bg-black hover:shadow-lg hover:text-white transition-all ease-out
                        border border-main hover:border-black font-bold text-black pr-8 pl-3 py-2 rounded-md"
            >
               ادامه خواندن
               <span className="bg-main text-white transition-all ease-out group-hover:-translate-x-1 group-hover:text-main group-hover:bg-white p-2 rounded-lg mr-3">
                  <FaArrowLeft />
               </span>
            </button>
         </div>
      </>
   );
};

export default AboutUs;
