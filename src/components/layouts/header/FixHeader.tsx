"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaBars, FaRegUser } from "react-icons/fa";
import LinkList from "./LinkList";
import { MdClose } from "react-icons/md";
import LinkListMobile from "./LinkListMobile";

function FixHeader() {
   const [toggleMenu, setToggleMenu] = useState(false);
   return (
      <div className="fixHeader transition-all ease-out">
         <div className="container mx-auto flex flex-row items-center justify-around lg:justify-between">
            <div className="flex flex-row gap-3 lg:gap-8 items-center">
               <div className="inline-block lg:hidden">
                  <button
                     className="flex flex-row gap-3 items-center
                        active:scale-95 text-xl
                        hover:bg-second hover:shadow-lg hover:text-white transition-all ease-out
                        font-bold text-optionalColor px-3 py-2 rounded-md"
                     onClick={() => setToggleMenu(!toggleMenu)}
                  >
                     {!toggleMenu ? <FaBars /> : <MdClose />}
                  </button>
               </div>
               <div>
                  <Image
                     src={"/image/logo.png"}
                     alt=""
                     width={141}
                     height={33}
                  />
               </div>
               <div className="hidden lg:inline-block">
                  <LinkList />
               </div>
            </div>
            <div>
               <div>
                  <button
                     className="flex flex-row gap-3 items-center
                        active:scale-95
                        hover:bg-second hover:shadow-lg hover:text-white transition-all ease-out
                        border border-optionalColor font-bold text-optionalColor px-4 py-2 rounded-md"
                  >
                     حساب کاربری
                     <span>
                        <FaRegUser />
                     </span>
                  </button>
               </div>
            </div>
         </div>
         <div className="lg:hidden inline-block">
            <LinkListMobile toggle={toggleMenu} />
         </div>
      </div>
   );
}

export default FixHeader;
