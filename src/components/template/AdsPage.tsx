"use client";
import Opacity from "@/animation/Opacity";
import { profileCategory } from "@/constant/Proflie";
import Profile from "@/models/Profile";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { MdKeyboardArrowLeft } from "react-icons/md";
import ProfileCardPublic from "@/components/modules/ProfileCardPublic";
import NothingForShow from "../modules/NothingForShow";
import { FaRegFaceSadTear } from "react-icons/fa6";

type Profile = {
   _id: string;
   title: string;
   realState: string;
   location: string;
   price: string;
   category: string;
};

type Props = {
   profiles: Profile[];
};

const AdsPage = ({ profiles }: Props) => {
   const searchParams = useSearchParams();

   const [category, setCategory] = useState<null | string>(null);
   useEffect(() => {
      setCategory(searchParams.get("category"));
   }, [searchParams]);

   return (
      <>
         <section className="w-full relative bg-[url('/image/page-title-bg.jpg')] bg-center bg-cover">
            <div className="mx-auto container py-10 flex flex-col items-center gap-5">
               <h1 className="text-2xl font-extrabold">بروز ترین آگهی ها</h1>
               <ul className="flex items-center gap-3 text-zinc-500">
                  <li>
                     <Link href={"/"}>خانه</Link>
                  </li>
                  <span>
                     <MdKeyboardArrowLeft />
                  </span>
                  <li className="text-main mr-2">
                     <Link href={"/ads"}>آگهی ها</Link>
                  </li>
               </ul>
            </div>
         </section>
         <section className="container mx-auto my-5 flex flex-col gap-5 items-start lg:flex-row">
            <div className="lg:max-w-[400px] w-full bg-zinc-100 p-5 lg:rounded-lg">
               <div>
                  <div className="w-full py-2 px-5 border-r flex items-center justify-between border-main bg-white">
                     <h4>دسته بندی</h4>
                     {category && (
                        <div className="flex gap-2 items-center">
                           <span className="text-sm">حذف فیلتر :</span>
                           <Link
                              href={"/ads"}
                              className="text-red-500 hover:bg-red-400 hover:text-zinc-100 p-1 rounded-full
                                        transition-all ease-out"
                           >
                              <IoCloseSharp />
                           </Link>
                        </div>
                     )}
                  </div>
                  <div className="w-full py-2 px-5 mt-2 bg-white">
                     <ul className="flex gap-1 lg:gap-3 justify-between">
                        {profileCategory.map((item) => (
                           <li
                              className={`px-5 py-1 text-center w-full rounded-md transition-all ease-out ${
                                 category &&
                                 category === item.key ?
                                 "bg-second  text-zinc-50" : " "
                              }`}
                              key={item.id}
                           >
                              <Link href={item.link}>{item.title}</Link>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
            </div>
            <div className="w-full justify-center lg:justify-start flex flex-wrap gap-x-10 gap-y-5">
               {profiles.length > 0 ? (
                  profiles.map((i) => <ProfileCardPublic i={i} key={i._id} />)
               ) : (
                  <div className="mx-auto w-full my-10">
                     <NothingForShow
                        title={<>هیچ آگهی ثبت نشده است !</>}
                        icon={<FaRegFaceSadTear />}
                        link={"/"}
                        textLink="بازگشت به صفحه اصلی"
                     />
                  </div>
               )}
            </div>
         </section>
      </>
   );
};

export default AdsPage;
