"use server";

import Profile from "@/models/Profile";
import connectDB from "@/utils/connectDB";

const ProfileServerGet = async (profileId: string | null | undefined) => {
   if (!profileId) return null;

   try {
      await connectDB();
      const profile = await Profile.findOne({ _id: profileId });
      if (profile) return profile;
   } catch (err) {
      return null;
   }
};

export default ProfileServerGet;
