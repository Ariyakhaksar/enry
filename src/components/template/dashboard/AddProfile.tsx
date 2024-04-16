"use client";
import React from "react";
import LabelPagesDash from "@/components/modules/LabelPagesDash";
import TextInput from "@/components/modules/TextInput";
import { MdOutlinePostAdd } from "react-icons/md";
import { Field, FieldArray, Formik, useFormik } from "formik";
import {
   FormControl,
   FormControlLabel,
   FormLabel,
   Radio,
   RadioGroup,
   Tooltip,
} from "@mui/material";
import { ProfileInputs, profileRadios } from "@/constant/Proflie";
import RadioInputs from "@/components/modules/RadioInputs";
import { LuDelete } from "react-icons/lu";
import { TiDeleteOutline } from "react-icons/ti";

type Props = {};

const initialValues = {
   title: "",
   description: "",
   location: "",
   phone: "",
   price: "",
   realState: "",
   constructionDate: new Date(),
   category: "",
   rules: [],
   amenities: [],
};

const AddProfile = (props: Props) => {
   // const AddProfileFormik = useFormik({
   //    initialValues: initialValues,
   //    onSubmit: (values) => {
   //       //  test(values)
   //       console.log(values);
   //    },
   // });
   // const { handleSubmit, handleChange, values, errors, touched } =
   //    AddProfileFormik;

   return (
      <div className="w-full">
         <LabelPagesDash title="ثبت آگهی جدید" icon={<MdOutlinePostAdd />} />
         <div className="w-full mt-5 py-4 px-8">
            <Formik
               initialValues={initialValues}
               onSubmit={async (values, actions) => {
                  console.log(values);
                  // return await new Promise((res) => setTimeout(res, 500));
               }}
            >
               {({ values, errors, touched, handleChange, handleSubmit }) => (
                  <form
                     onSubmit={handleSubmit}
                     className="w-full flex flex-col sm:flex-row flex-wrap gap-x-10 gap-4"
                  >
                     {ProfileInputs.map((item) => (
                        <TextInput
                           key={item.id}
                           name={item.name}
                           label={item.label}
                           type={item.type}
                           value={values[item.name]}
                        />
                     ))}

                     <div className="w-full">
                        <RadioInputs
                           name="category"
                           title="دسته بندی"
                           value={values.category}
                           handleChange={handleChange}
                        />
                     </div>
                     <div>
                        <FieldArray name="amenities">
                           {({ push, remove }) => (
                              <>
                                 <div className="p-5 w-auto border border-zinc-200 rounded-md mt-5">
                                    <div className="flex gap-4 items-center">
                                       <h3>امکانات رفاهی</h3>
                                       <button
                                          className="bg-second text-zinc-100 px-3 py-1 rounded-sm"
                                          onClick={() => push("")}
                                          type="button"
                                       >
                                          افزودن
                                       </button>
                                    </div>
                                    {values.amenities.map((_, index) => (
                                       <div
                                          key={index}
                                          className="flex gap-3 justify-start items-center my-5"
                                       >
                                          <span className="px-2 py-1 w-10 border-r border-second text-center">
                                             {index + 1}
                                          </span>
                                          <Field
                                             type="text"
                                             name={`amenities.${index}`}
                                             id={`amenities.${index}`}
                                             className="bg-zinc-100 px-3 border border-dashed border-zinc-400
                                             outline-none py-1 w-full sm:w-[300px] rounded-md"
                                          />
                                          <Tooltip
                                             title={"حذف"}
                                             placement="left"
                                          >
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
                                    ))}
                                 </div>
                              </>
                           )}
                        </FieldArray>
                     </div>
                     <button type="submit">ثبت</button>
                  </form>
               )}
            </Formik>

         </div>
      </div>
   );
};

export default AddProfile;
