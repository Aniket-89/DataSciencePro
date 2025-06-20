import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  ClockIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline';
import { GrainyGradient2 } from '../assets/assets';

// FAQ Data
const faqs = [
  {
    question: "What services do you offer?",
    answer: "we offer two core services: Market Research Reports and Data Analytics Solutions. Our research reports provide in-depth industry analysis, market forecasts, and competitor insights tailored to strategic goals, while our analytics services turn raw data into actionable intelligence through predictive modeling, market monitoring, and risk assessment. Together, these solutions help businesses make smarter, data-driven decisions across sectors."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary depending on scope and complexity. A typical data analytics project might take 1-3 weeks, while more complex machine learning solutions could take 3-6 months. We'll provide detailed timelines during our initial consultation."
  },
  {
    question: "Do you offer ongoing support?",
    answer: "Yes, we provide continuous support and maintenance for all our solutions. We offer different support tiers based on your needs, including 24/7 support for enterprise clients."
  },
  {
    question: "What industries do you work with?",
    answer: "We work across various industries including healthcare, finance, retail, manufacturing, market reasearch and technology. Our solutions are adaptable to any industry that wants to leverage data for better decision-making."
  }
];

const ContactPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Replace this URL with your actual Google Form submission URL
  const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse';
  
  // Replace these with your actual Google Form field names
  const GOOGLE_FORM_FIELDS = {
    name: 'entry.123456789',      // Replace with actual entry ID
    email: 'entry.234567890',     // Replace with actual entry ID
    company: 'entry.345678901',   // Replace with actual entry ID
    service: 'entry.456789012',   // Replace with actual entry ID
    message: 'entry.567890123'    // Replace with actual entry ID
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Create FormData object
      const formDataObj = new FormData();
      
      // Add form fields to FormData with Google Form field names
      formDataObj.append(GOOGLE_FORM_FIELDS.name, formData.name);
      formDataObj.append(GOOGLE_FORM_FIELDS.email, formData.email);
      formDataObj.append(GOOGLE_FORM_FIELDS.company, formData.company);
      formDataObj.append(GOOGLE_FORM_FIELDS.service, formData.service);
      formDataObj.append(GOOGLE_FORM_FIELDS.message, formData.message);

      // Submit to Google Form
      await fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        mode: 'no-cors', // Required for Google Forms
        body: formDataObj
      });

      // Clear form
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: ''
      });
      
      setSubmitStatus('success');
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20">
        <img src={GrainyGradient2} alt="" className='w-full h-fit bg-cover absolute top-0 right-0 -z-50 opacity-85'/>

        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-light text-[#183B4E] mb-6"
            >
              Get in Touch
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-50 leading-relaxed"
            >
              Let's discuss how we can help transform your business with data science
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Information and Form Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-medium text-[#183B4E] mb-8">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPinIcon className="h-6 w-6 text-[#183B4E] mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-normal text-[#183B4E] mb-1">Office Location</h3>
                      <p className="text-gray-600">
                        100 Innovation Drive<br />
                        Tech District<br />
                        San Francisco, CA 94105
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <PhoneIcon className="h-6 w-6 text-[#183B4E] mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-normal text-[#183B4E] mb-1">Phone</h3>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <EnvelopeIcon className="h-6 w-6 text-[#183B4E] mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-normal text-[#183B4E] mb-1">Email</h3>
                      <p className="text-gray-600">contact@databitzy.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <ClockIcon className="h-6 w-6 text-[#183B4E] mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-normal text-[#183B4E] mb-1">Business Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-medium text-[#183B4E] mb-6">Follow Us</h2>
                <div className="flex space-x-4">
                  {['LinkedIn', 'Twitter', 'GitHub'].map((social) => (
                    <button
                      key={social}
                      className="px-4 py-2 bg-gray-900 text-gray-50 hover:bg-gray-100 hover:text-[#183B4E] cursor-pointer transition-colors"
                    >
                      {social}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8">
              <h2 className="text-3xl font-light text-[#183B4E] mb-8">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-mono text-gray-600 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-2 bg-white text-[#183B4E] border border-gray-200 focus:outline-none focus:border-[#183B4E]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-mono text-gray-600 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-2 bg-white text-[#183B4E] border border-gray-200 focus:outline-none focus:border-[#183B4E]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-mono text-gray-600 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full p-2 bg-white text-[#183B4E] border border-gray-200 focus:outline-none focus:border-[#183B4E]"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-mono text-gray-600 mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full p-2 bg-white text-[#183B4E] border border-gray-200 focus:outline-none focus:border-[#183B4E]"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="data-analytics">Data Analytics</option>
                    <option value="machine-learning">Machine Learning</option>
                    <option value="business-intelligence">Business Intelligence</option>
                    <option value="consulting">Consulting</option>
                    <option value="syndicated-market-research ">Syndicated Market Research </option>
                    <option value="customise-market-research">Customise Market Research</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-mono text-gray-600 mb-2">
                    Please provide a brief summary of your requirements or goals.
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full p-2 bg-white text-[#183B4E] border border-gray-200 focus:outline-none focus:border-[#183B4E]"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-2 px-4 transition-colors ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-[#27548A] cursor-pointer hover:bg-gray-800'
                  } text-white`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="mt-4 p-4 bg-gray-100 text-[#183B4E]">
                    Thank you for your message. We'll get back to you soon.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="mt-4 p-4 bg-gray-100 text-[#183B4E]">
                    There was an error sending your message. Please try again.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-light text-white mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white"
                >
                  <button
                    className="w-full flex items-center justify-between p-6 text-left"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <span className="text-lg font-medium text-[#183B4E]">{faq.question}</span>
                    <ChevronDownIcon 
                      className={`h-5 w-5 text-gray-600 transform transition-transform ${
                        openFaq === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 font-normal">{faq.answer}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
