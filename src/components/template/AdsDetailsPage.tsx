"use client";
import { FullDataProfileType } from "@/types/profile";
import React from "react";
import LabelPagesDash from "../modules/LabelPagesDash";
import UlAdsDetails from "../modules/Ads/ulAdsDetails";
import ListAds from "../modules/Ads/ListAds";
import SidebarAds from "../modules/Ads/SidebarAds";
import { Toaster } from "react-hot-toast";

type Props = {
   profile: FullDataProfileType;
};

const AdsDetailsPage = ({ profile }: Props) => {
   return (
      <section className="container mx-auto flex flex-col lg:flex-row items-start my-10">
        <Toaster />
         <div className="w-full px-5">
            <LabelPagesDash title={profile.title} />
            <UlAdsDetails
               realState={profile.realState}
               category={profile.category}
               createdAt={profile.createdAt}
            />
            <div className="p-5 text-zinc-600 leading-8">
               <p>{profile.description}</p>
            </div>
            <div className="flex flex-col md:flex-row gap-5 lg:p-5">
               <ListAds list={profile.amenities} title="امکانات رفاهی" />
               <ListAds list={profile.rules} title="قوانین" />
            </div>
         </div>
         <SidebarAds
            location={profile.phone}
            phone={profile.phone}
            price={profile.price}
         />
      </section>
   );
};

export default AdsDetailsPage;
