"use client";
import Opacity from "@/animation/Opacity";
import { LinkDashSide } from "@/constant/LinksDashSide";
import { Button, IconButton, Tooltip } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { BiHomeAlt } from "react-icons/bi";
import { FaArrowDownWideShort, FaArrowUpWideShort } from "react-icons/fa6";

type Props = { RoleUser: string };

const Sidebar = ({ RoleUser }: Props) => {
   const [toggleSidebar, setToggleSidebar] = useState(false);
   const refmenu = useRef<HTMLUListElement>(null);
   const refContainermenu = useRef<HTMLDivElement>(null);
   useEffect(() => {
      if (refmenu.current && refContainermenu.current) {
         const linkWidth = refmenu.current.getBoundingClientRect().width;
         let wAdd = linkWidth + 60;
         //  refContainermenu.current.style.width = `${w}px`;
         if (toggleSidebar) {
            refContainermenu.current.style.width = `250px`;
         } else {
            refContainermenu.current.style.width = `60px`;
         }
      }
   }, [toggleSidebar]);

   const pathname = usePathname();

   return (
      <>
         {toggleSidebar && (
            <Opacity d={0.2}>
               <span className="absolute sm:hidden transition-all ease-in w-full h-[72vh] top-0 rounded-lg bg-zinc-900 z-0 opacity-20"></span>
            </Opacity>
         )}
         <div
            className={`${
               toggleSidebar ? "absolute top-0 z-10 sm:static" : " "
            }`}
            style={{ zIndex: 20 }}
         >
            <div
               className="bg-zinc-100 rounded-md rounded-b-none flex flex-col items-center p-5 min-h-[72vh]
         transition-all ease-in"
               ref={refContainermenu}
            >
               <div
                  className={`w-full flex items-center justify-end transition-all ease-in ${
                     !toggleSidebar && "justify-center"
                  }`}
               >
                  <button
                     onClick={() => setToggleSidebar(!toggleSidebar)}
                     className={`transition-all ease-in ${
                        toggleSidebar ? "rotate-90" : "-rotate-90"
                     } text-xl bg-zinc-200 p-2 rounded-md`}
                  >
                     {toggleSidebar ? (
                        <span className="text-xl ">
                           <FaArrowUpWideShort />
                        </span>
                     ) : (
                        <span className="text-xl ">
                           {/* <FaArrowDownWideShort /> */}
                           <FaArrowUpWideShort />
                        </span>
                     )}
                  </button>
               </div>
               <ul
                  className="flex w-full flex-col gap-2 items-center mt-5"
                  ref={refmenu}
               >
                  {LinkDashSide.map((item) => (
                     <li
                        className={`flex ${
                           item.role === "ADMIN" &&
                           RoleUser !== item.role &&
                           "hidden"
                        } w-full items-center ${
                           !toggleSidebar ? "justify-center" : "justify-start"
                        }`}
                        key={item.id}
                     >
                        {toggleSidebar ? (
                           <Button
                              color="inherit"
                              className={`w-full p-0 py-0 block rounded-md`}
                           >
                              <Opacity>
                                 <Link
                                    href={item.link}
                                    className={`w-full  h-full block rounded-md`}
                                    style={{ width: "100%" }}
                                 >
                                    <span
                                       className={`flex flex-row items-center gap-3
                                          transition-all ease-in px-3 py-2
                                          border-r-2 
                                       ${
                                          pathname === item.link
                                             ? "text-second border-second"
                                             : "border-transparent"
                                       }
                                       `}
                                    >
                                       <span className="text-lg transition-all ease-in">
                                          {item.icon}
                                       </span>
                                       <span className="transition-all ease-in">{item.title}</span>
                                    </span>
                                 </Link>
                              </Opacity>
                           </Button>
                        ) : (
                           <Tooltip title={item.title} placement="left-start">
                              <Link href={item.link}>
                                 <IconButton
                                    aria-label="home"
                                    sx={{ borderRadius: "7px" }}
                                    className={` transition-all ease-in
                                        ${
                                           pathname === item.link
                                              ? "text-second text-xl"
                                              : "text-lg"
                                        } `}
                                 >
                                    <span>{item.icon}</span>
                                 </IconButton>
                              </Link>
                           </Tooltip>
                        )}
                     </li>
                  ))}
               </ul>
            </div>
         </div>
      </>
   );
};

export default Sidebar;
