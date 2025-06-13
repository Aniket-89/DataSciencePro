import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/20/solid';

const testimonials = [
	{
		name: 'Sarah Johnson',
		role: 'CTO, TechCorp',
		content:
			'DataSciencePro transformed our business with their machine learning solutions. The insights we gained were invaluable.',
		image:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&w=128&h=128&q=80',
	},
	{
		name: 'Michael Chen',
		role: 'Data Director, FinanceHub',
		content:
			'Their analytical expertise and professional approach made our data transformation journey smooth and successful.',
		image:
			'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&w=128&h=128&q=80',
	},
	{
		name: 'Emily Roberts',
		role: 'CEO, HealthTech',
		content:
			'The insights provided by DataSciencePro helped us improve patient outcomes and optimize our operations.',
		image:
			'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&w=128&h=128&q=80',
	},
];

const Testimonials = () => {
	return (
		<section id="testimonials" className="py-32 bg-gray-50">
			<div className="container mx-auto px-4 w-full">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-4xl font-semibold text-center text-gray-900 mb-8 md:mb-12"
				>
					What Our Clients Say
				</motion.h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-7xl mx-auto">
					{testimonials.map((testimonial, index) => (
						<motion.div
							key={testimonial.name}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: index * 0.2 }}
							viewport={{ once: true }}
							className="w-full bg-white p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow"
						>
							<div className="flex items-start space-x-4">
								<img
									src={testimonial.image}
									alt={testimonial.name}
									className="w-12 h-12 rounded-full mr-4 flex-shrink-0"
								/>
								<div className="min-w-0 flex-1">
									<h3 className="text-lg font-semibold text-gray-900 truncate">
										{testimonial.name}
									</h3>
									<p className="text-gray-600 text-sm">{testimonial.role}</p>
								</div>
							</div>

							<div className="flex space-x-1 mt-3 mb-3 md:mt-4 md:mb-4">
								{[...Array(5)].map((_, i) => (
									<StarIcon key={i} className="w-4 h-4 md:w-5 md:h-5 text-gray-900" />
								))}
							</div>

							<p className="text-gray-600 italic text-sm md:text-base">
								&ldquo;{testimonial.content}&rdquo;
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
