import { HeaderLinks } from "@/constant/LinksMenu";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

type Props = {
   toggle: boolean;
};

const LinkListMobile = ({ toggle }: Props) => {
   const refmenu = useRef<HTMLUListElement>(null);
   const refContainermenu = useRef<HTMLDivElement>(null);
   useEffect(() => {
      if (refmenu.current && refContainermenu.current) {
         const linkHeight = refmenu.current.getBoundingClientRect().height;
         if (toggle) {
            refContainermenu.current.style.height = `${linkHeight}px`;
         } else {
            refContainermenu.current.style.height = `0px`;
         }
      }
   }, [toggle]);
   return (
      <div
         className={`w-full transition-all ease-in delay-150 mt-3 overflow-hidden ${
            toggle ? "mb-5" : " h-0"
         }`}
         ref={refContainermenu}
      >
         <ul
            ref={refmenu}
            className="flex flex-col justify-center items-center py-3 gap-3"
         >
            {HeaderLinks.map((item) => (
               <li
                  key={item.id}
                  className="transition-all ease-out bg-gray py-2 active:scale-95 w-5/6 rounded-md text-center"
               >
                  <Link href={item.link} className="block">
                     {item.title}
                  </Link>
               </li>
            ))}
         </ul>
      </div>
   );
};

export default LinkListMobile;
