import { Field, FormikErrors, FormikTouched } from "formik";
import { ProfileType } from "@/types/profile";
import React from "react";
import { p2e, sp } from "@/utils/replaceNumber";
import { TbSquareRoundedChevronDownFilled } from "react-icons/tb";
import Opacity from "@/animation/Opacity";

type TextInput = {
   label: string;
   name: "title" | "description" | "location" | "phone" | "price" | "realState";
   type: "text" | "textarea" | "number";
   value: any;
   errors: string | undefined;
   touched: boolean | undefined;
};

const TextInput = ({
   label,
   errors,
   touched,
   type,
   name,
   value,
}: TextInput) => {
   return (
      <>
         <div className="flex flex-col gap-3 ">
            <label htmlFor={name}>{label}</label>
            {type == "text" || type == "number" ? (
               type !== "number" ? (
                  <>
                     <Field
                        type="text"
                        name={name}
                        id={name}
                        className="bg-zinc-100 px-3 border border-dashed border-zinc-400
                         outline-none py-1 w-full sm:w-[300px] rounded-md"
                     />

                     <div
                        className={`transition-all ease-in h-0 ${
                           touched && errors ? "h-5" : " "
                        }`}
                     >
                        {touched && errors ? (
                           <Opacity>
                              <p className="text-sm text-main">{errors}</p>
                           </Opacity>
                        ) : null}
                     </div>
                  </>
               ) : (
                  <>
                     <Field type="text" name={name} id={name}>
                        {({ field }: { field: any }) => (
                           <>
                              <input
                                 type="text"
                                 {...field}
                                 className="bg-zinc-100 px-3 border border-dashed border-zinc-400
                              outline-none py-1 w-full sm:w-[300px] rounded-md"
                                 min="0"
                                 maxLength="15"
                                 onKeyPress={(e: any) => {
                                    if (!/[0-9]/.test(e.key)) {
                                       e.preventDefault();
                                    }
                                 }}
                              />
                           </>
                        )}
                     </Field>
                     <div
                        className={`transition-all ease-in h-0 ${
                           touched && errors ? "h-5" : " "
                        }`}
                     >
                        {touched && errors ? (
                           <Opacity>
                              <p className="text-sm text-main">{errors}</p>
                           </Opacity>
                        ) : (
                           <>
                              {name == "price" && (
                                 <span className="text-sm text-zinc-400 px-2">
                                    {sp(+value)} تومان
                                 </span>
                              )}
                           </>
                        )}
                     </div>
                  </>
               )
            ) : (
               <>
                  <Field
                     name={name}
                     id={name}
                     className="bg-zinc-100 px-3 border border-dashed border-zinc-400
                        outline-none py-1 w-full sm:w-[300px] rounded-md max-h-40"
                     as="textarea"
                  />
                  <div
                     className={`transition-all ease-in h-0 ${
                        touched && errors ? "h-5" : " "
                     }`}
                  >
                     {touched && errors ? (
                        <Opacity>
                           <p className="text-sm text-main">{errors}</p>
                        </Opacity>
                     ) : null}
                  </div>
               </>
            )}
         </div>
      </>
   );
};

export default TextInput;
