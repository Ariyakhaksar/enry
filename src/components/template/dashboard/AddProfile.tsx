"use client";
import React, { useState } from "react";
import LabelPagesDash from "@/components/modules/LabelPagesDash";
import TextInput from "@/components/modules/TextInput";
import { MdOutlinePostAdd } from "react-icons/md";
import { Field, Formik } from "formik";

import { ProfileInputs } from "@/constant/Proflie";
import RadioInputs from "@/components/modules/RadioInputs";
import ListInputs from "@/components/modules/ListInputs";
import CustomDatePicker from "@/components/modules/CustomDatePicker";
import { Value } from "react-multi-date-picker";
import { e2p, p2e } from "@/utils/replaceNumber";
import { CircularProgress } from "@mui/material";
import { FaArrowLeft } from "react-icons/fa";
import { validateProfile } from "@/utils/profile";

type Props = {};

const initialValues = {
   title: "",
   description: "",
   location: "",
   phone: "",
   price: "",
   realState: "",
   category: "villa",
   rules: [],
   amenities: [],
};

const AddProfile = (props: Props) => {
   const [dateValue, setDateValue] = useState<Date>(new Date());
   const checkKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
      if (e.key === "Enter") e.preventDefault();
   };

   const [isLoading, setIsLoading] = useState(false);

   return (
      <div className="w-full overflow-auto">
         <LabelPagesDash title="ثبت آگهی جدید" icon={<MdOutlinePostAdd />} />
         <div className="w-full mt-5 py-4 px-8">
            <Formik
               initialValues={initialValues}
               validate={validateProfile}
               onSubmit={async (values, actions) => {
                  console.log({ ...values, constructionDate: dateValue });
                  // return await new Promise((res) => setTimeout(res, 500));
               }}
            >
               {({ values , errors, touched, handleChange, handleSubmit }) => (
                  <form
                     onSubmit={handleSubmit}
                     className="w-full flex flex-col sm:flex-row flex-wrap gap-10"
                     onKeyDown={(e) => checkKeyDown(e)}
                  >
                     {ProfileInputs.map((item) => (
                        <TextInput
                           key={item.id}
                           name={item.name}
                           label={item.label}
                           type={item.type}
                           value={values[item.name]}
                           errors={errors[item.name]}
                           touched={touched[item.name]}
                        />
                     ))}

                     <CustomDatePicker
                        value={dateValue}
                        name={"constructionDate"}
                        // handleChange={handleChange}
                        setDateValue={setDateValue}
                     />

                     <RadioInputs
                        name="category"
                        title="دسته بندی"
                        value={values.category}
                        handleChange={handleChange}
                     />
                     {/* <div className="w-full flex flex-col lg:flex-row justify-start gap-14"></div> */}

                     <div className="w-full flex flex-col lg:flex-row items-start gap-4 justify-center">
                        <div className="w-full lg:w-1/2">
                           <ListInputs
                              value={values.amenities}
                              title="امکانات رفاهی"
                              name="amenities"
                              lim={5}
                           />
                        </div>
                        <div className="w-full lg:w-1/2">
                           <ListInputs
                              value={values.rules}
                              title="قوانین"
                              name="rules"
                              lim={5}
                           />
                        </div>
                     </div>
                     <div className="w-full flex flex-row justify-start mt-10">
                        <button
                           type="submit"
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
                  </form>
               )}
            </Formik>
         </div>
      </div>
   );
};

export default AddProfile;
