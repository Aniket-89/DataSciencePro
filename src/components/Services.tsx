import { motion } from 'framer-motion';
import { ChartBarIcon, CpuChipIcon } from '@heroicons/react/24/outline';
import { CheckIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

const services = [
	{
		title: 'Market Analysis',
		description:
			'Dive deep with segment-specific forecasts, SWOT frameworks, and emerging opportunity mapping.',
		icon: ChartBarIcon,
		features: [
			'Business Intelligence Dashboards',
			'Predictive Analytics',
			'Data Visualization',
			'Performance Metrics & KPIs',
		],
		link: 'data-analysis',
	},
	{
		title: 'Consultancy Services',
		description:
			'Rigorous primary + secondary research validated by industry veterans.',
		icon: CpuChipIcon,
		features: [
			'Custom ML Model Development',
			'Natural Language Processing',
			'Computer Vision Solutions',
			'Automated Decision Systems',
		],
		link: 'machine-learning',
	},
	{
		title: 'Custom Solutions',
		description:
			'From startups to Fortune 500, our reports adapt to your strategic needs.',
		icon: CpuChipIcon,
		features: [
			'Custom ML Model Development',
			'Natural Language Processing',
			'Computer Vision Solutions',
			'Automated Decision Systems',
		],
		link: 'machine-learning',
	},
];

const Services = () => {
	return (
		<section id="services" className="py-32 bg-gray-50">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center max-w-3xl mx-auto mb-16"
				>
					<h2 className="text-4xl font-semibold text-gray-900 mb-6">
						Our Services
					</h2>
					<p className="text-lg text-gray-600">
						Discover how DATABITZY Research and Marketing can help your business
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
					{services.map((service, index) => (
						<motion.div
							key={service.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: index * 0.2 }}
							viewport={{ once: true }}
							className="bg-white p-8 shadow-lg hover:shadow-xl transition-all group"
						>
							<div className="flex flex-col h-full">
								<div className="mb-6">
									<div className="inline-block p-3 bg-gray-50 group-hover:bg-gray-100 transition-colors mb-4">
										<service.icon className="w-8 h-8 text-gray-900" />
									</div>
									<h3 className="text-2xl font-semibold text-gray-900 mb-3">
										{service.title}
									</h3>
									<p className="text-gray-600 mb-6">
										{service.description}
									</p>
								</div>

								<div className="space-y-4 mb-8 flex-grow">
									{service.features.map((feature) => (
										<div
											key={feature}
											className="flex items-start space-x-3"
										>
											<CheckIcon className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" />
											<span className="text-gray-600">{feature}</span>
										</div>
									))}
								</div>

								<Link
									to={`/services/${service.link
										.toLowerCase()
										.replace(/\s+/g, '-')}`}
									className="inline-block text-black border-2 border-black px-6 py-3 text-center hover:bg-gray-800 hover:text-white transition-all duration-300"
								>
									Learn More
								</Link>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;
