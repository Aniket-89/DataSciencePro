import React from 'react'
import { motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';



const Faq = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const faqs = [

        {
            question: "Can I request modifications or customizations to a report?",
            answer: "Absolutely, we prioritize delivering insights that precisely match your business needs. Customization Scope: You can modify or expand the report's coverage up to 10% of the original cost to align with your specific objectives.How to Request:Fill out our 'Customization Request' form (available with every report).Call our team directly will connect. We ensure tailored adjustments while maintaining the report's core integrity- so you get maximum value with no compromise on quality."
        },
        {
            question: "Can I buy specific sections of a report instead of the full document?",
            answer: "Yes! We offer a sections to ensure you only pay for the insights you need.How it works:1. Contact our team via phone, email, or live chat2. Specify which sections you require3. Receive a customized quote and delivery timelineOur specialists will help you select the most relevant data chapters, charts, or analysis segments for your business objectives.Benefits:Cost-effective solution Faster access to key findings"
        },
        {
            question: "Understanding Report License Types.",
            answer: "We offer flexible licensing options to suit different organizational needs: 1. Single-User License Access: Limited to one individual (strictly non-transferable) 2. Multi-User License Access: Shared with up to 5 team members within the same organization 3. Corporate License Access: Organization-wide distribution with unlimited internal users",
        },
        
    ];

        
  return (
    <section className="py-32 bg-[#F3F3E0]">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl font-semibold text-[#183B4E] mb-12 text-center">
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
  )
}

export default Faq