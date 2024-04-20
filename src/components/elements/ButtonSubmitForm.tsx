import { CircularProgress } from "@mui/material";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";

type Props = {
   isLoading: boolean;
};

const ButtonSubmitForm = ({ isLoading }: Props) => {
   return (
      <div className="w-full flex flex-row justify-start mt-10">
         <button
            type="submit"
            disabled={isLoading}
            className="flex flex-row gap-3 justify-center items-center
                              active:scale-95
                              group 
                              
                              bg-second
                              hover:bg-black hover:shadow-lg text-white transition-all ease-out
                              border border-second hover:border-black font-bold pr-6 pl-3 py-2 rounded-md
                              disabled:opacity-40 disabled:pointer-events-none
                              disabled:bg-black disabled:border-black
                              "
         >
            ثبت آگهی
            <span
               className={` flex items-center justify-center transition-all 
                                 ease-out group-hover:-translate-x-1 group-hover:text-white group-hover:bg-second 
                                 p-2 rounded-lg mr-3 ${
                                    isLoading
                                       ? "-translate-x-1 text-white bg-second"
                                       : "bg-white text-second"
                                 }`}
            >
               {isLoading ? (
                  <CircularProgress size={20} color="inherit" />
               ) : (
                  <FaArrowLeft />
               )}
            </span>
         </button>
      </div>
   );
};

export default ButtonSubmitForm;
