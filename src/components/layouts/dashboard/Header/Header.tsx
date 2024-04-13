"use client";
import Opacity from "@/animation/Opacity";
import { useEffect, useState } from "react";
import { FaRegClock } from "react-icons/fa";
import { GiNightSky } from "react-icons/gi";
import { MdOutlineDateRange } from "react-icons/md";

type Day = {
   text: string;
   icon?: JSX.Element;
};

function Header() {
   const [date, setDate] = useState<Date | null>(null);

   const [day, setDay] = useState<Day>({
      text: "",
   });
   useEffect(() => {
      let timer = setInterval(() => {
         setDate(new Date());
      }, 1000);
      return function cleanup() {
         clearInterval(timer);
      };
   }, []);

   useEffect(() => {
      if (date) {
         if (date.getHours() < 5 && date.getHours() >= 0) {
            setDay({ text: "بامدادتان نکو" });
         }
         if (date.getHours() < 12 && date.getHours() >= 5) {
            setDay({ text: "سپیده دمتان نکو" });
         }
         if (date.getHours() < 17 && date.getHours() >= 12) {
            setDay({ text: "نیم روزتان نکو" });
         }
         if (date.getHours() < 18 && date.getHours() >= 17) {
            setDay({ text: "پس از نیمروزتان نکو" });
         }
         if (date.getHours() < 24 && date.getHours() >= 18) {
            setDay({ text: "شامگاهتان نکو", icon: <GiNightSky /> });
         }
      }
   }, [date]);
   return (
      <div className="HeaderDashboard">
         <div>
            <div className="TextWelcome">
               <p>خوش آمدید ؛</p>
               {day.text && (
                  <Opacity>
                     <p className="transition-all ease-in day flex flex-row">
                        {day.icon && <span>{day.icon}</span>}
                        <span>{day.text}</span>
                     </p>
                  </Opacity>
               )}
            </div>
         </div>
         {date && (
            <Opacity>
               <div className="DateBox">
                  <p>
                     <span>
                        <MdOutlineDateRange />
                     </span>
                     تاریخ : {date.toLocaleDateString("fa-IR")}
                  </p>

                  <p className="p_clock">
                     <span>
                        <FaRegClock />
                     </span>
                     ساعت : {date.toLocaleTimeString("fa-IR")}
                  </p>
               </div>
            </Opacity>
         )}
      </div>
   );
}

export default Header;
