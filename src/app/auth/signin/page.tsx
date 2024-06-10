import LoadingPage from "@/components/elements/Loading";
import SigninPage from "@/components/template/auth/SigninPage";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

type Props = {};

const signin = async (props: Props) => {
   const session = await getServerSession();

   if (session) {
      return redirect("/dashboard");
   }
   return <SigninPage />;
};

export default signin;
