import React from "react";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";

type Props = { children: React.ReactNode };

const DashboardLayout = ({ children }: Props) => {
   return (
      <>
         <Header />
         <div className="relative container mx-auto gap-5 min-h-[72vh] bg-hero-pattern flex flex-row">
            <Sidebar />
            {children}
         </div>
      </>
   );
};

export default DashboardLayout;
