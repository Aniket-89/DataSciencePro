import { motion } from "framer-motion";
import SpotlightCard from "../../blocks/Components/SpotlightCard/SpotlightCard";
import {
  ChartBarIcon,
  PresentationChartLineIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import Button from "../Button";

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1600px] mx-auto">
          {services.map((service, index) => (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="grid"
            >
              <SpotlightCard
                key={index}
                className="custom-spotlight-card shadow-sm bg-white  border-none flex flex-col justify-between"
                spotlightColor={service.spotlight}
              >
                <div className="mb-6">
                  <service.icon className="h-12 w-12 transform group-hover:scale-110 transition-transform" />
                </div>

                <h3 className="text-h3 font-bold text-[#183B4E] mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-700 font-normal mb-6">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-8 flex-grow">
                  {service.deliverables.map((item, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <span className="mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <Button
                  to={service.link}
                  color={service.color}
                  // vibe={service.vibe}
                >
                  {service.buttonText}
                </Button>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
