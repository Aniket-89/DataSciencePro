import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const About = () => {
	return (
		<section id="about" className="py-20 bg-white">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center max-w-5xl mx-auto mb-16"
				>
					<h2 className="text-4xl font-semibold text-[#183B4E] mb-6">
						Who We Are
					</h2>
					<p className="text-lg text-justify text-gray-600 leading-relaxed mb-8">
						DATABITZY is a powerful service-driven platform that delivers data-powered insights, market intelligence, 
						and tailored business solutions. We help organizations of all sizes—from agile startups to established enterprises—make smarter, 
						faster, and more confident decisions in a rapidly evolving marketplace. 
						<br />
						<br />
						Our platform offers a wide range of services including 
						custom market research reports, competitive analysis, customer behavior insights, business forecasting, and end-to-end data solutions. 
						At DATABITZY, we transform data into direction—empowering your business to lead with clarity and precision.
					</p>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.3 }}
						viewport={{ once: true }}
					>
						<Link
							to="/about"
							className="inline-flex px-8 py-3 bg-[#183B4E] text-white hover:bg-gray-800 transition-colors"
						>
							Learn More About Us →
						</Link>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default About;
