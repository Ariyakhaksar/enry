import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import { redirect } from "next/navigation";
import connectDB from "@/utils/connectDB";
import User from "@/models/User";
import { signOut } from "next-auth/react";
import DashboardLayout from "@/components/layouts/dashboard/DashboardLayout";

type Props = { children: React.ReactNode };

async function layout({ children }: Props) {
   const session = await getServerSession(authOptions);
   if (!session) return redirect("/auth/signin");
   await connectDB();
   const user = await User.findOne({ email: session!.user!.email });

   if (!user) {
      signOut();
      return redirect("/auth/signin");
   }

   return <DashboardLayout>{children}</DashboardLayout>;
}

export default layout;
