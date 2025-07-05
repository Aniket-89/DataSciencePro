import { motion } from "framer-motion";
import { PopupButton } from "react-calendly";

type BookButtonProps = {
  text: string;
  color?: string;
  gradient?: boolean;
  delay?: number;
};

const BookButton: React.FC<BookButtonProps> = ({
  text,
  color,
  delay = 0,
  gradient,
}) => {
  const root = document.getElementById("root") || document.body;

  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ type: "spring", duration: 1, delay: delay, damping: 9 }}
      viewport={{once: true}}
    >
      <PopupButton
        url="https://calendly.com/databitzy/30min"
        rootElement={root}
        text={text}
        className={`px-6 cursor-pointer rounded-3xl py-2 max-w-fit text-sm md:text-lg font-semibold text-white hover:bg-[#27548A] transition-colors items-center
          ${color ? `bg-[${color}]` : "bg-blue-500"} +
          ${
            gradient
              ? "bg-gradient-to-br to-[#183B4E] from-[#27548A] hover:from-[#183B4E] hover:to-[#27548A] "
              : ""
          }`}
      />
    </motion.div>
  );
};

export default BookButton;
