import { motion } from "framer-motion";
import React, { useState } from "react";

interface StatsIconProps {
  children: React.ReactNode;
  onClick?: (arg0?: any | null) => void;
  clickIcon?: React.ReactNode;
}

const StatsIcon: React.FC<StatsIconProps> = ({
  children,
  onClick,
  clickIcon,
}) => {
  const [clicked, setClicked] = useState<boolean>(false);

  return (
    <motion.span
      transition={{ duration: 0.5, type: "spring" }}
      whileHover={{ scale: 1.1, opacity: 0.7 }}
      whileTap={{
        scale: 0.8,
        scaleX: -1.5,
      }}
      onClick={() => {
        onClick && onClick();
        setClicked(!clicked);

        setTimeout(() => {
          setClicked(false);
        }, 500);
      }}
      className="cursor-pointer flex items-center justify-center flex-col align-middle"
    >
      {clickIcon ? (clicked ? clickIcon : children) : children}
    </motion.span>
  );
};

export default StatsIcon;
