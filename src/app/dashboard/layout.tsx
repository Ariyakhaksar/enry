import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import { redirect } from "next/navigation";
import DashboardLayout from "@/components/layouts/dashboard/DashboardLayout";
import FindUser from "@/server/user/FindUser";
import { UserInfo } from "@/types/user";

type Props = { children: React.ReactNode };

async function layout({ children }: Props) {
   const session = await getServerSession(authOptions);
   if (!session) return redirect("/auth/signin");

   const user: UserInfo = await FindUser(session.user?.email);

   if (!user) {
      return redirect("/auth/signin");
   }

   return <DashboardLayout RoleUser={user.role}>{children}</DashboardLayout>;
}

export default layout;
