import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/outline';
import { GrainyGradient3 } from '../assets/assets';


export default function DataAnalysisPage() {
	return (
		<div className="pt-16">
			{/* Hero Section */}
			<section className="relative overflow-hidden py-20">
				<img
					src={GrainyGradient3}
					alt=""
					className="absolute bottom-0 right-0 -z-10 object-cover"
				/>
				<div className="container mx-auto px-4">
					<div className="max-w-3xl mx-auto text-center">
						<motion.h1
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							className="text-4xl md:text-5xl font-medium text-white mb-6"
						>
							Data Analytics & Insights
						</motion.h1>
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.2 }}
							className="text-xl text-gray-50 leading-relaxed"
						>
							Transform your raw data into actionable insights with our comprehensive
							analytics solutions
						</motion.p>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="py-32 bg-white">
				<div className="container mx-auto px-4">
					<div className="max-w-3xl mx-auto text-center mb-16">
						<h2 className="text-3xl font-light text-gray-900 mb-4">
							Our Analytics Approach
						</h2>
						<p className="text-lg text-gray-600">
							We combine advanced statistical methods with cutting-edge machine
							learning to deliver deep insights
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
						{[
							{
								title: 'Descriptive Analytics',
								description:
									'Understand what happened in your business through comprehensive data analysis and visualization.',
								features: [
									'Historical data analysis',
									'Pattern identification',
									'Custom dashboards',
									'KPI tracking',
								],
							},
							{
								title: 'Predictive Analytics',
								description:
									'Forecast future trends and behaviors using advanced statistical modeling and machine learning.',
								features: [
									'Trend forecasting',
									'Risk assessment',
									'Market analysis',
									'Customer behavior prediction',
								],
							},
							{
								title: 'Prescriptive Analytics',
								description:
									'Get actionable recommendations to optimize your business decisions and strategies.',
								features: [
									'Optimization models',
									'Decision support',
									'Strategy recommendations',
									'ROI analysis',
								],
							},
						].map((feature, index) => (
							<motion.div
								key={feature.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.2 }}
								viewport={{ once: true }}
								className="bg-gray-50 p-8"
							>
								<h3 className="text-xl font-light text-gray-900 mb-4">
									{feature.title}
								</h3>
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

			{/* What We Offer Section */}
			<section className="py-24 bg-gray-50">
				<div className="container mx-auto px-4">
					<div className="max-w-2xl mx-auto text-center mb-10">
						<h2 className="text-3xl font-light text-gray-900 mb-4">What We Offer</h2>
					</div>
					<div className="max-w-2xl mx-auto">
						<ul className="space-y-6 text-lg text-gray-700">
							<li className="flex items-start">
								<CheckIcon className="h-6 w-6 text-purple-600 mr-3 flex-shrink-0" />
								<span>End-to-end data analytics solutions for business insights</span>
							</li>
							<li className="flex items-start">
								<CheckIcon className="h-6 w-6 text-purple-600 mr-3 flex-shrink-0" />
								<span>
									Building smart machine learning models to solve real-world problems
								</span>
							</li>
							<li className="flex items-start">
								<CheckIcon className="h-6 w-6 text-purple-600 mr-3 flex-shrink-0" />
								<span>
									Creating automated workflows and dashboards using tools like Python,
									KNIME, and Power BI
								</span>
							</li>
						</ul>
					</div>
				</div>
			</section>

			{/* Testimonials Section */}
			<section className="py-24 bg-white">
				<div className="container mx-auto px-4">
					<div className="max-w-2xl mx-auto text-center mb-10">
						<h2 className="text-3xl font-light text-gray-900 mb-4">
							💬 Testimonials
						</h2>
					</div>
					<div className="max-w-2xl mx-auto space-y-10">
						<div className="bg-gray-50 p-8 rounded shadow-sm">
							<div className="text-2xl mb-4">
								⭐ “His dashboards beautifully distill complex data.”
							</div>
							<div className="text-gray-700 text-right font-mono">
								— Atmaram P., Power BI Dashboard{' '}
								<span className="text-gray-400">(Sep 2023)</span>
							</div>
						</div>
						<div className="bg-gray-50 p-8 rounded shadow-sm">
							<div className="text-2xl mb-4">
								⭐ “Innovative thinking and proactive communication made our ML
								project seamless.”
							</div>
							<div className="text-gray-700 text-right font-mono">
								— Rohit Singh R., ML Algorithms{' '}
								<span className="text-gray-400">(Sep 2023)</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Case Studies Section */}
			<section className="py-32 bg-gray-50">
				<div className="container mx-auto px-4">
					<div className="max-w-3xl mx-auto text-center mb-16">
						<h2 className="text-3xl font-light text-gray-900 mb-4">
							📊 Real-World Case Study
						</h2>
						<h3 className="text-2xl font-medium text-gray-800 mb-2">
							Predicting Customer Churn for ABC Telecom
						</h3>
					</div>
					<div className="max-w-3xl mx-auto bg-white p-10 rounded shadow-sm">
						<div className="mb-8">
							<div className="flex items-center mb-2">
								<span className="text-xl mr-2">🧠</span>
								<span className="text-xl font-semibold text-gray-900">
									Objective
								</span>
							</div>
							<p className="text-gray-700 text-lg ml-7">
								Develop a machine learning model to predict churn and reduce
								customer attrition.
							</p>
						</div>
						<div className="mb-8">
							<div className="flex items-center mb-2">
								<span className="text-xl mr-2">🔧</span>
								<span className="text-xl font-semibold text-gray-900">
									Approach:
								</span>
							</div>
							<ul className="list-disc ml-12 text-gray-700 text-lg space-y-2">
								<li>
									<span className="font-semibold">Data Preprocessing:</span> Cleaned
									and analyzed customer demographics & usage.
								</li>
								<li>
									<span className="font-semibold">Feature Engineering:</span> Tenure,
									contract type, feedback scores.
								</li>
								<li>
									<span className="font-semibold">Modeling:</span> Logistic
									Regression, Random Forest, and Gradient Boosting with hyperparameter
									tuning.
								</li>
								<li>
									<span className="font-semibold">Evaluation:</span> Achieved 85%
									accuracy, 78% precision, and 82% recall.
								</li>
							</ul>
						</div>
						<div>
							<div className="flex items-center mb-2">
								<span className="text-xl mr-2">🎯</span>
								<span className="text-xl font-semibold text-gray-900">Impact</span>
							</div>
							<p className="text-gray-700 text-lg ml-7">
								Churn reduced by 15% in 6 months → Significant revenue retention.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Data Automation Tool Section */}
			<section className="py-24 bg-white">
				<div className="container mx-auto px-4">
					<div className="max-w-3xl mx-auto text-center mb-10">
						<h2 className="text-3xl font-light text-gray-900 mb-4">
							⚙️ Data Automation Tool: Pull Algorithm
						</h2>
					</div>
					<div className="max-w-3xl mx-auto bg-gray-50 p-10 rounded shadow-sm text-lg text-gray-700">
						<p className="mb-4">
							Developed a daily automation tool to pull and analyze Open Interest (OI)
							data for stock markets directly into Excel after market hours.
						</p>
						<p>
							This tool is now used across the team for faster strategy execution
							based on real-time OI-price correlations.
						</p>
					</div>
				</div>
			</section>

			{/* Tools & Technologies Section */}
			<section className="py-24 bg-gray-50">
				<div className="container mx-auto px-4">
					<div className="max-w-3xl mx-auto text-center mb-10">
						<h2 className="text-3xl font-light text-gray-900 mb-4">
							🛠️ Tools & Technologies
						</h2>
					</div>
					<div className="max-w-3xl mx-auto text-lg text-gray-700 space-y-6">
						<div>
							<span className="font-semibold text-gray-900">Languages/Frameworks:</span>{' '}
							Python, R, Flask, Django, TensorFlow, PyTorch, fastai
						</div>
						<div>
							<span className="font-semibold text-gray-900">ML Techniques:</span> CNN,
							DNN, FCRN, NLP, Clustering, Chatbots
						</div>
						<div>
							<span className="font-semibold text-gray-900">Visualization:</span> Power
							BI, Excel, Matplotlib, Seaborn
						</div>
						<div>
							<span className="font-semibold text-gray-900">Libraries:</span>
							Scikit-learn, MXNet, TfLite, Tesseract
						</div>
						<div>
							<span className="font-semibold text-gray-900">Specializations:</span> Image
							& Speech Processing, Model Deployment, Automation Tools
						</div>
					</div>
				</div>
			</section>

			{/* Sample Freelance Projects Section */}
			<section className="py-24 bg-white">
				<div className="container mx-auto px-4">
					<div className="max-w-3xl mx-auto text-center mb-10">
						<h2 className="text-3xl font-light text-gray-900 mb-4">
							Sample Freelance Projects
						</h2>
					</div>
					<div className="max-w-3xl mx-auto space-y-10 text-lg text-gray-700">
						<div className="bg-gray-50 p-8 rounded shadow-sm">
							<div className="flex items-center mb-2">
								<span className="text-2xl mr-2">🧠</span>
								<span className="font-semibold">
									Stock Market Prediction with KNIME
								</span>
							</div>
							<div className="mb-2">
								Predicted 2021 opening price using ML models like LSTM & tree-based
								algorithms.
							</div>
							<a href="#" className="text-purple-700 underline">
								[View project]
							</a>
						</div>
						<div className="bg-gray-50 p-8 rounded shadow-sm">
							<div className="flex items-center mb-2">
								<span className="text-2xl mr-2">🏙️</span>
								<span className="font-semibold">Transportation Network Analysis</span>
							</div>
							<div className="mb-2">
								Merged and analyzed traffic CSVs using Python to generate pie/bar
								charts.
							</div>
							<a href="#" className="text-purple-700 underline">
								[View data]
							</a>
						</div>
						<div className="bg-gray-50 p-8 rounded shadow-sm">
							<div className="flex items-center mb-2">
								<span className="text-2xl mr-2">📈</span>
								<span className="font-semibold">
									Marketing Campaign Optimization for P&G
								</span>
							</div>
							<div className="mb-2">
								Identified profitable stores using geospatial ML modeling. Built a Power
								BI dashboard.
							</div>
							<a href="#" className="text-purple-700 underline">
								[View solution]
							</a>
						</div>
						<div className="bg-gray-50 p-8 rounded shadow-sm">
							<div className="flex items-center mb-2">
								<span className="text-2xl mr-2">🌍</span>
								<span className="font-semibold">
									Mode of Transport Prediction using GPS logs
								</span>
							</div>
							<div className="mb-2">
								Used GeoLife dataset with ML model based on 10-minute interval GPS
								data.
							</div>
							<a href="#" className="text-purple-700 underline">
								[View notebook]
							</a>
						</div>
						<div className="bg-gray-50 p-8 rounded shadow-sm">
							<div className="flex items-center mb-2">
								<span className="text-2xl mr-2">🧪</span>
								<span className="font-semibold">
									Adversarial ML for NLP & Image Processing
								</span>
							</div>
							<div className="mb-2">
								Presentation crafted for senior executives from 3 core research papers.
							</div>
							<a href="#" className="text-purple-700 underline">
								[Presentation]
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* Certification & Experience Section */}
			<section className="py-24 bg-gray-50">
				<div className="container mx-auto px-4">
					<div className="max-w-3xl mx-auto mb-16">
						<h2 className="text-3xl font-light text-gray-900 mb-4">📚 Certification</h2>
						<div className="bg-white p-8 rounded shadow-sm text-lg text-gray-700 mb-6">
							<div className="font-semibold text-gray-900 mb-2">
								Data Science Professional Training
							</div>
							<div className="text-gray-500 mb-4">(Dec 2018 – Apr 2019)</div>
							<div className="mb-2 font-semibold">Topics covered:</div>
							<ul className="list-disc ml-8 space-y-1">
								<li>Data Cleaning & Exploration</li>
								<li>Predictive Modeling</li>
								<li>Real-life dataset projects reviewed by industry experts</li>
							</ul>
						</div>
						<h2 className="text-3xl font-light text-gray-900 mb-4">💼 Experience</h2>
						<div className="bg-white p-8 rounded shadow-sm text-lg text-gray-700">
							<div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-semibold mb-2">
								<div>Role</div>
								<div>Company</div>
								<div>Duration</div>
							</div>
							<div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-gray-200 py-2">
								<div>Data Analyst / BI Developer</div>
								<div>HDFC</div>
								<div>June 2023 – Present</div>
							</div>
							<div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-gray-200 py-2">
								<div>Freelance Data Scientist</div>
								<div>Afcodex Pvt Ltd</div>
								<div>Aug 2020 – June 2023</div>
							</div>
							<div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-gray-200 py-2">
								<div>Freelancer</div>
								<div>Demansold Tech Pvt Ltd</div>
								<div>July 2022 – Aug 2022</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Summary Block Section */}
			<section className="py-16 bg-gray-900">
				<div className="container mx-auto px-4">
					<div className="max-w-3xl mx-auto">
						<div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
							<div className="flex flex-col items-center">
								<span className="text-3xl mb-2">🧠</span>
								<span className="text-white text-xl font-semibold">
									30+ freelance projects
								</span>
							</div>
							<div className="flex flex-col items-center">
								<span className="text-3xl mb-2">💼</span>
								<span className="text-white text-xl font-semibold">
									5+ years of experience
								</span>
							</div>
							<div className="flex flex-col items-center">
								<span className="text-3xl mb-2">📍</span>
								<span className="text-white text-xl font-semibold">
									Expertise: Machine Learning, BI Dashboards, Data Pipelines
								</span>
							</div>
							<div className="flex flex-col items-center">
								<span className="text-3xl mb-2">🔗</span>
								<span className="text-white text-xl font-semibold">
									10+ verified testimonials
								</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-32 bg-gray-50">
				<div className="container mx-auto px-4">
					<div className="max-w-3xl mx-auto text-center">
						<h2 className="text-3xl font-light text-gray-900 mb-6">
							Ready to Transform Your Data?
						</h2>
						<p className="text-lg text-gray-600 mb-8">
							Schedule a consultation with our data analytics experts and discover how
							we can help you make better decisions with data.
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
