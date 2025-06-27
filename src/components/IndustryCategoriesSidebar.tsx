import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import { industryReports } from '../data/industryReports';

// Create a list of industries from the top-level keys of industryReports
const industryList = Object.entries(industryReports).map(([slug, reports]) => ({
  slug,
  industry: reports[0]?.industry || slug,
}));

const IndustryCategoriesSidebar = () => {
  const { slug } = useParams();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile: Collapsible Button */}
      <div className="md:hidden px-4 pt-4">
        <button
          className="w-full bg-[#27548A] text-white font-semibold py-2 px-4 rounded-none flex items-center justify-between focus:outline-none"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="industry-sidebar-mobile"
        >
          Industries
          <span className={`ml-2 transition-transform ${open ? 'rotate-180' : ''}`}>▼</span>
        </button>
        {open && (
          <div id="industry-sidebar-mobile" className="bg-white border border-[#DDE6F2] rounded-none shadow-sm mt-2 p-4">
            <ul className="space-y-2">
              {industryList.map((item) => (
                <li key={item.slug}>
                  <Link
                    to={`/reports/${item.slug}`}
                    className={`block px-3 py-2 rounded-none text-sm transition-colors
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
      {/* Desktop: Sidebar */}
      <aside className="hidden md:block py-8 px-4">
        <div className="sticky top-24 bg-white border border-[#DDE6F2] rounded-none shadow-sm p-4">
          <h3 className="text-lg font-semibold text-[#27548A] mb-4">All Industries</h3>
          <ul className="space-y-2">
            {industryList.map((item) => (
              <li key={item.slug}>
                <Link
                  to={`/reports/${item.slug}`}
                  className={`block px-3 py-2 rounded-none text-sm transition-colors
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