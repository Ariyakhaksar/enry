import Image from "next/image";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";

type Props = {
    title: string;
    image: string;
    text: string;
};

const BoxServices = ({title , image , text}: Props) => {
   return (
      <div className="w-full md:w-[400px] border border-zinc-200 rounded-xl overflow-hidden group/box transition-all ease-out">
         <div className="relative">
            <Image
               src={image}
               width={860}
               height={622}
               alt="01"
               className="w-full md:w-[400px] rounded-t-xl"
            />
            <div className="absolute transition-all ease-out bottom-0 group-hover/box:bg-[url('/image/shape/shape2.png')] bg-[url('/image/shape/shape1.png')] w-full bg-cover h-12"></div>
         </div>
         <div className="px-5 flex flex-col gap-3 py-5 items-start group-hover/box:bg-second  transition-all ease-out">
            <h2 className="font-extrabold text-2xl text-zinc-700 group-hover/box:text-zinc-100 transition-all ease-out select-none">
               {title}
            </h2>
            <p className="text-zinc-500 group-hover/box:text-zinc-100 select-none">
              {text}
            </p>
            <button
               className="flex flex-row gap-3 items-center
                        active:scale-95
                        mt-5
                        group/btn
                        hover:shadow-lg hover:text-white transition-all ease-out
                        group-hover/box:hover:text-black
                        border group-hover/box:border-transparent border-main group-hover/box:bg-main group-hover/box:hover:bg-white group-hover/box:text-zinc-100 font-bold text-black pr-6 pl-3 py-2 rounded-md"
            >
               ادامه خواندن
               <span className="bg-main text-white transition-all group-hover/box:text-main group-hover/box:bg-white ease-out group-hover/btn:-translate-x-1 group-hover/box:group-hover/btn:text-white group-hover/box:group-hover/btn:bg-main p-2 rounded-lg mr-3">
                  <FaArrowLeft />
               </span>
            </button>
         </div>
      </div>
   );
};

export default BoxServices;
