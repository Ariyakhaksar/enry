"use client";
import React, { useEffect, useState } from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/colors/teal.css";
import "react-multi-date-picker/styles/layouts/mobile.css";
import { e2p } from "@/utils/replaceNumber";
import { Value } from "react-multi-date-picker";

type Props = {
   value: Value;
   // handleChange: any;
   name: string;
   setDateValue: React.Dispatch<React.SetStateAction<Value>>;
};

const CustomDatePicker = ({ value, setDateValue, name }: Props) => {

   return (
      <div className="flex flex-col gap-4">
         <p>تاریخ ساخت </p>
         <DatePicker
            calendar={persian}
            locale={persian_fa}
            value={value}
            onChange={setDateValue}
            name={name}
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
