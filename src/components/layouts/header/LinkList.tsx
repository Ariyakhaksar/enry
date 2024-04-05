"use client"
import React from "react";
import { motion } from "framer-motion";
import { HeaderLinks } from "@/constant/LinksMenu";
import Link from "next/link";
import { usePathname } from "next/navigation";
type Props = {};

const LinkList = (props: Props) => {
   const pathname = usePathname();

   return (
      <ul className="font-bold text-optionalColor hidden lg:flex flex-row gap-2">
         {HeaderLinks.map((item) => (
            <li
               key={item.id}
               className={`hover:text-main transition-all px-4 ease-in relative overflow-hidden ${
                  item.link == pathname ? "text-main" : ""
               }`}
            >
               <Link href={item.link}>{item.title}</Link>
               {item.link == pathname && (
                  <motion.span
                     className="absolute transition-all ease-out h-full bg-main w-[2px] -right-0 rounded-sm"
                     initial={{ x: 0, y: -60 }}
                     animate={{ x: 0, y: 0 }}
                     transition={{
                        duration: 0.3,
                        delay: 0.2,
                        ease: [0, 1, 0.3, 1.0],
                     }}
                  ></motion.span>
               )}
            </li>
         ))}
      </ul>
   );
};

export default LinkList;
