import { motion } from 'framer-motion';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const whyChooseUs = [
	{
		title: 'Expert Knowledge',
		description:
			'Experienced professional with deep expertise in data science and analytics',
	},
	{
		title: 'Tailored Solutions',
		description:
			'We create custom solutions that perfectly align with your business objectives',
	},
	{
		title: 'Advanced Technologies',
		description:
			'We leverage cutting-edge technologies and frameworks to deliver optimal results',
	},
	{
		title: 'Proven Track Record',
		description: 'Successfully delivered 150+ solutions across various industries',
	},
];

const About = () => {
	return (
		<section id="about" className="py-20 bg-white font-sans">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center max-w-5xl mx-auto mb-16"
				>
					<h2 className="text-4xl font-semibold text-gray-900 mb-6 font-sans">
						About Us
					</h2>
					<p className="text-lg text-gray-600 leading-relaxed">
						Passionate data scientist with 8+ years of experience in delivering data-driven solutions. We specialize in transforming raw data into actionable insights, helping businesses make informed decisions and drive growth. Our team is dedicated to leveraging the power of data science to solve complex problems and unlock new opportunities.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="relative"
					>
						<div className="relative h-[400px] w-full">
							<img
								src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
								alt="Team collaboration"
								className="object-cover w-full h-full"
							/>
							<div className="absolute inset-0 bg-gray-900/10"></div>
						</div>
						<div className="absolute -top-6 -left-6 w-64 h-64 bg-gray-100 -z-10"></div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
					>
						<h3 className="text-3xl font-normal text-gray-900 mb-8">
							Why Choose Us
						</h3>
						<div className="space-y-6">
							{whyChooseUs.map((item, index) => (
								<motion.div
									key={item.title}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									viewport={{ once: true }}
									className="flex items-start space-x-4"
								>
									<CheckCircleIcon className="w-6 h-6 text-gray-900 mt-1 flex-shrink-0" />
									<div>
										<h4 className="text-lg text-gray-900 font-sans">
											{item.title}
										</h4>
										<p className="text-gray-600 leading-relaxed">
											{item.description}
										</p>
									</div>
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default About;
