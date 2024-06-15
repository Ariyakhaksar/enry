import LoadingPage from "@/components/elements/Loading";
import SigninPage from "@/components/template/auth/SigninPage";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

type Props = {};

const signin = async (props: Props) => {

   return <SigninPage />;
};

export default signin;
