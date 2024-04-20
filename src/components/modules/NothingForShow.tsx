"use client";
import Link from "next/link";
import React from "react";

type Props = {
   icon?: JSX.Element;
   link: string;
   textLink: string;
   title: React.ReactNode;
};

const NothingForShow = ({ icon, title, link, textLink }: Props) => {
   return (
      <>
         <p
            className="w-full flex gap-5 flex-row justify-center 
                font-bold text-2xl py-5 mt-10 text-zinc-400 select-none
                items-center"
         >
            {title}
            {icon && <span>{icon}</span>}
         </p>
         <div
            className="w-full flex justify-center font-bold text-base mt-5
                text-second"
         >
            <Link
               href={link}
               className="
                    py-2 px-5 rounded-md border transition-all ease-in
                    hover:bg-second hover:text-zinc-100
                    "
            >
               {textLink}
            </Link>
         </div>
      </>
   );
};

export default NothingForShow;
