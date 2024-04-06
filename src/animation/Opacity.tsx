"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";

function Opacity({ children }: { children: ReactNode }) {
   return (
      <motion.div
         initial={{ y: 0, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         transition={{ ease: "easeInOut", duration: 0.75 }}
      >
         {children}
      </motion.div>
   );
}

export default Opacity;
