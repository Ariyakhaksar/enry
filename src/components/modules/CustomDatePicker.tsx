"use client";
import React, { useEffect, useState } from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/colors/teal.css";
import "react-multi-date-picker/styles/layouts/mobile.css";
import { e2p } from "@/utils/replaceNumber";

type Props = {
   value: Date;
   handleChange: any;
   name: string;
};

const CustomDatePicker = ({ value, handleChange, name }: Props) => {
   const [date, setDate] = useState<Date | null>(null);

   useEffect(() => {
      let timer = setInterval(() => {
         setDate(new Date());
      }, 1000);
      return function cleanup() {
         clearInterval(timer);
      };
   }, []);
   return (
      <div className="flex flex-col gap-4">
         <p>تاریخ ساخت </p>
         <DatePicker
            calendar={persian}
            locale={persian_fa}
            disabled={!date}
            value={value}
            onChange={handleChange}
            name={name}
            maxDate={date ? e2p(date?.toLocaleDateString("fa-IR")) : ""}
            calendarPosition="bottom-right"
            className="teal rmdp-mobile"
            style={{
               backgroundColor: "#f4f4f5",
               padding: "1rem",
               height: "2rem",
               border: "dashed 1px #a1a1aa",
            }}
         />
      </div>
   );
};

export default CustomDatePicker;
