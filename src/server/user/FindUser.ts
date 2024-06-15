"use server";

import User from "@/models/User";
import connectDB from "@/utils/connectDB";

const FindUser = async (email: string | null | undefined) => {
   if (!email) return null;

   try {
      await connectDB();
      const user = await User.findOne({ email });
      if (user) return user;
   } catch (err) {
      return null;
   }
};

export default FindUser;
