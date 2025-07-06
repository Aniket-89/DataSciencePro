import { motion } from "framer-motion";
import TopBanner from "../components/TopBanner";
import ToolsSliderSection from "../components/ToolsSliderSection";
import CTA from "../components/CTA";
import SmallCard from "../components/SmallCard";
import BentoCard from "../components/BentoCard";
import { MarketGraph } from "../assets/assets";
import { StarIcon } from "@heroicons/react/16/solid";
import CaseStudySection from "../components/CaseStudySection";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRef } from "react";

export default function DataAnalysisPage() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };
  return (
    <div className="">
      {/* Hero Section */}
      <TopBanner
        title="Data Analytics & Insights"
        subtitle="Transform your raw data into actionable insights with our comprehensive analytics solutions"
      />

      {/* Tools Slider */}
      <ToolsSliderSection />

      {/* What We Offer Section */}

      <section className="py-12 md:py-24 soft-shadow rounded-3xl max-w-[1600px] mx-2 2xl:mx-auto bg-[#DDA853]">
        <div className="grid gap-3 mx-auto w-full">
          <div className="max-w-2xl grid md:grid-cols-2 gap-2 w-full mx-auto m-2 text-center">
            <motion.div
              initial={{ opacity: 0, y: 120, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.3, delay: 0 }}
              viewport={{ once: true }}
              className="text-cta flex flex-col items-center justify-center leading-thin font-bold text-gray-900 mb-4"
            >
              <span className="font-bold">What</span>
              <span className="text-gray-800">We</span>
              <span className="text-gray-300">Offer</span>
            </motion.div>
            <SmallCard
              text="Creating automated workflows and dashboards using tools like
                  Python, KNIME, and Power BI"
              color="bg-blue-100"
            />
          </div>

          <div className="max-w-2xl grid md:grid-cols-2 gap-3 mx-2 mx-auto">
            <SmallCard
              text="Building smart machine learning models to solve real-world
                  problems"
              color="bg-red-100"
            />
            <SmallCard
              text="End-to-end data analytics solutions for business insights"
              color="bg-white"
            />
          </div>
        </div>
      </section>

      {/* Summary Block Section */}
      <section className="my-28 mx-auto">
        <div className="mx-auto px-4">
          <div className="mx-auto">
            <div className="grid grid-cols-3 gap-2 md:gap-8 text-center">
              <div className="flex flex-col items-center">
                <span className="text-h1 text-[#DDA853] font-bold mb-2">
                  30+
                </span>
                <span className="text-gray-900 text-md md:text-2xl font-semibold">
                  Projects
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-h1 text-blue-400 font-bold mb-2">5+</span>
                <span className="text-gray-900 text-md md:text-2xl font-semibold">
                  Years of Experience
                </span>
              </div>
              {/* <div className="flex flex-col items-center">
                <span className="text-3xl mb-2">📍</span>
                <span className="text-white text-xl font-semibold">
                  Expertise: Machine Learning, BI Dashboards, Data Pipelines
                </span>
              </div> */}
              <div className="flex flex-col items-center">
                <span className="text-h1 text-[#27548A] font-bold mb-2">
                  10+
                </span>
                <span className="text-gray-900 text-md md:text-2xl font-semibold">
                  Verified Clients
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <CaseStudySection />

      {/* Data Automation Tool Section */}
      <section className="py-22 my-12 max-w-[1600px] rounded-3xl bg-[#dbeafe] m-2 xl:mx-auto">
        <div className="container grid md:grid-cols-2 mx-auto px-4 ">
          <motion.div
            initial={{ opacity: 0.1, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-h3 text-gray-900 mb-6"
          >
            Data Automation Tool: <br />
            <motion.div
              initial={{ opacity: 0, scale: 0.3 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-hero text-nowrap font-bold"
            >
              Pull Algorithm
            </motion.div>
          </motion.div>

          <div className="max-w-3xl text-gray-900 mx-auto text-sm md:text-lg text-gray-600">
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, delay: 0.5 }}
              className="mb-4"
            >
              Developed a daily automation tool to pull and analyze Open
              Interest (OI) data for stock markets directly into Excel after
              market hours.
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, delay: 0.5 }}
              className="mb-4"
            >
              This tool is now used across the team for faster strategy
              execution based on real-time OI-price correlations.
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="pt-12 lg:pt-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mx-auto text-center mb-2 lg:mb-10">
            <h2 className="text-cta font-light text-gray-900 lg:mb-4">
              Testimonials
            </h2>
          </div>
          <div className="mx-auto grid md:grid-cols-2 gap-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-3xl m-2  bg-[#ffe2e2] p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <img
                  src=""
                  alt="Atmaram P. img"
                  className="w-12 h-12 rounded-full mr-4 flex-shrink-0"
                />
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-semibold text-[#183B4E] truncate">
                    Atmaram P.
                  </h3>
                  <p className="text-gray-600 text-xs">Power BI Dashboard</p>
                </div>
              </div>

              <div className="flex space-x-1 mt-3 mb-3 md:mt-4 md:mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className="w-4 h-4 md:w-5 md:h-5 text-[#DDA853]"
                  />
                ))}
              </div>

              <p className="text-gray-600 italic text-sm md:text-base">
                &ldquo;I had the pleasure of working closely with Anmol S, and I
                must say that his services as a Data Analyst and Data Scientist
                are truly exceptional. Anmol not only possesses an impressive
                analytical skill set but also demonstrates an incredible knack
                for creative writing that adds a unique dimension to his work.
                What sets Anmol apart is his unwavering commitment to delivering
                top-notch results consistently, often well before the deadlines.
                His ability to craft insightful dashboards that beautifully
                distill complex data is truly commendable. Anmol's dedication,
                professionalism, and creativity make him an invaluable asset to
                any team or project, and I wholeheartedly recommend his
                services.&rdquo;
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-3xl m-2 bg-[#dbeafe] p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <img
                  src=""
                  alt="Rohit Singh R. img"
                  className="w-12 h-12 rounded-full mr-4 flex-shrink-0"
                />
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-semibold text-[#183B4E] truncate">
                    Rohit Singh R.
                  </h3>
                  <p className="text-gray-600 text-xs">
                    ML Algorithms (Sep 2023)
                  </p>
                </div>
              </div>

              <div className="flex space-x-1 mt-3 mb-3 md:mt-4 md:mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className="w-4 h-4 md:w-5 md:h-5 text-[#DDA853]"
                  />
                ))}
              </div>

              <p className="text-gray-600 italic text-sm md:text-base">
                &ldquo;It was a pleasure working with Anmol on our recent
                Machine Learning project. I found his expertise in the subject
                matter to be thorough and his commitment to the project
                commendable. The way he approached problems, and his proactive
                communication ensured that the project progressed smoothly. His
                flexibility in accommodating feedback and making necessary
                adjustments was truly professional. What stood out the most for
                me was his innovative thinking and his ability to provide
                solutions that were both effective and efficient. I would highly
                recommend Anmol to any potential clients on Upwork. His skills
                and dedication make him a valuable asset for any project.
                Looking forward to collaborating with him again in the
                future.&rdquo;
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sample Freelance Projects Section */}

      <section className="py-24 bg-white max-w-[1600px] mx-auto ">
        <div className="mx-auto px-4">
          {/* Title and Scroll Arrows */}
          <div className=" flex items-center justify-between mb-10">
            <h2 className="text-h1 font-semibold text-gray-900">Projects</h2>
            <div className="hidden md:flex gap-2">
              <button
                onClick={scrollLeft}
                className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition"
                aria-label="Scroll Left"
              >
                <FaChevronLeft className="w-5 h-5 text-gray-800" />
              </button>
              <button
                onClick={scrollRight}
                className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition"
                aria-label="Scroll Right"
              >
                <FaChevronRight className="w-5 h-5 text-gray-800" />
              </button>
            </div>
          </div>

          {/* Scrollable Project Cards */}
          <div
            ref={scrollRef}
            className="flex flex-row gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth -mx-4 px-4 pb-4"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {/* Add BentoCard components here */}
            <BentoCard
              title="Stock Market Prediction with KNIME"
              industrySlug="stock-market"
              slug="knime-stock"
              classname="shrink-0 w-[85vw] sm:w-[65vw] md:w-[45vw] lg:w-[400px] snap-center"
              img={MarketGraph}
            />
            <BentoCard
              title="Transportation Network Analysis"
              industrySlug="data-analysis"
              slug="transport-network"
              classname="shrink-0 w-[85vw] sm:w-[65vw] md:w-[45vw] lg:w-[400px] snap-center"
              img="https://img.freepik.com/free-photo/transport-logistics-products_23-2151541830.jpg"
            />
            <BentoCard
              title="Marketing Campaign Optimization for P&G"
              industrySlug="marketing"
              slug="pg-campaign"
              classname="shrink-0 w-[85vw] sm:w-[65vw] md:w-[45vw] lg:w-[400px] snap-center"
              img="https://res.cloudinary.com/people-matters/image/upload/q_auto,f_auto/v1749120623/1749120621.jpg"
            />
            <BentoCard
              title="Mode of Transport Prediction using GPS logs"
              industrySlug="transport"
              slug="gps-prediction"
              classname="shrink-0 w-[85vw] sm:w-[65vw] md:w-[45vw] lg:w-[400px] snap-center"
              img="https://img.freepik.com/free-photo/traffic-vehicle-urban-reflections-city_1112-973.jpg"
            />
            <BentoCard
              title="Adversarial ML for NLP & Image Processing"
              industrySlug="machine-learning"
              slug="adversarial-ml"
              classname="shrink-0 w-[85vw] sm:w-[65vw] md:w-[45vw] lg:w-[400px] snap-center"
              img="https://img.freepik.com/free-vector/gradient-brain-background_23-2150441899.jpg"
            />
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
