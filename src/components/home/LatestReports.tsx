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
            transition={{ duration: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-h3 font-light text-[#183B4E]">
              Latest Publications
            </h2>
          </motion.div>

          <Button to="/reports" color="blue-500" vibe="dark">
            Explore
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 min-h-screen">
          <BentoCard
            title={reports[0].title}
            slug={reports[0].slug}
            img="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202502/67b46587c550f-bengalurus-february-heat-breaks-records--surpasses-delhis-27c-temperature-1848349-16x9.png?size=948:533"
            industrySlug={reports[0].industrySlug}
            color="#274c61"
            classname="lg:col-span-2 lg:row-span-1"
          />
          <BentoCard
            title={reports[1].title}
            slug={reports[1].slug}
            img="https://www.adhesiveapps.com/wp-content/uploads/2023/11/Green-Polyester-Film-Tape-Adhesive-Applications.jpg"
            industrySlug={reports[1].industrySlug}
            color="#95ccc7"
            classname="lg:col-span-1 lg:row-span-1"
          />
          <BentoCard
            title={reports[2].title}
            slug={reports[2].slug}
            img="https://testups.com/wp-content/uploads/2020/05/filtre1.jpg"
            industrySlug={reports[2].industrySlug}
            color="#183B4E"
            classname="lg:col-span-1 lg:row-span-1"
          />

          <BentoCard
            title={reports[3].title}
            slug={reports[3].slug}
            img="https://linearmicrosystems.com/wp-content/uploads/2019/08/shutterstock_1165047031.jpg"
            industrySlug={reports[3].industrySlug}
            color="#34464a"
            classname="lg:col-span-2 lg:row-span-1"
          />
        </div>
      </div>
    </section>
  );
};

export default LatestReports;
