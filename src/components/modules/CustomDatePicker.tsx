"use client";
import React, { useEffect, useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/colors/teal.css";
import "react-multi-date-picker/styles/layouts/mobile.css";
import { e2p, p2e } from "@/utils/replaceNumber";
import { Value } from "react-multi-date-picker";
import { CircularProgress } from "@mui/material";

type Props = {
   value: Date;
   // handleChange: any;
   name: string;
   setDateValue: React.Dispatch<React.SetStateAction<Date>>;
};

const CustomDatePicker = ({ value, setDateValue, name }: Props) => {
   const nowDate = new DateObject({
      date: new Date(),
      calendar: persian,
      locale: persian_fa,
   });

   const changeHandelDate = (e: DateObject | DateObject[] | null) => {
      if (e) {
         const date = new DateObject({
            date: e.toString(),
            calendar: persian,
            locale: persian_fa,
         });
         setDateValue(date.toDate());
      }
   };

   return (
      <div className="flex flex-col gap-4 ">
         <p>تاریخ ساخت </p>
         <div className="flex flex-row gap-3 items-center">
            {value && (
               <DatePicker
                  calendar={persian}
                  locale={persian_fa}
                  disabled={!value}
                  value={value}
                  onChange={changeHandelDate}
                  name={name}
                  maxDate={p2e(nowDate.format())}
                  calendarPosition="bottom-right"
                  className="teal rmdp-mobile"
                  style={{
                     backgroundColor: "#f4f4f5",
                     padding: "1rem",
                     height: "2rem",
                     border: "dashed 1px #a1a1aa",
                  }}
               />
            )}
            {!value && <span className="text-second"> <CircularProgress color="inherit" size={20} /></span>}
         </div>
      </div>
   );
};

export default CustomDatePicker;
