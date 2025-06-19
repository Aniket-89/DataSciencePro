import { motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const faqs: FAQItem[] = [
  {
    question: "Can I request modifications or customizations to a report?",
    answer: (
      <div className="space-y-4">
        <p>
          Absolutely, we prioritize delivering insights that precisely match your business needs. 
        </p>
        <div>
          <p className="font-medium mb-2">Customization Scope:</p>
          <p>You can modify or expand the report's coverage up to 10% of the original cost to align with your specific objectives.</p>
        </div>
        <div>
          <p className="font-medium mb-2">How to Request:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Fill out our 'Customization Request' form (available with every report)</li>
            <li>Call our team directly will connect</li>
          </ul>
          <p className="mt-3">
            We ensure tailored adjustments while maintaining the report's core integrity—so you get maximum value with no compromise on quality.
          </p>
        </div>
      </div>
    )
  },
  {
    question: "Can I buy specific sections of a report instead of the full document?",
    answer: (
      <div className="space-y-4">
        <p>
          Yes! We offer sections to ensure you only pay for the insights you need.
        </p>
        <div>
          <p className="font-medium mb-2">How it works:</p>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Contact our team via phone, email, or live chat</li>
            <li>Specify which sections you require</li>
            <li>Receive a customized quote and delivery timeline</li>
          </ol>
        </div>
        <p>
          Our specialists will help you select the most relevant data chapters, charts, or analysis segments for your business objectives.
        </p>
        <div>
          <p className="font-medium mb-2">Benefits:</p>
          <ul className="space-y-1">
            <li className="flex items-center">
              <span className="text-gray-900 mr-2">✔</span>
              Cost-effective solution
            </li>
            <li className="flex items-center">
              <span className="text-gray-900 mr-2">✔</span>
              Faster access to key findings
            </li>
          </ul>
        </div>
      </div>
    )
  },
  {
    question: "Understanding Report License Types",
    answer: (
      <div className="space-y-4">
        <p>
          We offer flexible licensing options to suit different organizational needs:
        </p>
        <div className="space-y-3">
          <div>
            <p className="font-medium">1. Single-User License</p>
            <p className="pl-4">Access: Limited to one individual (strictly non-transferable)</p>
          </div>
          <div>
            <p className="font-medium">2. Multi-User License</p>
            <p className="pl-4">Access: Shared with up to 5 team members within the same organization</p>
          </div>
          <div>
            <p className="font-medium">3. Corporate License</p>
            <p className="pl-4">Access: Organization-wide distribution with unlimited internal users</p>
          </div>
        </div>
        <div>
          <p className="font-medium mb-3">Key Differences</p>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left font-medium">License Type</th>
                  <th className="px-4 py-2 text-left font-medium">User Limit</th>
                  <th className="px-4 py-2 text-left font-medium">Sharing Rights</th>
                  <th className="px-4 py-2 text-left font-medium">Typical Users</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-2">Single</td>
                  <td className="px-4 py-2">1</td>
                  <td className="px-4 py-2">None</td>
                  <td className="px-4 py-2">Individuals</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Multi</td>
                  <td className="px-4 py-2">≤5</td>
                  <td className="px-4 py-2">Team sharing</td>
                  <td className="px-4 py-2">Small teams</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Corporate</td>
                  <td className="px-4 py-2">Unlimited</td>
                  <td className="px-4 py-2">Full organization</td>
                  <td className="px-4 py-2">Large enterprises</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  },
  {
    question: "Can I review samples before purchasing?",
    answer: (
      <div>
        <p>Yes, we provide:</p>
        <ul className="list-disc pl-5 mt-2 space-y-2">
          <li>Format previews showing our report structure</li>
          <li>Sample data excerpts demonstrating our analysis depth</li>
          <li>Methodology explanations for transparency</li>
        </ul>
      </div>
    )
  },
  {
    question: "What if I need report modifications or have special requests?",
    answer: (
      <div className="space-y-4">
        <p>We offer multiple support channels:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Customization request forms on each report page</li>
          <li>Direct analyst access via email/phone/chat</li>
          <li>10% complimentary customization on all reports</li>
        </ul>
      </div>
    )
  },
  {
    question: "How are pricing and timelines determined for tailored reports?",
    answer: (
      <div className="space-y-4">
        <p className="font-medium">Factors we consider:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Research complexity and data requirements</li>
          <li>Geographic coverage needed</li>
          <li>Deliverable formats (dashboards, datasets, etc.)</li>
        </ul>
        <p>Contact our team for a personalized quote</p>
      </div>
    )
  },
  {
    question: "How frequently do you refresh your reports?",
    answer: (
      <div className="space-y-4">
        <p>Update cycles vary by industry:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Fast-moving sectors: Quarterly updates</li>
          <li>Stable markets: Annual revisions</li>
        </ul>
      </div>
    )
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-light text-gray-900">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left py-6 border-b border-gray-200 focus:outline-none"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium text-gray-900">
                    {faq.question}
                  </h3>
                  <ChevronDownIcon
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </div>
                {openIndex === index && (
                  <div className="mt-4 text-gray-600 prose prose-sm max-w-none">
                    {faq.answer}
                  </div>
                )}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
