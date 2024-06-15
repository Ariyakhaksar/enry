import React from "react";

type Props = {
   list: string[];
   title: string;
};

const ListAds = ({ list, title }: Props) => {
   return (
      <div className="w-full p-5 rounded-md">
         <h4 className="font-bold py-2 text-second">{title}</h4>
         <ul className="flex flex-col gap-4 text-zinc-600">
            {list.length > 0 ? (
               list.map((i, index) => (
                  <li
                     key={index}
                     className="w-full bg-white p-2 px-3 shadow-md"
                  >
                     <span className="text-main">{index + 1} -</span> {i}
                  </li>
               ))
            ) : (
               <li className="text-zinc-500 text-center w-full my-2">
                  {title} برای این آگهی ثبت نشده است !
               </li>
            )}
         </ul>
      </div>
   );
};

export default ListAds;
