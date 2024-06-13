import { ObjectId } from "mongoose";

export type ProfileType = {
   title: string;
   description: string;
   location: string;
   phone: string;
   price: string;
   realState: string;
   constructionDate?: Date;
   category: "villa" | "apartment" | "store" | "office";
   rules?: never[] | string[];
   amenities?: never[] | string[];
};
export type FullDataProfileType = {
   _id : ObjectId;
   title: string;
   description: string;
   location: string;
   phone: string;
   price: string;
   realState: string;
   constructionDate: Date;
   category: "villa" | "apartment" | "store" | "office";
   rules: never[] | string[];
   amenities: never[] | string[];
   published: boolean;
   createdAt: Date;
   updatedAt: Date;
};
export type ProfileInputsType = {
   id: number;
   label: string;
   name: "title" | "location" | "phone" | "price" | "realState" | "description";
   type: "text" | "textarea" | "number";
}[];

export type profileRadiosType = {
   id: number;
   label: string;
   value: "villa" | "apartment" | "store" | "office";
   icon: JSX.Element;
}[];
