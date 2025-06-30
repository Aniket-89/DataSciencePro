import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { industryReports } from "../../data/industryReports";

// Flatten all reports with their industry slug for linking
const allReports = Object.entries(industryReports).flatMap(
  ([industrySlug, reports]) =>
    reports.map((report) => ({ ...report, industrySlug }))
);

const LatestReports = () => {
  // Pick the first 5 reports for demo (or use your own logic)
  const reports = allReports.slice(0, 5);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-light text-[#183B4E]">
              Latest Publications
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Link
              to="/reports/semiconductors"
              className="text-[#183B4E] hover:text-gray-600 transition-colors"
            >
              View All Reports →
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 min-h-screen">
          <motion.div
            key={reports[0].id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="p-6 bg-gray-50 rounded-3xl  group col-span-2 row-span-1 hover:bg-gray-100 transition-colors"
          >
            <Link
              to={`/reports/${reports[0].industrySlug}/${reports[0].id}`}
              className="block text-[#183B4E] group-hover:text-gray-600 transition-colors"
            >
              <h3 className="text-xl font-light mb-4">{reports[0].title}</h3>
              <span className="text-sm">Read More →</span>
            </Link>
          </motion.div>
          <motion.div
            key={reports[0].id}
            transition={{ duration: 0.1 }}
            whileHover={{ scale: 0.96 }}
            viewport={{ once: true }}
            className="p-6 bg-gray-50 group test-bg overflow-hidden rounded-3xl col-span-1 row-span-1 hover:bg-gray-100 transition-colors"
          >
            <Link
              to={`/reports/${reports[0].industrySlug}/${reports[0].id}`}
              className="block text-[#183B4E] group-hover:text-gray-600 transition-colors"
            >
              <h3 className="text-xl font-light mb-4">{reports[0].title}</h3>
              <span className="text-sm">Read More →</span>
            </Link>
          </motion.div>
          <motion.div
            key={reports[0].id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="p-6 bg-gray-50 group rounded-3xl col-span-1 row-span-1 hover:bg-gray-100 transition-colors"
          >
            <Link
              to={`/reports/${reports[0].industrySlug}/${reports[0].id}`}
              className="block text-[#183B4E] group-hover:text-gray-600 transition-colors"
            >
              <h3 className="text-xl font-light mb-4">{reports[0].title}</h3>
              <span className="text-sm">Read More →</span>
            </Link>
          </motion.div>
          <motion.div
            key={reports[0].id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="p-6 bg-gray-50 group rounded-3xl col-span-2 row-span-1 hover:bg-gray-100 transition-colors"
          >
            <Link
              to={`/reports/${reports[0].industrySlug}/${reports[0].id}`}
              className="block text-[#183B4E] group-hover:text-gray-600 transition-colors"
            >
              <h3 className="text-xl font-light mb-4">{reports[0].title}</h3>
              <span className="text-sm">Read More →</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LatestReports;
