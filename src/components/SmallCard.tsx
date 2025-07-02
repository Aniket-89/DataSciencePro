import React from "react";
import { motion } from "framer-motion";
type SmallCardProps = {
  text?: string;
  color?: string;
  delay?: number;
  duration?: number;
};

const SmallCard: React.FC<SmallCardProps> = ({
  text,
  color,
  duration = 0.5,
  delay = 0.4,
}) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: duration, delay: delay }}
      viewport={{ once: true }}
      className={`rounded-3xl shadow-lg p-6 min-h-[220px] md:aspect-square flex justify-content 
        items-center w-full h-full flex items-center justify-center text-gray-700 text-lg 
        font-semibold hover:shadow-xl transition-shadow duration-300 cursor-pointer hover:bg-gray-50 ${
          color ? color : "bg-white"
        }`}
    >
      <div className="flex items-center gap-2">
        <span className="text-sm md:text-xl text-left">{text}</span>
      </div>
    </motion.div>
  );
};

export default SmallCard;
