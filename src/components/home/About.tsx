import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const About = () => {
	return (
		<section id="about" className="py-20 bg-[#F3F3E0]">
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
					<p className="text-lg text-gray-600 leading-relaxed mb-8">
						Geoforesight Research and Marketing is a premier provider of strategic market intelligence and data-driven business solutions. 
						We help businesses—from emerging startups to global enterprises—make confident, evidence-based decisions in evolving markets.
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
