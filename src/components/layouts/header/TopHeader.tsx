import Link from "next/link";
import React from "react";
import {
   FaGithub,
   FaInstagram,
   FaLinkedinIn,
   FaRegClock,
} from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";

function TopHeader() {
   return (
      <div className="topHeader">
         <div className="container mx-auto flex flex-col items-center justify-around lg:justify-between lg:flex-row">
            <div className="flex flex-row gap-3 items-center">
               <span>دنبال کنید : </span>
               <span>
                  <ul className="flex flex-row gap-3 items-center text-base lg:text-lg">
                     <li className="LiIcons">
                        <Link href="/" passHref={true}>
                           <FaLinkedinIn />
                        </Link>
                     </li>
                     <li className="LiIcons">
                        <Link href="/" passHref={true}>
                           <FaGithub />
                        </Link>
                     </li>
                     <li className="LiIcons">
                        <Link href="/" passHref={true}>
                           <FaInstagram />
                        </Link>
                     </li>
                  </ul>
               </span>
            </div>
            <div className="flex flex-col mt-2 gap-1 lg:mt-0 sm:flex-row sm:gap-5 items-center">
               <div className="flex flex-row gap-2 item-center">
                  <span className="m-auto">
                     <FaRegClock />
                  </span>
                  <span className="font-bold">
                     شنبه - جمعه : &nbsp;
                     <span className="text-gray font-normal">
                        {" "}
                        8:00 صبح - 9:00 عصر
                     </span>
                  </span>
               </div>
               <div className="flex flex-row gap-2 item-center">
                  <span className="m-auto">
                     <HiOutlineLocationMarker />
                  </span>
                  <span className="font-bold">
                     دفتر : &nbsp;{" "}
                     <span className="text-gray font-normal">
                        ایران ، استان تهران ، میدان آزادی
                     </span>
                  </span>
               </div>
            </div>
         </div>
      </div>
   );
}

export default TopHeader;
