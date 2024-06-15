"use client";
import ButtonSubmitForm from "@/components/elements/ButtonSubmitForm";
import CustomDatePicker from "@/components/modules/CustomDatePicker";
import LabelPagesDash from "@/components/modules/LabelPagesDash";
import ListInputs from "@/components/modules/ListInputs";
import MessagesAddProfile from "@/components/modules/MessagesAddProfile";
import RadioInputs from "@/components/modules/RadioInputs";
import TextInput from "@/components/modules/TextInput";
import { ProfileInputs } from "@/constant/Proflie";
import ProfileServerEdit from "@/server/profile/ProfileServerEdit";
import { FullDataProfileType, ProfileType } from "@/types/profile";
import { validateProfile } from "@/utils/profile";
import { Formik } from "formik";
import React, { useState } from "react";
import { RiEditFill } from "react-icons/ri";

type Props = {
    ProfileData : FullDataProfileType
};

const EditProfilePage = ({ProfileData}: Props) => {
   const initialValues = {
      title: ProfileData.title,
      description: ProfileData.description,
      location: ProfileData.location,
      phone: ProfileData.phone,
      price: ProfileData.price,
      realState: ProfileData.realState,
      category: ProfileData.category,
      rules: ProfileData.rules,
      amenities: ProfileData.amenities,
   };
   const [dateValue, setDateValue] = useState<Date>(ProfileData.constructionDate);
   const checkKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
      if (e.key === "Enter") e.preventDefault();
   };

   const [isLoading, setIsLoading] = useState(false);
   const [message, setMeassage] = useState("");
   const [errorMessage, setErrorMessage] = useState("");

   return (
      <div className="w-full">
         <LabelPagesDash title="ویرایش آگهی" icon={<RiEditFill />} />
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
                    const res = await ProfileServerEdit({
                       ...values,
                       constructionDate: dateValue,
                       _id : ProfileData._id
                    });
                    if (res.errors) {
                       setIsLoading(false);
                       setErrorMessage(res.errors);
                    }
                    if (res.message) {
                       setIsLoading(false);
                       setMeassage(res.message);
                       
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
                     <ButtonSubmitForm isLoading={isLoading} type="edit" />
                  </form>
               )}
            </Formik>
         </div>
      </div>
   );
};

export default EditProfilePage;
