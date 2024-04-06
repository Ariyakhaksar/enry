import type { Metadata } from "next";
import "./globals.css";
import { KalamehWeb } from "@/utils/fonts";
import Providers from "@/providers/Providers";

export const metadata: Metadata = {
   title: "انری | سامانه خرید و اجاره ملک",
   description: "سامانه خرید و اجاره ملک",
   icons: {
      icon: ["/image/_favicon.ico"],
   },
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="fa" dir="rtl">
         <body className={`${KalamehWeb.className}`}>
            <Providers>{children}</Providers>
         </body>
      </html>
   );
}
