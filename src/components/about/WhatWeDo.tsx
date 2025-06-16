import { motion } from 'framer-motion';

const services = [
  {
    icon: "🧠",
    title: "Market Entry Strategy",
    description: "Identify high-potential geographies and optimal entry approaches."
  },
  {
    icon: "📊",
    title: "Market Sizing & Forecasting",
    description: "Accurate demand estimation with 5–10 year projections."
  },
  {
    icon: "📈",
    title: "Trend Analysis",
    description: "Real-time tracking of industry shifts, disruptions, and emerging technologies."
  },
  {
    icon: "⚖️",
    title: "Opportunity & Threat Assessment",
    description: "SWOT, PESTLE, and competitor benchmarking."
  },
  {
    icon: "📞",
    title: "Primary & Secondary Research",
    description: "Interviews with industry experts + AI-powered validation."
  },
  {
    icon: "🧍",
    title: "Consumer Behavior Insights",
    description: "Surveys, sentiment analysis, and purchase intent modeling."
  }
];

const WhatWeDo = () => {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-light text-gray-900 mb-4"
          >
            Our Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600"
          >
            Comprehensive solutions for data-driven decision making
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 flex-1 basis-[280px] max-w-[380px] min-w-[280px] group hover:bg-gray-100 transition-colors"
            >
              <div className="flex flex-col items-start">
                <span className="text-4xl mb-6 transform group-hover:scale-110 transition-transform">
                  {service.icon}
                </span>
                <h3 className="text-xl font-light text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
