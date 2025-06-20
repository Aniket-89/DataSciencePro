import React from 'react';
import { GrainyGradient2 } from '../assets/assets';
import CTA from '../components/CTA';

const testimonials = [
  {
    name: 'Jon Ben',
    role: 'Director of Strategy',
    content:
      "Your team’s analysis pinpointed untapped niches in the Latin American SaaS market, directly influencing our expansion roadmap.",
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&w=128&h=128&q=80',
  },
  {
    name: 'Gregg',
    role: 'Market Access Director, Global Pharma Firm',
    content:
      "Our drug pricing forecast for emerging markets was spot-on. It enabled us to negotiate better distribution partnerships and avoid a $2M pricing misstep in Southeast Asia.",
    image:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&w=128&h=128&q=80',
  },
  {
    name: 'Tomer',
    role: 'CMO, Fashion Retail Chain',
    content:
      "We used your consumer sentiment data to redesign our loyalty program. Result? A 50% boost in repeat purchases among Gen Z shoppers—exactly as predicted.",
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&w=128&h=128&q=80',
  },
  {
    name: 'Alex De Sousa',
    role: 'COO, Digital Payments Platform',
    content:
      "The fintech regulatory risk assessment saved us 9 months of compliance headaches. Your team flagged state-level licensing hurdles we hadn’t even considered.",
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&w=128&h=128&q=80',
  },
];

const TestimonialsPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="mb-12">
        <div className="mx-auto text-center mb-16 h-96 w-full flex flex-col justify-center items-center relative overflow-hidden">
            <img src={GrainyGradient2} alt="" className='absolute top-0 left-0 object-cover -z-10'/>
          <h1 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h1>
          <p className="text-lg text-gray-900">
            Here’s what business leaders across industries are saying about our work.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <p className="text-gray-700 text-base mb-6 italic">“{t.content}”</p>
              <div className="flex items-center gap-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border"
                />
                <div>
                  <p className="text-sm font-semibold text-[#27548A]">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Stats Section */}
      <section className="bg-[#FDF6EC] py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Why Businesses Trust Us</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-xl font-semibold text-[#27548A]">
            <div>
              <p className="text-3xl">90%</p>
              <p className="text-sm text-gray-700">Primary Research-Driven</p>
            </div>
            <div>
              <p className="text-3xl">200+</p>
              <p className="text-sm text-gray-700">Industries Covered</p>
            </div>
            <div>
              <p className="text-3xl">500K+</p>
              <p className="text-sm text-gray-700">Expert Panel Members</p>
            </div>
            <div>
              <p className="text-3xl">30%</p>
              <p className="text-sm text-gray-700">Repeat Clients Annually</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-lg text-gray-700 mb-6">Trusted by Teams Across the Globe</h2>
          <div className="flex justify-center gap-8 flex-wrap items-center">
            <img src="/logos/client1.svg" alt="Client 1" className="h-10 grayscale opacity-80 hover:opacity-100" />
            <img src="/logos/client2.svg" alt="Client 2" className="h-10 grayscale opacity-80 hover:opacity-100" />
            <img src="/logos/client3.svg" alt="Client 3" className="h-10 grayscale opacity-80 hover:opacity-100" />
            {/* Add or remove as needed */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="bg-[#27548A] text-white py-16 text-center px-6">
        <h3 className="text-2xl font-bold mb-4">Want to become our next success story?</h3>
        <p className="mb-6 text-white/80">Let’s create a data-driven strategy that works for your business.</p>
        <a
          href="/contact"
          className="inline-block bg-white text-[#27548A] font-medium px-6 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          📞 Book a Free Consultation
        </a>
      </section> */}
      <CTA />
    </>
  );
};

export default TestimonialsPage;
