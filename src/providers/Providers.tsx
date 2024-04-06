import Layouts from "@/components/layouts/Layouts";
import React from "react";

type Props = Readonly<{
   children: React.ReactNode;
}>;
const Providers = ({ children }: Props) => {
   return <Layouts>{children}</Layouts>;
};

export default Providers;
