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

type Props = {};

const initialValues = {
   title: "",
   description: "",
   location: "",
   phone: "",
   price: "",
   realState: "",
   category: "",
   rules: [],
   amenities: [],
};

const AddProfile = (props: Props) => {
   
   const [dateValue, setDateValue] = useState<Value>(new Date());

   return (
      <div className="w-full overflow-auto">
         <LabelPagesDash title="ثبت آگهی جدید" icon={<MdOutlinePostAdd />} />
         <div className="w-full mt-5 py-4 px-8">
            <Formik
               initialValues={initialValues}
               onSubmit={async (values, actions) => {
                  console.log({ ...values, constructionDate: p2e(dateValue!.toString()) });
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

                     <CustomDatePicker
                        value={dateValue}
                        name={"constructionDate"}
                        // handleChange={handleChange}
                        setDateValue={setDateValue}
                     />

                     <div className="w-full flex flex-col lg:flex-row justify-start gap-14">
                        <RadioInputs
                           name="category"
                           title="دسته بندی"
                           value={values.category}
                           handleChange={handleChange}
                        />
                     </div>

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
                     <div className="w-full">
                        <button type="submit">ثبت</button>
                     </div>
                  </form>
               )}
            </Formik>
         </div>
      </div>
   );
};

export default AddProfile;
