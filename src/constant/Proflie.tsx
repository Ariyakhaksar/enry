import { ProfileInputsType, profileRadiosType } from "@/types/profile";

export const profileRadios : profileRadiosType = [
   {
      id: 0,
      label: "ویلا",
      value: "villa",
   },
   {
      id: 1,
      label: "آپارتمان",
      value: "apartment",
   },
   {
      id: 2,
      label: "مغازه",
      value: "store",
   },
   {
      id: 3,
      label: "دفتر",
      value: "office",
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
