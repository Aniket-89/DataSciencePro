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
      {/* <h1 className="text-h1 max-w-7xl font-bold text-left mx-auto">
        Our cutting-edge research, predictive analytics, and expert perspectives
        empower businesses to navigate trends, outpace competitors, and seize
        growth opportunities.
        </h1> */}
      <ServicesOverview />
      <IndustriesGrid />
      <About />
      <FastFacts />
      <Testimonials />
      <WhyChooseUs />
      <LatestReports />
      <CTA />
    </motion.div>
  );
};

export default HomePage;
