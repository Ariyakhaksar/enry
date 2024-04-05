import localFont from "next/font/local";

export const KalamehWeb = localFont({
   src: [
      {
         path: "../../public/fonts/KalamehWebFaNum-Thin.woff2",
         weight: "100",
         style: "thin",
      },
      {
         path: "../../public/fonts/KalamehWebFaNum-Regular.woff2",
         weight: "400",
         style: "normal",
      },
      {
         path: "../../public/fonts/KalamehWebFaNum-Bold.woff2",
         weight: "700",
         style: "bold",
      },
      {
         path: "../../public/fonts/KalamehWebFaNum-Black.woff2",
         weight: "900",
         style: "black",
      },
   ],
});
