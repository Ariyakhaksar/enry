import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { MdApartment } from "react-icons/md";

type Props = {
    title: string;
    icon: JSX.Element;
    link : string
};

const CategoryHomePage = ({title , icon , link}: Props) => {
   return (
      <Link
         href={link}
         className="flex flex-row gap-3 items-center
                     active:scale-95
                     group
                     bg-zinc-100
                     hover:shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)]
                     hover:bg-white                  
                     transition-all ease-out
                     font-bold  rounded-md
                     cursor-pointer
                     w-full lg:w-auto
                  "
      >
         <div className="flex gap-3 justify-between items-center rounded-md p-5 w-full lg:w-[350px]">
            <div className="flex flex-row gap-3 items-center">
               <span className="text-main text-4xl">
                  {/* <MdApartment /> */}
                  {icon}
               </span>
               <h3 className="text-2xl font-bold">{title}</h3>
            </div>
            <span
               className="bg-white text-main transition-all ease-out group-hover:-translate-x-1 
                     group-hover:text-white group-hover:bg-main p-2 rounded-lg mr-3"
            >
               <FaArrowLeft />
            </span>
         </div>
      </Link>
   );
};

export default CategoryHomePage;
