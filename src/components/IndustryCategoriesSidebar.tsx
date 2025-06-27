import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const INDUSTRIES = [
  { slug: 'automotive', industry: 'Automotive' },
  { slug: 'semiconductors', industry: 'Semiconductors & Electronics' },
  { slug: 'agriculture', industry: 'Agriculture' },
  { slug: 'aerospace-defense', industry: 'Aerospace & Defense' },
  { slug: 'consumer-retail', industry: 'Consumer & Retail' },
  { slug: 'construction', industry: 'Construction' },
  { slug: 'food-nutrition', industry: 'Food, Beverages & Nutrition' },
  { slug: 'energy-power', industry: 'Energy & Power' },
  { slug: 'ict', industry: 'ICT' },
  { slug: 'packaging-transport', industry: 'Packaging & Transport' },
  { slug: 'industrial-automation', industry: 'Industrial Automation' },
  { slug: 'bfsi', industry: 'BFSI' },
];

const IndustryCategoriesSidebar = () => {
  const { slug } = useParams();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile View Toggle */}
      <div className="md:hidden px-4 pt-4">
        <button
          className="w-full bg-[#27548A] text-white font-semibold py-2 px-4 rounded-none flex items-center justify-between"
          onClick={() => setOpen(!open)}
        >
          Industries
          <span className={`ml-2 transition-transform ${open ? 'rotate-180' : ''}`}>▼</span>
        </button>
        {open && (
          <div className="mt-2 p-4 border border-[#DDE6F2] shadow-sm bg-white">
            <ul className="space-y-2">
              {INDUSTRIES.map((item) => (
                <li key={item.slug}>
                  <Link
                    to={`/industry/${item.slug}`}
                    className={`block px-3 py-2 text-sm transition-colors rounded-none
                      ${slug === item.slug
                        ? 'bg-[#E9F1FA] text-[#27548A] font-semibold'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-[#27548A]'}`}
                    onClick={() => setOpen(false)}
                  >
                    {item.industry}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden md:block py-8 px-4">
        <div className="sticky top-24 bg-white border border-[#DDE6F2] shadow-sm p-4">
          <h3 className="text-lg font-semibold text-[#27548A] mb-4">All Industries</h3>
          <ul className="space-y-2">
            {INDUSTRIES.map((item) => (
              <li key={item.slug}>
                <Link
                  to={`/industry/${item.slug}`}
                  className={`block px-3 py-2 text-sm transition-colors rounded-none
                    ${slug === item.slug
                      ? 'bg-[#E9F1FA] text-[#27548A] font-semibold'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-[#27548A]'}`}
                >
                  {item.industry}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default IndustryCategoriesSidebar;
