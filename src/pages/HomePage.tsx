import { motion } from "framer-motion";
import Hero from "../components/home/Hero";
import CTA from "../components/CTA";
import ServicesOverview from "../components/home/ServicesOverview";
import IndustriesGrid from "../components/home/IndustriesGrid";
import LatestReports from "../components/home/LatestReports";
import WhyChooseUs from "../components/home/WhyChooseUs";
import FastFacts from "../components/home/FastFacts";
import Testimonials from "../components/home/Testimonials";
import About from "../components/home/About";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const HomePage = () => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4 }}
    >
      <Hero />
      <About />
      <IndustriesGrid />
      <ServicesOverview />
      <Testimonials />
      <WhyChooseUs />
      <FastFacts />
      <LatestReports />
      <CTA />
    </motion.div>
  );
};

export default HomePage;
