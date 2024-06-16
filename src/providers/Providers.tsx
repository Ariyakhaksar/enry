"use client";
import Layouts from "@/components/layouts/Layouts";
import { KalamehWeb } from "@/utils/fonts";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { SessionProvider } from "next-auth/react";

import React from "react";

type Props = Readonly<{
   children: React.ReactNode;
}>;
const Providers = ({ children }: Props) => {
   const theme = createTheme({
      typography: {
         // fontFamily: "Kalameh",
         fontFamily: "var(--font-kalameh)",
      },
   });
   return (
      <SessionProvider>
         <ThemeProvider theme={theme}>
            <Layouts>{children}</Layouts>
         </ThemeProvider>
      </SessionProvider>
   );
};

export default Providers;
