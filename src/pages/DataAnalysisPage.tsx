import { motion } from "framer-motion";
import TopBanner from "../components/TopBanner";
import ToolsSliderSection from "../components/ToolsSliderSection";
import CTA from "../components/CTA";
import SmallCard from "../components/SmallCard";
import BentoCard from "../components/BentoCard";
import { MarketGraph } from "../assets/assets";

export default function DataAnalysisPage() {
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

      <section className="py-12 md:py-24 rounded-3xl max-w-7xl m-2 lg:mx-auto bg-[#DDA853]">
        <div className="container grid gap-3 mx-auto w-full">
          <div className="max-w-2xl grid md:grid-cols-2 gap-2 w-full mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 120, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.3, delay: 0 }}
              viewport={{ once: true }}
              className="text-h1 flex flex-col items-center justify-center font-bold text-gray-900 mb-4"
            >
              <span className="font-bold">What</span>
              <br />
              <span className="text-gray-800">We</span>
              <br />
              <span className="text-gray-300">Offer</span>
            </motion.div>
            <SmallCard
              text="End-to-end data analytics solutions for business insights"
              color="bg-white"
            />
          </div>

          <div className="max-w-2xl grid md:grid-cols-2 gap-3 mx-auto">
            <SmallCard
              text="Building smart machine learning models to solve real-world
                  problems"
              color="bg-red-100"
            />
            <SmallCard
              text="Creating automated workflows and dashboards using tools like
                  Python, KNIME, and Power BI"
              color="bg-blue-100"
            />
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-4">
              📊 Real-World Case Study
            </h2>
            <h3 className="text-2xl font-medium text-gray-800 mb-2">
              Predicting Customer Churn for ABC Telecom
            </h3>
          </div>
          <div className="max-w-3xl mx-auto bg-white p-10 rounded shadow-sm">
            <div className="mb-8">
              <div className="flex items-center mb-2">
                <span className="text-xl mr-2">🧠</span>
                <span className="text-xl font-semibold text-gray-900">
                  Objective
                </span>
              </div>
              <p className="text-gray-700 text-lg ml-7">
                Develop a machine learning model to predict churn and reduce
                customer attrition.
              </p>
            </div>
            <div className="mb-8">
              <div className="flex items-center mb-2">
                <span className="text-xl mr-2">🔧</span>
                <span className="text-xl font-semibold text-gray-900">
                  Approach:
                </span>
              </div>
              <ul className="list-disc ml-12 text-gray-700 text-lg space-y-2">
                <li>
                  <span className="font-semibold">Data Preprocessing:</span>{" "}
                  Cleaned and analyzed customer demographics & usage.
                </li>
                <li>
                  <span className="font-semibold">Feature Engineering:</span>{" "}
                  Tenure, contract type, feedback scores.
                </li>
                <li>
                  <span className="font-semibold">Modeling:</span> Logistic
                  Regression, Random Forest, and Gradient Boosting with
                  hyperparameter tuning.
                </li>
                <li>
                  <span className="font-semibold">Evaluation:</span> Achieved
                  85% accuracy, 78% precision, and 82% recall.
                </li>
              </ul>
            </div>
            <div>
              <div className="flex items-center mb-2">
                <span className="text-xl mr-2">🎯</span>
                <span className="text-xl font-semibold text-gray-900">
                  Impact
                </span>
              </div>
              <p className="text-gray-700 text-lg ml-7">
                Churn reduced by 15% in 6 months → Significant revenue
                retention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Data Automation Tool Section */}
      <section className="py-22 max-w-7xl rounded-3xl bg-[#dbeafe] m-2 xl:mx-auto">
        <div className="container grid grid-cols-2 mx-auto px-4 ">
          <h2 className="text-h3 text-gray-900 mb-4">
            Data Automation Tool: <br />
            <span className="text-hero text-nowrap font-bold">
              Pull Algorithm
            </span>
          </h2>

          <div className="max-w-3xl text-gray-900 mx-auto text-lg text-gray-700">
            <p className="mb-4">
              Developed a daily automation tool to pull and analyze Open
              Interest (OI) data for stock markets directly into Excel after
              market hours.
            </p>
            <p>
              This tool is now used across the team for faster strategy
              execution based on real-time OI-price correlations.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-light text-gray-900 mb-4">
              💬 Testimonials
            </h2>
          </div>
          <div className="max-w-2xl mx-auto space-y-10">
            <div className="bg-gray-50 p-8 rounded shadow-sm">
              <div className="text-2xl mb-4">
                ⭐ “His dashboards beautifully distill complex data.”
              </div>
              <div className="text-gray-700 text-right font-mono">
                — Atmaram P., Power BI Dashboard{" "}
                <span className="text-gray-400">(Sep 2023)</span>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded shadow-sm">
              <div className="text-2xl mb-4">
                ⭐ “Innovative thinking and proactive communication made our ML
                project seamless.”
              </div>
              <div className="text-gray-700 text-right font-mono">
                — Rohit Singh R., ML Algorithms{" "}
                <span className="text-gray-400">(Sep 2023)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Freelance Projects Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-h1 font-semibold text-gray-900 mb-4">
              Projects
            </h2>
          </div>
          <div className="max-w-7xl min-h-screen grid lg:grid-cols-3 md:grid-cols-2 gap-2 mx-auto">
            {/* <div className="bg-gray-50 p-8 rounded shadow-sm">
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-2">🧠</span>
                <span className="font-semibold">
                  Stock Market Prediction with KNIME
                </span>
              </div>
              <div className="mb-2">
                Predicted 2021 opening price using ML models like LSTM &
                tree-based algorithms.
              </div>
              <a href="#" className="text-purple-700 underline">
                [View project]
              </a>
            </div> */}
            <BentoCard
              title="Stock Market Prediction with KNIME"
              industrySlug="Stock Market"
              slug="#"
              classname="lg:col-span-1 lg:row-span-1"
              img={MarketGraph}
            />
            <BentoCard
              title="Transportation Network Analysis"
              industrySlug="Data Analysis"
              slug="#"
              classname="lg:col-span-2 lg:row-span-1"
              img="https://img.freepik.com/free-photo/transport-logistics-products_23-2151541830.jpg"
            />
            <BentoCard
              title="Marketing Campaign Optimization for P&G"
              industrySlug="Data Analysis"
              slug="#"
              classname="lg:col-span-2 lg:row-span-1"
              img="https://res.cloudinary.com/people-matters/image/upload/q_auto,f_auto/v1749120623/1749120621.jpg"
            />
            <BentoCard
              title="Mode of Transport Prediction using GPS logs"
              industrySlug="Data Analysis"
              slug="#"
              classname="lg:col-span-1 lg:row-span-1"
              img="https://img.freepik.com/free-photo/traffic-vehicle-urban-reflections-city_1112-973.jpg"
            />
            <BentoCard
              title="Adversarial ML for NLP & Image Processing"
              industrySlug="Data Analysis"
              slug="#"
              classname="lg:col-span-3 md:col-span-2 row-span-1"
              img="https://img.freepik.com/free-vector/gradient-brain-background_23-2150441899.jpg"
            />
            {/* <div className="bg-gray-50 p-8 rounded shadow-sm">
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-2">🏙️</span>
                <span className="font-semibold">
                  Transportation Network Analysis
                </span>
              </div>
              <div className="mb-2">
                Merged and analyzed traffic CSVs using Python to generate
                pie/bar charts.
              </div>
              <a href="#" className="text-purple-700 underline">
                [View data]
              </a>
            </div>
            <div className="bg-gray-50 p-8 rounded shadow-sm">
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-2">📈</span>
                <span className="font-semibold">
                  Marketing Campaign Optimization for P&G
                </span>
              </div>
              <div className="mb-2">
                Identified profitable stores using geospatial ML modeling. Built
                a Power BI dashboard.
              </div>
              <a href="#" className="text-purple-700 underline">
                [View solution]
              </a>
            </div>
            <div className="bg-gray-50 p-8 rounded shadow-sm">
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-2">🌍</span>
                <span className="font-semibold">
                  Mode of Transport Prediction using GPS logs
                </span>
              </div>
              <div className="mb-2">
                Used GeoLife dataset with ML model based on 10-minute interval
                GPS data.
              </div>
              <a href="#" className="text-purple-700 underline">
                [View notebook]
              </a>
            </div>
            <div className="bg-gray-50 p-8 rounded shadow-sm">
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-2">🧪</span>
                <span className="font-semibold">
                  Adversarial ML for NLP & Image Processing
                </span>
              </div>
              <div className="mb-2">
                Presentation crafted for senior executives from 3 core research
                papers.
              </div>
              <a href="#" className="text-purple-700 underline">
                [Presentation]
              </a>
            </div> */}
          </div>
        </div>
      </section>

      {/* Certification & Experience Section */}
      {/* <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-4">
              📚 Certification
            </h2>
            <div className="bg-white p-8 rounded shadow-sm text-lg text-gray-700 mb-6">
              <div className="font-semibold text-gray-900 mb-2">
                Data Science Professional Training
              </div>
              <div className="text-gray-500 mb-4">(Dec 2018 – Apr 2019)</div>
              <div className="mb-2 font-semibold">Topics covered:</div>
              <ul className="list-disc ml-8 space-y-1">
                <li>Data Cleaning & Exploration</li>
                <li>Predictive Modeling</li>
                <li>Real-life dataset projects reviewed by industry experts</li>
              </ul>
            </div>
            <h2 className="text-3xl font-light text-gray-900 mb-4">
              💼 Experience
            </h2>
            <div className="bg-white p-8 rounded shadow-sm text-lg text-gray-700">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-semibold mb-2">
                <div>Role</div>
                <div>Company</div>
                <div>Duration</div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-gray-200 py-2">
                <div>Data Analyst / BI Developer</div>
                <div>HDFC</div>
                <div>June 2023 – Present</div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-gray-200 py-2">
                <div>Freelance Data Scientist</div>
                <div>Afcodex Pvt Ltd</div>
                <div>Aug 2020 – June 2023</div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-gray-200 py-2">
                <div>Freelancer</div>
                <div>Demansold Tech Pvt Ltd</div>
                <div>July 2022 – Aug 2022</div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Summary Block Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="flex flex-col items-center">
                <span className="text-3xl mb-2">🧠</span>
                <span className="text-white text-xl font-semibold">
                  30+ freelance projects
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl mb-2">💼</span>
                <span className="text-white text-xl font-semibold">
                  5+ years of experience
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl mb-2">📍</span>
                <span className="text-white text-xl font-semibold">
                  Expertise: Machine Learning, BI Dashboards, Data Pipelines
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl mb-2">🔗</span>
                <span className="text-white text-xl font-semibold">
                  10+ verified testimonials
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-light text-gray-900 mb-6">
              Ready to Transform Your Data?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Schedule a consultation with our data analytics experts and
              discover how we can help you make better decisions with data.
            </p>
            <button className="bg-gray-900 text-white py-3 px-8 hover:bg-gray-800 transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section> */}
      <CTA />
    </div>
  );
}
