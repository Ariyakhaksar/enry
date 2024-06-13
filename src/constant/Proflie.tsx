import { ProfileInputsType, profileRadiosType } from "@/types/profile";
import { FcDepartment, FcHome, FcShop } from "react-icons/fc";
import { IoStorefront } from "react-icons/io5";
import { MdApartment, MdVilla } from "react-icons/md";
import { HiBuildingOffice2 } from "react-icons/hi2";

export const profileRadios: profileRadiosType = [
   {
      id: 0,
      label: "ویلا",
      value: "villa",
      icon: <FcHome />,
   },
   {
      id: 1,
      label: "آپارتمان",
      value: "apartment",
      icon: (
         <span className="text-second">
            <MdApartment />
         </span>
      ),
   },
   {
      id: 2,
      label: "مغازه",
      value: "store",
      icon: <FcShop />,
   },
   {
      id: 3,
      label: "دفتر",
      value: "office",
      icon: <FcDepartment />,
   },
];
export const profileCategory = [
   {
      id: 0,
      title: "ویلا",
      link: "/ads/?category=villa",
      icon: <MdVilla />,
      key: "villa",
   },
   {
      id: 1,
      title: "آپارتمان",
      link: "/ads/?category=apartment",
      icon: <MdApartment />,
      key: "apartment",
   },
   {
      id: 2,
      title: "مغازه",
      link: "/ads/?category=store",
      icon: <IoStorefront />,
      key: "store",
   },
   {
      id: 3,
      title: "دفتر",
      link: "/ads/?category=office",
      icon: <HiBuildingOffice2 />,
      key: "office",
   },
];

export const ProfileInputs: ProfileInputsType = [
   {
      id: 0,
      label: "عنوان آگهی",
      name: "title",
      type: "text",
   },
   {
      id: 1,
      label: "آدرس",
      name: "location",
      type: "text",
   },
   {
      id: 2,
      label: "شماره تماس",
      name: "phone",
      type: "number",
   },
   {
      id: 3,
      label: "قیمت (تومان)",
      name: "price",
      type: "number",
   },
   {
      id: 4,
      label: "بنگاه",
      name: "realState",
      type: "text",
   },
   {
      id: 5,
      label: "توضیحات",
      name: "description",
      type: "textarea",
   },
];
