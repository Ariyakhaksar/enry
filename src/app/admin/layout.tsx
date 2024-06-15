import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import { redirect } from "next/navigation";
import DashboardLayout from "@/components/layouts/dashboard/DashboardLayout";
import { UserInfo } from "@/types/user";
import FindUser from "@/server/user/FindUser";

type Props = { children: React.ReactNode };

async function layout({ children }: Props) {
   const session = await getServerSession(authOptions);
   if (!session) return redirect("/auth/signin");
   const user: UserInfo = await FindUser(session.user?.email);
   
   //   signOut();
   if (user.role !== "ADMIN") {
      return redirect("/dashboard");
   }
   return <DashboardLayout RoleUser={user.role}>{children}</DashboardLayout>;
}

export default layout;
