import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      // Configure your color palette here
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#262E2E',
      'main' : '#E13833',
      'second' : '#104547',
      'optionalColor' : '#666666',
      'gray' : "#d8d0d0"
    }
  },
  plugins: [],
};
export default config;
