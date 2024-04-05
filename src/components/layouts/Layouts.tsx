import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";

type Props = Readonly<{
   children: React.ReactNode;
}>;

const Layouts = ({ children }: Props) => {
   return (
      <>
         <div>
            <Header />
         </div>
         <main>{children}</main>
         <div>
            <Footer />
         </div>
      </>
   );
};

export default Layouts;
