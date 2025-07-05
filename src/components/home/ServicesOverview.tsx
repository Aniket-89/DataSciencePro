import { motion } from "framer-motion";
import {
  ChartBarIcon,
  PresentationChartLineIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import EllipseCard from "../EllipseCard";

const services = [
  {
    icon: ChartBarIcon,
    title: "Market Analysis",
    description:
      "Segment-specific forecasts, SWOT frameworks, and opportunity mapping",
    deliverables: [
      "Market Size & Share Analysis",
      "Competitive Intelligence",
      "Growth Opportunity Assessment",
      "Market Entry Strategies",
    ],
    spotlight:
      "rgba(219, 234, 254, 0.49)" as `rgba(${number}, ${number}, ${number}, ${number})`,
    color: "[#dbeafe]",
    buttonText: "Learn more",

    link: "/services/reports",
    vibe: "light",
  },
  {
    icon: PresentationChartLineIcon,
    title: "Data Solutions",
    description:
      "Transform raw data into strategic insight through advanced analytics and predictive modeling.",
    deliverables: [
      "Predictive & Prescriptive Analytics",
      "Real-time Market Monitoring Dashboards",
      "Custom BI & Reporting Tools",
      "Risk Scoring & Scenario Planning",
    ],
    spotlight:
      "rgba(190, 122, 20, 0.49)" as `rgba(${number}, ${number}, ${number}, ${number})`,
    color: "[#DDA853]",
    vibe: "dark",
    buttonText: "Learn more",

    link: "/services/data-analysis",
  },

  {
    icon: WrenchScrewdriverIcon,
    title: "Custom Solutions",
    description:
      "For startups to Fortune 500 — adaptable, goal-specific insights",
    deliverables: [
      "Tailored Research Design",
      "Custom Data Collection",
      "Bespoke Analytics Models",
      "Implementation Support",
    ],
    spotlight:
      "rgba(255, 226, 226, 0.49)" as `rgba(${number}, ${number}, ${number}, ${number})`,
    color: "[#ffe2e2]",
    buttonText: "Contact us",
    link: "/contact",
    vibe: "light",
  },
];

const ServicesOverview = () => {
  return (
    <section className="py-24 my-12 max-w-[1600px] mx-auto rounded-3xl ">
      <div className="px-4">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="text-center my-16"
        >
          <h2 className="text-5xl font-semibold text-[#183B4E] mb-4">
            How We Help Businesses
          </h2>
        </motion.div>
        <div className="grid lg:grid-cols-3 gap-2 w-full mx-auto">
          {services.map((service, index) => (
            <EllipseCard key={index} title={service.title} desc={service.description} tags={service.deliverables} to={service.link} list={true}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
