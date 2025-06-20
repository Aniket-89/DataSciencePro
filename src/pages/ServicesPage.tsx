import {
  ChartBarIcon,
  PresentationChartLineIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';
import CTA from '../components/CTA';
import { GrainyGradient3 } from '../assets/assets';

const services = [
  {
    title: 'Market Research Reports',
    description:
      'Unlock industry-specific intelligence with forecasts, competitive analysis, and emerging trend insights — across 12+ global sectors.',
    deliverables: [
      'Market Sizing & Growth Forecasts',
      'SWOT & Competitive Benchmarking',
      'Consumer Sentiment & Demand Trends',
      'Opportunity & Risk Mapping',
    ],
    link: '/services/reports',
    icon: ChartBarIcon,
  },
  {
    title: 'Data Solutions',
    description:
      'We transform raw market data into strategic tools using predictive analytics, dashboards, and decision models that drive measurable results.',
    deliverables: [
      'Predictive & Prescriptive Analytics',
      'Market Monitoring Dashboards',
      'Strategic KPI Reports',
      'Risk Scoring & Scenario Simulation',
    ],
    link: '/services/data-solutions',
    icon: PresentationChartLineIcon,
  },
  {
    title: 'Custom Solutions',
    description:
      'Need something more tailored? From early-stage startups to Fortune 500s — we build goal-specific, research-backed strategies just for you.',
    deliverables: [
      'Custom Research Design',
      'Specialized Data Collection',
      'Strategic Deep-Dives',
      'Implementation Roadmaps',
    ],
    link: '/contact',
    icon: WrenchScrewdriverIcon,
  },
];

const ServicesPage = () => {
  return (
    <section className="my-16">
      <div className="w-full h-96 flex flex-col items-center justify-center mx-auto text-center mb-16 relative overflow-hidden">
        <img src={GrainyGradient3} alt="" className='absolute -top-80 left-0 object-cover -z-10'/>
        <h1 className="text-5xl font-bold text-white mb-4">Our Services</h1>
        <p className="text-lg text-gray-50 max-w-2xl mx-auto">
          We help businesses move forward with research-driven insights and intelligent data solutions.
          Whether you're entering a new market, validating a strategy, or solving a specific challenge —
          our services are built to deliver clarity, action, and results.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col justify-between"
          >
            <div>
              <service.icon className="w-8 h-8 text-[#27548A] mb-4" />
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h2>
              <p className="text-sm text-gray-700 mb-4">{service.description}</p>
              <ul className="text-sm text-gray-600 list-disc ml-5 space-y-1 mb-6">
                {service.deliverables.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <a
              href={service.link}
              className="inline-block text-[#27548A] border border-[#27548A] px-4 py-2 rounded hover:bg-[#27548A] hover:text-white transition text-sm font-medium text-center mt-auto"
            >
              {service.title === 'Custom Solutions'
                ? 'Request a Custom Solution'
                : 'Learn More →'}
            </a>
          </div>
        ))}
      </div>

      {/* Optional CTA */}
      <CTA />
    </section>
  );
};

export default ServicesPage;
