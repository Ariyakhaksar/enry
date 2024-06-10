import InOut from "@/animation/InOut";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import BoxServices from "./BoxServices";

function HeroHomePage() {
   return (
      <>
         <section className="HeroSection">
            <InOut>
               <div className="text-black flex flex-col gap-6 justify-center">
                  <span className="text-main font-bold">خوش آمدید</span>
                  <h1 className="font-[900] text-4xl sm:text-5xl">
                     سامانه خرید و اجاره ملک
                  </h1>
                  <p className="max-w-[350px] sm:max-w-[600px] sm:w-[600px] px-5 border-r lg:text-xl border-main">
                     لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                     با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه
                     و مجله در ستون و سطرآنچنان که لازم است
                  </p>
                  <div className="flex flex-row justify-center px-0 lg:justify-start mb-5 gap-10 py-5">
                     <Link
                        href={"#about-us"}
                        className="flex flex-row gap-3 items-center
                        active:scale-95
                        group
                        bg-main
                        hover:bg-black hover:shadow-lg text-white transition-all ease-out
                        border border-main hover:border-black font-bold pr-6 pl-3 py-2 rounded-md"
                     >
                        درباره ما
                        <span className="bg-white text-main transition-all ease-out group-hover:-translate-x-1 group-hover:text-white group-hover:bg-main p-2 rounded-lg mr-3">
                           <FaArrowLeft />
                        </span>
                     </Link>
                     <Link
                        href={"/auth/signin"}
                        className="flex flex-row gap-3 items-center
                        active:scale-95
                        group
                        hover:bg-black hover:shadow-lg hover:text-white transition-all ease-out
                        border border-main hover:border-black font-bold text-black pr-6 pl-3 py-2 rounded-md"
                     >
                        شروع کار
                        <span className="bg-main text-white transition-all ease-out group-hover:-translate-x-1 group-hover:text-main group-hover:bg-white p-2 rounded-lg mr-3">
                           <FaArrowLeft />
                        </span>
                     </Link>
                  </div>
               </div>
            </InOut>
            <div>
               <Image
                  src={"/image/banner/banner1.png"}
                  alt=""
                  width={744}
                  height={874}
                  className="w-[300px] sm:w-[400px] lg:w-[450px] xl:w-[600px]"
               />
            </div>
            <span className="absolute bottom-0">
               <Image
                  src={"/image/banner/banner-shape.png"}
                  alt=""
                  width={2290}
                  height={170}
                  className=""
               />
            </span>
         </section>
         <section
            id="services"
            className="w-full flex flex-col items-center my-10 py-5 gap-5"
         >
            <div className="text-center flex flex-col gap-5 items-center">
               <span className="text-main font-bold">خدمات</span>
               <h3 className="text-4xl font-extrabold text-zinc-700">
                  خدمات اختصاصی ما
               </h3>
               <p className="max-w-[550px] text-zinc-500 leading-8">
                  لورم ایپسوم ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم
                  استاندارد صنعت بوده است. لورم ایپسوم ساختار چاپ و متن را در بر
                  می گیرد.
               </p>
               <span className="h-[0.15rem] w-[50px] bg-main"></span>
            </div>

            <div className="container mx-auto flex flex-col px-5 lg:flex-row items-center justify-center gap-10">
               <BoxServices
                  title={"مشاوره مالی"}
                  image={"/image/services/services1.jpg"}
                  text={
                     "لورم ایپسوم ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم استاندارد صنعت بوده است. لورم ایپسوم ساختار چاپ و متن را در بر می گیرد."
                  }
               />
               <BoxServices
                  title={"مشاوره استراتژی"}
                  image={"/image/services/services2.jpg"}
                  text={
                     "لورم ایپسوم ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم استاندارد صنعت بوده است. لورم ایپسوم ساختار چاپ و متن را در بر می گیرد."
                  }
               />
               <BoxServices
                  title={"مشاوره سازمانی"}
                  image={"/image/services/services3.jpg"}
                  text={
                     "لورم ایپسوم ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم استاندارد صنعت بوده است. لورم ایپسوم ساختار چاپ و متن را در بر می گیرد."
                  }
               />
            </div>
         </section>
         <section
            id="contact-us"
            className="w-full py-20 my-10  bg-second relative text-zinc-100"
         >
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
               <div className="w-full flex flex-col gap-5 text-zinc-700 bg-white p-5 rounded-md text-center">
                  {/* <span className="text-zinc-500 text-center my-5">فرم تماس بزودی</span> */}
                  <h3 className="text-xl font-extrabold text-zinc-800">نقل و قول رایگان</h3>
                  
               </div>
            </div>
         </section>
      </>
   );
}

export default HeroHomePage;
