import EditProfilePage from "@/components/template/dashboard/EditProfilePage";
import ProfileServerGet from "@/server/profile/ProfileServerGet";
import FindUser from "@/server/user/FindUser";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

type Props = { params: { profileId: string } };

const page = async ({ params: { profileId } }: Props) => {
   const profile = await ProfileServerGet(profileId);
   if (!profile) return redirect("/404");

   const session = await getServerSession();
   if (!session) return redirect("/404");

   const user = await FindUser(session.user?.email);
   if (!user) return redirect("/404");

   if(!user._id.equals(profile.userId)) return redirect("/404");


   return <EditProfilePage ProfileData={JSON.parse(JSON.stringify(profile))} />;
};

export default page;
