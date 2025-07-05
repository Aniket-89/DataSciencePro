import React from "react";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { motion } from "framer-motion";
type SmallCardProps = {
  text?: string;
  color?: string;
  delay?: number;
  duration?: number;
  icon?: string;
};

const SmallCard: React.FC<SmallCardProps> = ({
  text,
  color,
  duration = 0.5,
  delay = 0.4,
  // icon,
}) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{
        type: "spring",
        damping: 12,
        duration: duration,
        delay: delay,
      }}
      viewport={{ once: true }}
      className={`rounded-3xl shadow-lg aspect-square p-6 flex justify-content 
        items-center w-full h-full flex flex-col gap-2 items-start justify-center text-gray-700 text-lg 
        font-semibold hover:shadow-xl transition-shadow duration-300 hover:bg-gray-50 ${
          color ? color : "bg-white"
        }`}
    >
      <TbDeviceDesktopAnalytics className="size-24" />
      <div className="flex items-center">
        <span className="text-sm md:text-xl text-left">{text}</span>
      </div>
    </motion.div>
  );
};

export default SmallCard;
