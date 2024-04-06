import InOut from "@/animation/InOut";
import Image from "next/image";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";

function HeroHomePage() {
   return (
      <section className="HeroSection">
         <InOut>
            <div className="text-black flex flex-col gap-6 justify-center">
               <span className="text-main font-bold">خوش آمدید</span>
               <h1 className="font-[900] text-4xl sm:text-5xl">
                  سامانه خرید و اجاره ملک
               </h1>
               <p className="max-w-[350px] sm:max-w-[600px] sm:w-[600px] px-5 border-r lg:text-xl border-main">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است
               </p>
               <div className="flex flex-row justify-center px-0 lg:justify-start mb-5 gap-10 py-5">
                  <button
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
                  </button>
                  <button
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
                  </button>
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
   );
}

export default HeroHomePage;
