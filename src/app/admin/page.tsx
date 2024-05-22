import AdminPage from "@/components/template/admin/AdminPage";
import connectDB from "@/utils/connectDB";
import React from "react";
import Profile from "@/models/Profile";

type Props = {};

const page = async (props: Props) => {
   await connectDB();
   const profiles = await Profile.find({ published: false }).select("-userId");

   return <AdminPage profiles={JSON.parse(JSON.stringify(profiles))} />;
};

export default page;
