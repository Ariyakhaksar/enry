import { FormikErrors, FormikTouched } from "formik";

export type SigninType = {
   email: string;
   password: string;
};

export type SignupType = {
   email: string;
   password: string;
   re_password: string;
};

export type FormikFormSignUpTpye = {
   handleChange: {
      (e: React.ChangeEvent<SignupType>): void;
      <T_1 = string | React.ChangeEvent<SignupType>>(
         field: T_1
      ): T_1 extends React.ChangeEvent<SignupType>
         ? void
         : (e: string | React.ChangeEvent<SignupType>) => void;
   };
   handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
   values: SignupType;
   errors: FormikErrors<SignupType>;
   touched: FormikTouched<SignupType>;
};

export type FormikFormSignInTpye = {
   handleChange: {
      (e: React.ChangeEvent<SigninType>): void;
      <T_1 = string | React.ChangeEvent<SigninType>>(
         field: T_1
      ): T_1 extends React.ChangeEvent<SigninType>
         ? void
         : (e: string | React.ChangeEvent<SigninType>) => void;
   };
   handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
   values: SigninType;
   errors: FormikErrors<SigninType>;
   touched: FormikTouched<SigninType>;
};

export type UserInfo = {
   email: string;
   role: "USER" | "ADMIN";
   createdAt: Date;
};
