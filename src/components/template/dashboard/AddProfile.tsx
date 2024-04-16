"use client";
import React from "react";
import LabelPagesDash from "@/components/modules/LabelPagesDash";
import TextInput from "@/components/modules/TextInput";
import { MdOutlinePostAdd } from "react-icons/md";
import { Formik} from "formik";

import { ProfileInputs } from "@/constant/Proflie";
import RadioInputs from "@/components/modules/RadioInputs";
import ListInputs from "@/components/modules/ListInputs";

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
                        <ListInputs value={values.amenities} title="امکانات رفاهی" lim={5} />
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
