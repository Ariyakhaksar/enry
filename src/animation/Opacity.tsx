"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";

function Opacity({ children, d = 0.75 }: { children: ReactNode; d?: number }) {
   return (
      <motion.div
         initial={{ y: 0, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         transition={{ ease: "easeInOut", duration: d }}
      >
         {children}
      </motion.div>
   );
}

export default Opacity;
