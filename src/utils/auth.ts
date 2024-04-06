import zxcvbn from "zxcvbn";

import { hash, compare } from "bcryptjs";
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
   | "default"
   | "success"
   | "primary"
   | "secondary"
   | "warning"
   | "danger";

const passwordScore = (password: string) => {
   const paswordScore = zxcvbn(password).score;
   const passwordPercent = (paswordScore * 100) / 4;
   const functionProgressColor = (): { status: string; color: Color } => {
      switch (paswordScore) {
         case 0:
            return { status: "خیلی ضعیف", color: "default" };
         case 1:
            return { status: "ضعیف", color: "danger" };
         case 2:
            return { status: "متوسط", color: "warning" };
         case 3:
            return { status: "قوی", color: "secondary" };
         case 4:
            return { status: "خیلی قوی", color: "success" };
         default:
            return { status: "خیلی ضعیف", color: "default" };
      }
   };
   return {
      passwordPercent,
      paswordScore,
      passwordColor: functionProgressColor().color,
      passwordStatus: functionProgressColor().status,
   };
};

// const validate = (values: {}) => {
//    const errors = { fullName: "", email: "", password: "" };

//    if (!values.fullName) {
//       errors.fullName = "لطفا فیلد نام و نام خانوادگی را وارد کنید !";
//    } else if (values.fullName.length < 3) {
//       errors.fullName = "نام و نام خانوادگی باید بیشتر از 3 حرف باشد";
//    }

//    if (!values.email) {
//       errors.email = "لطفا فیلد ایمیل را وارد !";
//    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//       errors.email = "لطفا یک ایمیل معتبر وارد کنید";
//    }

//    if (!values.password) {
//       errors.password = "لطفا یک پسورد برای حساب خود وارد کنید !";
//    } else if (values.password.length <= 6) {
//       errors.password = "پسورد شما باید حداقل شامل 7 حرف باشد ";
//    } else if (passwordScore(values.password).paswordScore < 2) {
//       errors.password = "لطفا پسورد قوی تری وارد کنید - حداقل سطح متوسط";
//    }
//    if (
//       errors.fullName.length === 0 &&
//       errors.email.length === 0 &&
//       errors.password.length === 0
//    ) {
//       return {};
//    }
//    return errors;
// };
const validateLogin = (values: { email: string; password: string }) => {
   const errors = { email: "", password: "" };
   if (!values.email) {
      errors.email = "لطفا فیلد ایمیل را وارد !";
   }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
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
export { hashPassword, verifyPassword, passwordScore, validateLogin };
