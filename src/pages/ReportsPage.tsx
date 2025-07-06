import ReportCategories from "../components/reports/ReportCategories";
// import ReportGrid from '../components/reports/ReportGrid';
import { motion } from "framer-motion";
import CTA from "../components/CTA";
import TopBanner from "../components/TopBanner";

const ReportsPage = () => {
  return (
    <div className="">
      <TopBanner
        title="Market Research Reports"
        subtitle="Access comprehensive industry ananlyses, market forecasts, and strategic insights across multiple sectors."
      />
      <section className="py-16 bg-white mb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-light text-gray-900 mb-4 md:text-center"
          >
            Actionable Market Intelligence Across Industries
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 md:text-center max-w-3xl mx-auto"
          >
            At DATABITZY Research and Marketing, we transform complex market
            data into strategic roadmaps for businesses, investors, and
            policymakers. Our research goes beyond surface-level trends—we
            deliver granular, forward-looking intelligence that drives
            measurable outcomes.
          </motion.p>
        </div>
      </section>
      <ReportCategories />
      {/* <ReportGrid /> */}
      <CTA />
    </div>
  );
};

export default ReportsPage;
