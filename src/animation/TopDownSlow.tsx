import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface TopDownSlow {
    children : ReactNode
    y : number[]
}

function TopDownSlow({ children  , y } : TopDownSlow) {
   return (
      <motion.div
         animate={{ y: y }}
         transition={{
            duration: 5,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 0,
         }}
      >
         {children}
      </motion.div>
   );
}

export default TopDownSlow;
