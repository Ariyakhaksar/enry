import React from "react";
import { MdOutlinePostAdd } from "react-icons/md";
import { motion } from "framer-motion";

type Props = {
   title: string;
   icon?: JSX.Element;
};

const LabelPagesDash = ({ title, icon }: Props) => {
   return (
      <div className="w-full overflow-hidden relative bg-zinc-50 py-4 px-8 rounded-md">
         <motion.span
            className="absolute transition-all ease-out h-full bg-second w-1 right-0 rounded-sm"
            initial={{ x: 0, y: -60, opacity: 0 }}
            animate={{ x: 0, y: -16, opacity: 100 }}
            transition={{
               duration: 0.5,
               delay: 0.2,
               ease: [0, 1, 0.3, 1.0],
            }}
         ></motion.span>
         <h1 className="text-xl lg:text-2xl flex gap-2 items-center text-second font-bold">
            <span>{icon ? icon : <></>}</span>
            &nbsp; {title}
         </h1>
      </div>
   );
};

export default LabelPagesDash;
