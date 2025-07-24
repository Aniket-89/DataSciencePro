import { motion } from "framer-motion";
import { PopupButton } from "react-calendly";
import Loader from "./Loader";

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
      transition={{ duration: 0.1, delay: delay }}
      whileHover={{ scale: 0.97 }}
      viewport={{ once: true }}
    >
      <PopupButton
        url="https://calendly.com/databitzy/30min"
        rootElement={root}
        text={text}
        LoadingSpinner={() => (
          <div className="flex items-center justify-center">
            <Loader variant="spinner" />
          </div>
        )}
        className={`px-6 cursor-pointer rounded-3xl py-2 max-w-fit text-sm md:text-lg font-semibold text-white hover:bg-[#00A0DC] transition-colors items-center
          ${color ? `bg-[${color}]` : "bg-[#0077B5]"} +
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
