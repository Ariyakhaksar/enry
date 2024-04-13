"use client";
import Layouts from "@/components/layouts/Layouts";
import { KalamehWeb } from "@/utils/fonts";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import React from "react";

type Props = Readonly<{
   children: React.ReactNode;
}>;
const Providers = ({ children }: Props) => {
   const theme = createTheme({
      typography: {
         fontFamily: "Kalameh",
      },
   });
   return (
      <ThemeProvider theme={theme}>
         <Layouts>{children}</Layouts>
      </ThemeProvider>
   );
};

export default Providers;
