import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import { redirect } from "next/navigation";
import { UserInfo } from "@/types/user";
import FindUser from "@/server/user/FindUser";
import { signOut } from "next-auth/react";

type Props = { children: React.ReactNode };

async function layout({ children }: Props) {
   const session = await getServerSession(authOptions);
   if (session) {
      const user: UserInfo = await FindUser(session.user?.email);
      if (user) {
         return redirect("/dashboard");
      }
      await signOut({ callbackUrl: '/auth/login' });
   }

   return <>{children}</>;
}

export default layout;
