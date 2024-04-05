import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegUser } from "react-icons/fa";

function FixHeader() {
   return (
      <div className="fixHeader">
         <div className="container mx-auto flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-8">
               <div>
                  <Image
                     src={"/image/logo.png"}
                     alt=""
                     width={141}
                     height={33}
                  />
               </div>
               <div>
                  <ul className="font-bold text-optionalColor flex flex-row gap-7">
                     <li className="hover:text-main transition-all ease-in">
                        <Link href={"/"}>خانه</Link>
                     </li>
                     <li>
                        <Link href={"/"}>خدمات</Link>
                     </li>
                     <li>
                        <Link href={"/"}>املاک</Link>
                     </li>
                     <li>
                        <Link href={"/"}>درباره ما</Link>
                     </li>
                     <li>
                        <Link href={"/"}>ارتباط با ما</Link>
                     </li>
                  </ul>
               </div>
            </div>
            <div>
                <div>
                    <button className="flex flex-row gap-3 items-center hover:bg-second hover:text-white transition-all ease-out
                        border border-optionalColor font-bold text-optionalColor px-4 py-2 rounded-md">
                        حساب کاربری
                        <span><FaRegUser /></span>

                    </button>
                </div>
            </div>
         </div>
      </div>
   );
}

export default FixHeader;
