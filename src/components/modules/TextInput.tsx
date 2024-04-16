import { Field, FormikErrors, FormikTouched } from "formik";
import { ProfileType } from "@/types/profile";
import React from "react";
import { sp } from "@/utils/replaceNumber";

type TextInput = {
   label: string;
   name: string;
   type: "text" | "textarea" | "number";
   // handleChange: { (e: React.ChangeEvent<any>): void };
   value: any;
   // errors: FormikErrors<ProfileType>;
   // touched: FormikTouched<ProfileType>;
};

const TextInput = ({
   label,
   type,
   name,
   value,
   // errors,
   // touched,
   // handleChange,
}: TextInput) => {
   return (
      <>
         <div className="flex flex-col gap-3 ">
            <label htmlFor={name}>{label}</label>
            {type == "text" || type == "number" ? (
               type !== "number" ? (
                  <Field
                     type="text"
                     name={name}
                     id={name}
                     className="bg-zinc-100 px-3 border border-dashed border-zinc-400
                         outline-none py-1 w-full sm:w-[300px] rounded-md"
                  />
               ) : (
                  <Field
                     type="number"
                     name={name}
                     id={name}
                     className="bg-zinc-100 px-3 border border-dashed border-zinc-400
                     outline-none py-1 w-full sm:w-[300px] rounded-md"
                     min={0}
                  />
               )
            ) : (
               <Field 
                  name={name}
                  id={name}
                  className="bg-zinc-100 px-3 border border-dashed border-zinc-400
                        outline-none py-1 w-full sm:w-[300px] rounded-md max-h-40"
                  as="textarea"
               />
            )}
            {name == "price" && (
               <span className="text-sm text-zinc-400 px-2">
                  {sp(+value)} تومان
               </span>
            )}
         </div>
      </>
   );
};

export default TextInput;
