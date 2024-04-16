export type ProfileType = {
   title: string;
   description: string;
   location: string;
   phone: string;
   price: string;
   realState: string;
   constructionDate: Date;
   category: "villa" | "apartment" | "store" | "office";
   rules: never[];
   amenities: never[];
};

export type ProfileInputsType = {
   id: number;
   label: string;
   name: "title" | "location" | "phone" | "price" | "realState" | "description" ;
   type: "text" | "textarea" | "number";

}[];

export type profileRadiosType = {
   id: number;
   label: string;
   value: "villa" | "apartment" | "store" | "office";
}[];
