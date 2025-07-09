import { Link } from "react-router-dom";
import { motion } from "framer-motion";

type Report = {
  title: string;
  industrySlug: string;
  slug: string;
  color?: string;
  classname?: string;
  img?: string;
};

function hexToRgba(hex: string, alpha: number) {
  let r = 0,
    g = 0,
    b = 0;
  if (hex.length === 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  } else if (hex.length === 7) {
    r = parseInt(hex[1] + hex[2], 16);
    g = parseInt(hex[3] + hex[4], 16);
    b = parseInt(hex[5] + hex[6], 16);
  }
  return `rgba(${r},${g},${b},${alpha})`;
}

const BentoCard: React.FC<Report> = ({
  title,
  industrySlug,
  slug,
  color,
  classname,
  img,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      transition={{
        duration: 0.5,
        delay: 0,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      whileInView={{ opacity: 1, scale: 1 }}
      /** 👉 Only hover on md and above */
      whileHover={{ scale: 1 }}
      whileTap={{ scale: 0.98 }}
      className={`relative p-6 group min-h-[400px] rounded-3xl overflow-hidden col-span-1 row-span-1 transition-colors ${
        classname || ""
      }`}
    >
      <Link
        to={`/reports/${industrySlug}/${slug}`}
        className="block text-[#183B4E] h-full transition-colors md:group-hover:text-gray-600"
      >
        <img
          src={img}
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover z-0 transition-transform duration-500 rounded-3xl md:group-hover:scale-105"
          style={{ opacity: 1 }}
        />
        <div
          className="absolute left-0 backdrop-blur bottom-0 w-full h-full md:h-0 z-10 opacity-100 md:group-hover:h-full transition-all ease-in-out duration-500 pointer-events-none"
          style={{
            transitionProperty: "height, background-color",
            backgroundColor: `${hexToRgba(color || "#000", 0.4)}`,
          }}
        ></div>
        <div className="relative z-20 translate-y-0 opacity-100 md:translate-y-10 md:opacity-0 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-transform duration-400 ease-in-out flex flex-col justify-between h-full group">
          <div className="text-h3 font-normal mb-4 text-white">{title}</div>
          <div className="flex text-white translate-y-0 md:translate-y-20 md:group-hover:translate-y-0 transition-transform duration-400 ease-in-out items-center justify-between text-gray-600">
            <span className="text-sm">Read More →</span>
            <span>{industrySlug}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default BentoCard;
