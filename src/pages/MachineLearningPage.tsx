import { motion } from 'framer-motion';
import { CheckIcon, BoltIcon, CpuChipIcon, ChartBarIcon } from '@heroicons/react/24/outline';

// Sample ML models and use cases
const mlModels = [
  {
    title: 'Computer Vision',
    description: 'Advanced image and video analysis for automated visual recognition tasks.',
    applications: [
      'Object detection and tracking',
      'Facial recognition systems',
      'Quality control automation',
      'Medical image analysis'
    ],
    icon: CpuChipIcon
  },
  {
    title: 'Natural Language Processing',
    description: 'Sophisticated text analysis and language understanding capabilities.',
    applications: [
      'Sentiment analysis',
      'Document classification',
      'Text summarization',
      'Chatbot development'
    ],
    icon: BoltIcon
  },
  {
    title: 'Predictive Analytics',
    description: 'Data-driven forecasting and pattern recognition for business insights.',
    applications: [
      'Demand forecasting',
      'Risk assessment',
      'Anomaly detection',
      'Customer churn prediction'
    ],
    icon: ChartBarIcon
  }
];

// Sample case studies
const caseStudies = [
  {
    id: 1,
    title: 'Automated Quality Control System',
    industry: 'Manufacturing',
    challenge: 'A leading automotive parts manufacturer needed to improve their quality control process, which was manual and prone to errors.',
    solution: 'Implemented a computer vision-based ML system for real-time defect detection on the production line.',
    results: [
      '99.8% defect detection accuracy',
      '75% reduction in quality control costs',
      '60% faster inspection process',
      'Zero defective products shipped to customers'
    ],
    image: '/case-studies/ml-quality-control.jpg'
  },
  {
    id: 2,
    title: 'Customer Churn Prevention',
    industry: 'Telecommunications',
    challenge: 'Major telecom provider struggled with high customer churn rates and inability to predict at-risk customers.',
    solution: 'Developed ML models to predict customer churn probability and identify key intervention points.',
    results: [
      '45% reduction in customer churn',
      '$5.2M annual savings',
      '85% accuracy in predicting at-risk customers',
      'Improved customer satisfaction scores'
    ],
    image: '/case-studies/ml-churn-prevention.jpg'
  }
];

// Implementation phases
const phases = [
  {
    number: '01',
    title: 'Discovery & Planning',
    description: 'We analyze your business needs, data availability, and technical requirements to define the optimal ML solution.',
    tasks: [
      'Business requirements analysis',
      'Data assessment',
      'Feasibility study',
      'Solution architecture design'
    ]
  },
  {
    number: '02',
    title: 'Data Preparation',
    description: 'We collect, clean, and prepare your data for ML model development.',
    tasks: [
      'Data collection & integration',
      'Data cleaning & preprocessing',
      'Feature engineering',
      'Data validation'
    ]
  },
  {
    number: '03',
    title: 'Model Development',
    description: 'We build and train custom ML models tailored to your specific needs.',
    tasks: [
      'Model architecture design',
      'Model training & validation',
      'Performance optimization',
      'Model testing'
    ]
  },
  {
    number: '04',
    title: 'Deployment & Monitoring',
    description: 'We deploy your ML solution and implement continuous monitoring and improvement.',
    tasks: [
      'Production deployment',
      'Performance monitoring',
      'Model retraining',
      'Ongoing optimization'
    ]
  }
];

export default function MachineLearningPage() {
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
              Machine Learning Solutions
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 leading-relaxed"
            >
              Harness the power of artificial intelligence to transform your business with our custom machine learning solutions
            </motion.p>
          </div>
        </div>
      </section>

      {/* ML Models Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-4">ML Models & Applications</h2>
            <p className="text-lg text-gray-600">
              State-of-the-art machine learning models customized for your specific needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {mlModels.map((model, index) => (
              <motion.div
                key={model.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8"
              >
                <model.icon className="h-8 w-8 text-gray-900 mb-6" />
                <h3 className="text-xl font-light text-gray-900 mb-4">{model.title}</h3>
                <p className="text-gray-600 mb-6">{model.description}</p>
                <ul className="space-y-3">
                  {model.applications.map((app) => (
                    <li key={app} className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-gray-900 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{app}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-4">Implementation Process</h2>
            <p className="text-lg text-gray-600">
              Our systematic approach to delivering successful ML solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8"
              >
                <div className="text-4xl font-light text-gray-300 mb-4">{phase.number}</div>
                <h3 className="text-xl font-light text-gray-900 mb-4">{phase.title}</h3>
                <p className="text-gray-600 mb-6">{phase.description}</p>
                <ul className="space-y-3">
                  {phase.tasks.map((task) => (
                    <li key={task} className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-gray-900 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{task}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-4">Success Stories</h2>
            <p className="text-lg text-gray-600">
              Real results from our machine learning solutions
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
                className="bg-gray-50 p-8"
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

      {/* CTA Section */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-light text-gray-900 mb-6">Ready to Implement ML in Your Business?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Schedule a consultation with our ML experts and discover how artificial intelligence can transform your operations.
            </p>
            <button className="bg-gray-900 text-white py-3 px-8 hover:bg-gray-800 transition-colors">
              Book Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
