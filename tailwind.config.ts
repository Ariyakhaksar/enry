import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

const config: Config = {
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {
         backgroundImage: {
            "hero-pattern": "url('/image/banner/banner-bg1.jpg')",
         },
      },
      colors: {
         // Configure your color palette here
         transparent: "transparent",
         current: "currentColor",
         zinc: colors.zinc,
         red: colors.red,
         white: "#ffffff",
         black: "#262E2E",
         main: "#E13833",
         second: "#104547",
         optionalColor: "#666666",
         gray: "#d8d0d0",
      },
   },
   plugins: [],
};
export default config;
