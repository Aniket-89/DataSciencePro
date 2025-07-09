import { motion } from "framer-motion";
import BookButton from "./BookButton";
import Button from "./Button";

type BannerProps = {
  title: string;
  subtitle?: string;
};

const TopBanner: React.FC<BannerProps> = ({ title, subtitle }) => {
  return (
    <section className="relative m-2 rounded-3xl grid place-content-center overflow-hidden py-24 min-h-[70vh] bg-gradient-to-br from-[#183B4E] to-[#27548A]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-hero md:text-5xl font-medium text-white mb-6"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-lg text-gray-50 leading-relaxed"
          >
            {subtitle}
          </motion.p>
          <div className="flex justify-center mt-8 space-x-4">
            <BookButton text="Book a Free Consultation" />
            <Button to="/contact">Learn more</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopBanner;
