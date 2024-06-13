import { sp } from "@/utils/replaceNumber";
import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import toast from "react-hot-toast";
import { BiSolidCopy } from "react-icons/bi";

type Props = {
   price: string;
   location: string;
   phone: string;
};

const SidebarAds = ({ price, location, phone }: Props) => {
   return (
      <div className="lg:max-w-[400px] w-full bg-zinc-50 p-5 shadow-lg lg:rounded-lg flex flex-col gap-5">
         <div className="pb-7 border-b border-zinc-300">
            <h3 className="font-bold p-2 px-3 border-r-2 border-main text-second">
               قیمت ملک :{" "}
            </h3>
            <p className="bg-white p-2 mt-2 shadow-md text-main text-center rounded-md flex gap-2 items-center justify-center">
               {sp(price)} <span>تومان</span>
            </p>
         </div>
         <div className="pb-7 border-b border-zinc-300">
            <h3 className="font-bold p-2 px-3 border-r-2 border-main text-second">
               آدرس ملک :{" "}
            </h3>
            <p className="bg-white p-2 mt-2 shadow-md text-second text-center rounded-md">
               {location}
            </p>
         </div>
         <div className="pb-7">
            <h3 className="font-bold p-2 px-3 border-r-2 border-main text-second">
               شماره تلفن :{" "}
            </h3>
            <CopyToClipboard text={phone}>
               <p className="bg-white p-2 mt-2 shadow-md text-second text-center 
               hover:bg-second hover:text-zinc-100 transition-all ease-out rounded-md
               flex gap-3 items-center justify-center cursor-pointer active:scale-[0.98]"
               onClick={() => {toast.success("شماره تلفن با موفقیت کپی شد !")}}
               >
                  <span>
                     <BiSolidCopy />
                  </span>
                  {phone}
               </p>
            </CopyToClipboard>
         </div>
      </div>
   );
};

export default SidebarAds;
