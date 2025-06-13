import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/outline';

// Sample case studies data
const caseStudies = [
  {
    id: 1,
    title: 'E-commerce Revenue Optimization',
    industry: 'Retail',
    challenge: 'A leading online retailer struggled with declining conversion rates and cart abandonment.',
    solution: 'Implemented advanced customer segmentation and behavioral analytics to identify key drop-off points and optimization opportunities.',
    results: [
      '32% increase in conversion rate',
      '$2.4M additional revenue in 6 months',
      '45% reduction in cart abandonment'
    ],
    image: '/case-studies/ecommerce-analytics.jpg'
  },
  {
    id: 2,
    title: 'Supply Chain Efficiency',
    industry: 'Manufacturing',
    challenge: 'Global manufacturer faced inventory management issues and delivery delays.',
    solution: 'Developed predictive analytics models for demand forecasting and inventory optimization.',
    results: [
      '28% reduction in inventory costs',
      '40% improvement in delivery time accuracy',
      '15% decrease in logistics expenses'
    ],
    image: '/case-studies/supply-chain.jpg'
  }
];

// Sample pricing plans
const pricingPlans = [
  {
    name: 'Starter',
    price: '$2,999',
    duration: 'per month',
    features: [
      'Basic data analysis',
      'Monthly reports',
      'Up to 100,000 data points',
      '2 dashboard users',
      'Email support'
    ]
  },
  {
    name: 'Professional',
    price: '$5,999',
    duration: 'per month',
    features: [
      'Advanced data analysis',
      'Weekly reports',
      'Up to 1M data points',
      '5 dashboard users',
      'Priority support',
      'Custom dashboards',
      'API access'
    ]
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    duration: 'custom plan',
    features: [
      'Full-scale data analysis',
      'Real-time reporting',
      'Unlimited data points',
      'Unlimited users',
      '24/7 dedicated support',
      'Custom integration',
      'On-premise deployment',
      'SLA guarantee'
    ]
  }
];

export default function DataAnalysisPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="grainy-gradient py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-light text-gray-900 mb-6"
            >
              Data Analytics & Insights
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 leading-relaxed"
            >
              Transform your raw data into actionable insights with our comprehensive analytics solutions
            </motion.p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-4">Our Analytics Approach</h2>
            <p className="text-lg text-gray-600">
              We combine advanced statistical methods with cutting-edge machine learning to deliver deep insights
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {[
              {
                title: 'Descriptive Analytics',
                description: 'Understand what happened in your business through comprehensive data analysis and visualization.',
                features: ['Historical data analysis', 'Pattern identification', 'Custom dashboards', 'KPI tracking']
              },
              {
                title: 'Predictive Analytics',
                description: 'Forecast future trends and behaviors using advanced statistical modeling and machine learning.',
                features: ['Trend forecasting', 'Risk assessment', 'Market analysis', 'Customer behavior prediction']
              },
              {
                title: 'Prescriptive Analytics',
                description: 'Get actionable recommendations to optimize your business decisions and strategies.',
                features: ['Optimization models', 'Decision support', 'Strategy recommendations', 'ROI analysis']
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8"
              >
                <h3 className="text-xl font-light text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.features.map((item) => (
                    <li key={item} className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-4">Success Stories</h2>
            <p className="text-lg text-gray-600">
              Real results from our data analytics solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8"
              >
                <div className="aspect-video mb-6 bg-gray-100">
                  {/* Placeholder for case study image */}
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    [Case Study Image]
                  </div>
                </div>
                <h3 className="text-xl font-light text-gray-900 mb-2">{study.title}</h3>
                <p className="text-sm text-gray-500 font-mono mb-4">{study.industry}</p>
                <div className="space-y-4">
                  <p className="text-gray-600"><span className="font-semibold">Challenge:</span> {study.challenge}</p>
                  <p className="text-gray-600"><span className="font-semibold">Solution:</span> {study.solution}</p>
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Results:</p>
                    <ul className="space-y-2">
                      {study.results.map((result) => (
                        <li key={result} className="flex items-start">
                          <CheckIcon className="h-5 w-5 text-gray-900 mr-2 flex-shrink-0" />
                          <span className="text-gray-600">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-4">Pricing Plans</h2>
            <p className="text-lg text-gray-600">
              Flexible solutions for businesses of all sizes
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8"
              >
                <h3 className="text-xl font-light text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-3xl font-light">{plan.price}</span>
                  <span className="text-gray-600 ml-2">{plan.duration}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-gray-900 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-gray-900 text-white py-2 px-4 hover:bg-gray-800 transition-colors">
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-light text-gray-900 mb-6">Ready to Transform Your Data?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Schedule a consultation with our data analytics experts and discover how we can help you make better decisions with data.
            </p>
            <button className="bg-gray-900 text-white py-3 px-8 hover:bg-gray-800 transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
