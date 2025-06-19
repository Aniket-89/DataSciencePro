import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ChartBarIcon,
  PresentationChartLineIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';

const services = [
  {
    icon: ChartBarIcon,
    title: 'Market Analysis',
    description: 'Segment-specific forecasts, SWOT frameworks, and opportunity mapping',
    deliverables: [
      'Market Size & Share Analysis',
      'Competitive Intelligence',
      'Growth Opportunity Assessment',
      'Market Entry Strategies'
    ],
    link: '/services/reports'
  },
  {
    icon: PresentationChartLineIcon,
    title: 'Consultancy Services',
    description: 'Primary + secondary research validated by industry veterans',
    deliverables: [
      'Industry Expert Interviews',
      'Data Validation & Analysis',
      'Strategic Recommendations',
      'Trend Impact Analysis'
    ],
    link: '/services/reports'
  },
  {
    icon: WrenchScrewdriverIcon,
    title: 'Custom Solutions',
    description: 'For startups to Fortune 500 — adaptable, goal-specific insights',
    deliverables: [
      'Tailored Research Design',
      'Custom Data Collection',
      'Bespoke Analytics Models',
      'Implementation Support'
    ],
    link: '/contact'
  }
];

const ServicesOverview = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-semibold text-[#183B4E] mb-4 font-sans">
            How We Help Businesses
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-gray-50 group hover:bg-gray-100 transition-colors flex flex-col"
            >
              <div className="mb-6">
                <service.icon className="h-12 w-12 text-[#183B4E] transform group-hover:scale-110 transition-transform" />
              </div>
              
              <h3 className="text-2xl font-medium text-[#183B4E] mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 font-normal mb-6">
                {service.description}
              </p>

              <ul className="space-y-3 mb-8 flex-grow">
                {service.deliverables.map((item, i) => (
                  <li key={i} className="flex items-center text-[#183B4E]">
                    <span className="mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                to={service.link}
                className="inline-flex items-center font-medium text-[#183B4E] group-hover:text-gray-600 transition-colors"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
