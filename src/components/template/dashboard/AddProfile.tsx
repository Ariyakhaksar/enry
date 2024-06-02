"use client";
import React, { useState } from "react";
import LabelPagesDash from "@/components/modules/LabelPagesDash";
import TextInput from "@/components/modules/TextInput";
import { MdOutlinePostAdd } from "react-icons/md";
import { Formik } from "formik";
import { ProfileInputs } from "@/constant/Proflie";
import RadioInputs from "@/components/modules/RadioInputs";
import ListInputs from "@/components/modules/ListInputs";
import CustomDatePicker from "@/components/modules/CustomDatePicker";
import { CircularProgress } from "@mui/material";
import { FaArrowLeft } from "react-icons/fa";
import { validateProfile } from "@/utils/profile";
import ProfileServerPost from "@/server/profile/profileServerPost";
import MessagesAddProfile from "@/components/modules/MessagesAddProfile";
import ButtonSubmitForm from "@/components/elements/ButtonSubmitForm";
import { revalidatePath } from "next/cache";

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
   const [message, setMeassage] = useState("");
   const [errorMessage, setErrorMessage] = useState("");

   return (
      <div className="w-full overflow-auto">
         <LabelPagesDash title="ثبت آگهی جدید" icon={<MdOutlinePostAdd />} />
         <MessagesAddProfile
            message={message}
            setMeassage={setMeassage}
            errors={errorMessage}
            setErrorMessage={setErrorMessage}
         />
         <div className="w-full mt-5 py-4 px-8">
            <Formik
               initialValues={initialValues}
               validate={validateProfile}
               onSubmit={async (values, { resetForm }) => {
                  setIsLoading(true);
                  const res = await ProfileServerPost({
                     ...values,
                     constructionDate: dateValue,
                  });
                  if (res.errors) {
                     setIsLoading(false);
                     setErrorMessage(res.errors);
                  }
                  if (res.message) {
                     setIsLoading(false);
                     setMeassage(res.message);
                     resetForm();
                  }
               }}
            >
               {({ values, errors, touched, handleChange, handleSubmit }) => (
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
                        setDateValue={setDateValue}
                     />

                     <RadioInputs
                        name="category"
                        title="دسته بندی"
                        value={values.category}
                        handleChange={handleChange}
                     />

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
                     <ButtonSubmitForm isLoading={isLoading} />
                  </form>
               )}
            </Formik>
         </div>
      </div>
   );
};

export default AddProfile;
