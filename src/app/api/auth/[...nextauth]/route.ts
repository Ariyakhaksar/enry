import NextAuth from "next-auth";
import { authOptions } from "./authOptions";

// تعریف handler به عنوان تابع NextAuth
export const handler = NextAuth(authOptions) as never;

// صدور handler به عنوان GET و POST
export { handler as GET, handler as POST };
