import { FormikErrors, FormikTouched } from "formik";

export type SigninType = {
    email : string ,
    password :string
}

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