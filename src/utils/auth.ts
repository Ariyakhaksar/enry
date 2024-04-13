import zxcvbn from "zxcvbn";

import { hash, compare } from "bcryptjs";
import { SignupType } from "@/types/user";
// import { SignInData, SignUpData } from "@/types/user";

async function hashPassword(password: string) {
   const hashedPassword = await hash(password, 12);
   return hashedPassword;
}

async function verifyPassword(password: string, hashedPassword: string) {
   const isValid = await compare(password, hashedPassword);
   return isValid;
}

type Color =
   | "inherit"
   | "success"
   | "primary"
   | "secondary"
   | "warning"
   | "error";

const passwordScore = (password: string) => {
   const passwordScoreM = zxcvbn(password).score;
   const passwordPercent = (passwordScoreM * 100) / 4;
   const functionProgressColor = (): { status: string; color: Color } => {
      switch (passwordScoreM) {
         case 0:
            return { status: "خیلی ضعیف", color: "inherit" };
         case 1:
            return { status: "ضعیف", color: "error" };
         case 2:
            return { status: "متوسط", color: "warning" };
         case 3:
            return { status: "قوی", color: "secondary" };
         case 4:
            return { status: "خیلی قوی", color: "success" };
         default:
            return { status: "خیلی ضعیف", color: "inherit" };
      }
   };
   return {
      passwordPercent,
      passwordScoreM,
      passwordColor: functionProgressColor().color,
      passwordStatus: functionProgressColor().status,
   };
};

const validateRegister = (values: SignupType) => {
   const errors = { email: "", password: "", re_password: "" };

   if (!values.email) {
      errors.email = "لطفا فیلد ایمیل را وارد !";
   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = "لطفا یک ایمیل معتبر وارد کنید";
   }

   if (!values.password) {
      errors.password = "لطفا یک پسورد برای حساب خود وارد کنید !";
   } else if (values.password.length <= 6) {
      errors.password = "پسورد شما باید حداقل شامل 7 حرف باشد ";
   } else if (passwordScore(values.password).passwordScoreM < 2) {
      errors.password = "لطفا پسورد قوی تری وارد کنید - حداقل سطح متوسط";
   }

   if (!values.re_password) {
      errors.re_password = "لطفا فیلد تکرار رمز عبور را پر کنید !";
   } else if (values.password !== values.re_password) {
      errors.re_password = "مقدار وارد شده با رمز عبور هم خوانی ندارد !";
   }

   if (
      errors.email.length === 0 &&
      errors.password.length === 0 &&
      errors.re_password.length === 0
   ) {
      return {};
   }
   return errors;
};

const validateLogin = (values: { email: string; password: string }) => {
   const errors = { email: "", password: "" };
   if (!values.email) {
      errors.email = "لطفا فیلد ایمیل را وارد !";
   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = "لطفا یک ایمیل معتبر وارد کنید !";
   }

   if (!values.password) {
      errors.password = "لطفا فیلد پسورد را وارد !";
   }

   if (errors.email.length === 0 && errors.password.length === 0) {
      return {};
   }
   return errors;
};
export {
   hashPassword,
   verifyPassword,
   validateRegister,
   passwordScore,
   validateLogin,
};
