import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import User from "@/models/User";

async function page() {
   await connectDB();
   const session = await getServerSession(authOptions);
   const user = await User.findOne({ email: session!.user!.email });

   return <div>داشبورد</div>;
}

export default page;
