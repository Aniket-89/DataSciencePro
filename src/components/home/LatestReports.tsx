import { motion } from "framer-motion";
import { industryReports } from "../../data/industryReports";
import BentoCard from "../BentoCard";
import Button from "../Button";

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
      <div className="max-w-[1600px] mx-auto px-4">
        <div className="flex justify-between items-end mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-h3 font-light text-[#183B4E]">
              Latest Publications
            </h2>
          </motion.div>

          <Button to="/reports/semiconductors" color="blue-500" vibe="dark">
            View All Reports
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 min-h-screen">
          <BentoCard
            title={reports[0].title}
            slug={reports[0].slug}
            industrySlug={reports[0].industrySlug}
            color="#183B4E"
            classname="col-span-2 row-span-1"
          />
          <BentoCard
            title={reports[1].title}
            slug={reports[1].slug}
            industrySlug={reports[1].industrySlug}
            color="#183B4E"
            classname="col-span-1 row-span-1"
          />
          <BentoCard
            title={reports[2].title}
            slug={reports[2].slug}
            industrySlug={reports[2].industrySlug}
            color="#183B4E"
            classname="col-span-1 row-span-1"
          />

          <BentoCard
            title={reports[3].title}
            slug={reports[3].slug}
            industrySlug={reports[3].industrySlug}
            color="#183B4E"
            classname="col-span-2 row-span-1"
          />
        </div>
      </div>
    </section>
  );
};

export default LatestReports;
