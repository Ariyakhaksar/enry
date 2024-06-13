import AdsPage from "@/components/template/AdsPage";
import Profile from "@/models/Profile";
import connectDB from "@/utils/connectDB";
import React from "react";

type Props = {
   searchParams?: { category: "store" | "villa" | "apartment" | "office" };
};
const categories = ["store", "villa", "apartment", "office"];
const Ads = async ({ searchParams }: Props) => {
   await connectDB();
   const profiles = await Profile.find({ published: true });
   if (!profiles) return <h3>مشکلی پیش آمده است</h3>;

   let finalData = profiles;

   if (searchParams?.category) {
      for (let i = 0; i < categories.length; i++) {
         if (searchParams.category === categories[i]) {
            finalData = finalData.filter(
               (i) => i.category === searchParams.category
            );
            break;
         }
      }
   }

   return <AdsPage profiles={JSON.parse(JSON.stringify(finalData))} />;
};

export default Ads;
