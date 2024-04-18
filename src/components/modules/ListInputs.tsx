import Opacity from "@/animation/Opacity";
import { Tooltip } from "@mui/material";
import { Field, FieldArray } from "formik";
import React from "react";
import { TiDeleteOutline } from "react-icons/ti";

type Props = {
   value: never[];
   title: string;
   name: string;
   lim: number;
};

const ListInputs = ({ value, title, lim, name }: Props) => {
   return (
      <FieldArray name={name}>
         {({ push, remove }) => (
            <>
               <div className="p-5 border border-zinc-200 rounded-md mt-5">
                  <div className="flex gap-4 items-center">
                     <h3>{title}</h3>
                     <button
                        className="bg-second transition-all ease-in text-zinc-100 px-3 py-1 rounded-sm disabled:opacity-40"
                        onClick={() => {
                           if (value.length < lim) {
                              push("");
                           }
                        }}
                        disabled={value.length < lim ? false : true}
                        type="button"
                     >
                        افزودن
                     </button>
                     <span className="text-sm">حداکثر {lim} مورد </span>
                  </div>
                  {value.map((_, index) => (
                     <Opacity d={0.5} key={index}>
                        <div className="flex gap-3 justify-start items-center my-5">
                           <span className="px-2 py-1 w-10 border-r border-second text-center">
                              {index + 1}
                           </span>
                           <Field
                              type="text"
                              name={`${name}.${index}`}
                              id={`${name}.${index}`}
                              className="bg-zinc-100 px-3 border border-dashed border-zinc-400
                      outline-none py-1 w-full sm:w-[300px] rounded-md"
                           />
                           <Tooltip title={"حذف"} placement="left">
                              <button
                                 onClick={() => remove(index)}
                                 className="text-red-500 border border-transparent rounded-md
                         transition-all ease-in
                         border-dashed hover:border-red-500 px-1 py-1"
                                 type="button"
                              >
                                 <span className="text-2xl">
                                    <TiDeleteOutline />
                                 </span>
                              </button>
                           </Tooltip>
                        </div>
                     </Opacity>
                  ))}
               </div>
            </>
         )}
      </FieldArray>
   );
};

export default ListInputs;
