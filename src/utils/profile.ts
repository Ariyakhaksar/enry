// import { ProfileType } from "@/types/profile";
type ProfileType = {
   title: string;
   description: string;
   location: string;
   phone: string;
   price: string;
   realState: string;
   category: string;
   rules: string[] | never[];
   amenities: string[] | never[];
   //    constructionDate?: Date;
};

const validateProfile = (values: ProfileType) => {
   const errors = {
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

   if (!values.title) {
      errors.title = "لطفا فیلد عنوان آگهی را پر کنید !";
   } else if (values.title.length < 3) {
      errors.title = "عنوان آگهی باید حداقل سه حرف باشد !";
   }
   if (!values.location) {
      errors.location = "لطفا فیلد آدرس را پر کنید !";
   }
   if (!values.phone) {
      errors.phone = "لطفا شماره تماس خود را وارد کنید !";
   } else if (values.phone.length !== 10) {
      if (values.phone.length !== 11) {
         errors.phone = "لطفا یک شماره موبایل معتبر وارد کنید !";
      } else if (values.phone.charAt(0) !== "0") {
         errors.phone = "لطفا یک شماره موبایل معتبر وارد کنید !";
      }
   }
   if (!values.price) {
      errors.price = "لطفا قیمت  آگهی را مشخص کنید !";
   } else if (!/^[0-9]+$/.test(values.price)) {
      errors.price = "ارقام مجاز برای قیمت 0-9 هست !";
   }

   if (!values.realState) {
      errors.realState = "لطفا نام بنگاه را وارد کنید !";
   }
   if (!values.description) {
      errors.description = "لطفا توضیحاتی درباره آگهی بنویسید !";
   }
   if (!values.category) {
      errors.category = "لطفا دسته بندی آگهی را مشخص کنید !";
   }

   if (
      errors.title.length === 0 &&
      errors.description.length === 0 &&
      errors.location.length === 0 &&
      errors.phone.length === 0 &&
      errors.price.length === 0 &&
      errors.realState.length === 0 &&
      errors.category.length === 0 &&
      errors.rules.length === 0 &&
      errors.amenities.length === 0
   ) {
      return {};
   }

   return errors;
};

export { validateProfile };
