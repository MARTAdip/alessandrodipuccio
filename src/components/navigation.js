import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./menuitem";

const variants = {
  open: {
    display: 'block', transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    display: 'none', transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = () => (
  <motion.ul variants={variants} >
    {/* {itemIds.map(i => ( */}
      <MenuItem  />
    {/* ))} */}
  </motion.ul>
);

