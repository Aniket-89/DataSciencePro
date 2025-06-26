import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { industryReports } from '../data/industryReports';
import CTA from '../components/CTA';

const TABS = [
  { key: 'description', label: 'Report Description' },
  { key: 'scope', label: 'Report Scope' },
  { key: 'methodology', label: 'Methodology' },
  { key: 'region', label: 'Major Region' },
];

const industryList = Object.entries(industryReports).map(([slug, report]) => ({ slug, industry: report.industry }));

const IndustryPage = () => {
  const { slug } = useParams();
  const report = industryReports[slug as keyof typeof industryReports];
  const [activeTab, setActiveTab] = useState('description');

  if (!report) return <div className="p-8 text-center text-lg">Industry report not found.</div>;

  return (
    <div className="w-full bg-white text-gray-900 py-12">

      <div className="relative mb-8 w-full h-72 rounded-none bg-gradient-to-r from-[#E9F1FA] to-[#FDF6E3] border border-[#DDE6F2] px-6 py-5 flex items-center gap-4">
        <div className="flex mx-auto items-center justify-between gap-4">

            <span className="text-3xl font-bold text-[#27548A]">{report.industry}</span>
            <span className="ml-auto text-sm text-[#DDA853] font-medium uppercase tracking-wider absolute bottom-5 right-10">Industry Report</span>
        </div>
      </div>
            <div className="flex gap-8 p-8 mx-auto my-12 max-w-7xl">
      {/* Sidebar */}
      <aside className="hidden md:block w-64 flex-shrink-0">
        <div className="sticky top-24 bg-white border border-[#DDE6F2] rounded-none shadow-sm p-4">
          <h3 className="text-lg font-semibold text-[#27548A] mb-4">All Industries</h3>
          <ul className="space-y-2">
            {industryList.map((item) => (
              <li key={item.slug}>
                <Link
                  to={`/industry/${item.slug}`}
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
      {/* Main Content */}
      <div className="flex-1 min-w-0 p-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold text-[#27548A] mb-2">{report.title}</h1>
          <div className="flex flex-wrap gap-4 mb-8 mt-4">
            {TABS.map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-5 py-2 text-base font-medium border-b-2 transition-all duration-200 focus:outline-none
                    ${activeTab === tab.key
                        ? 'border-[#27548A] text-[#27548A] bg-gray-50 shadow-sm'
                        : 'border-transparent text-gray-500 hover:text-[#27548A] hover:bg-gray-50'}`}
                        style={{ borderRadius: 0 }}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="bg-[#F3F3E0] p-6 lg:p-12 min-h-[400px] rounded-none shadow-sm mb-8">

          {/* Report Description */}
          {activeTab === 'description' && (
              <div className="animate-fadein">
              <p className="mb-6 text-gray-700 text-lg">{report.overview}</p>
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Executive Summary</h2>
                <p>{report.executiveSummary}</p>
              </section>
            </div>
          )}
          {/* Report Scope */}
          {activeTab === 'scope' && (
            <div className="animate-fadein">
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Drivers, Restraints, Opportunities</h2>
                <ul className="list-disc ml-6">
                  <li><strong>Drivers:</strong> {report.droc.drivers}</li>
                  <li><strong>Restraints:</strong> {report.droc.restraints}</li>
                  <li><strong>Opportunities:</strong> {report.droc.opportunities}</li>
                  <li><strong>Challenges:</strong> {report.droc.challenges}</li>

                </ul>
              </section>
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Segmentation</h2>
                <ul className="list-disc ml-6">
                  <li><strong>Type:</strong> {report.segmentation.type.join(', ')}</li>
                  <li><strong>Sensor:</strong> {report.segmentation.sensor.join(', ')}</li>
                  <li><strong>Application:</strong> {report.segmentation.application.join(', ')}</li>
                </ul>
              </section>
            </div>
          )}
          {/* Methodology */}
          {activeTab === 'methodology' && (
              <div className="animate-fadein">
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Methodology</h2>
                <p className="text-gray-700">Our research methodology combines primary interviews, secondary data, and proprietary analytics to ensure accuracy and actionable insights.</p>
              </section>
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Key Players</h2>
                <ul className="list-disc ml-6">
                  {report.players.map((p, i) => <li key={i}>{p}</li>)}
                </ul>
              </section>
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Recent Developments</h2>
                <ul className="list-disc ml-6">
                  {report.recentDevelopments.map((dev, i) => <li key={i}>{dev}</li>)}
                </ul>
              </section>
            </div>
          )}
          {/* Major Region */}
          {activeTab === 'region' && (
              <div className="animate-fadein">
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Regional Outlook</h2>
                <ul className="list-disc ml-6">
                    {Object.entries(report.regionalOutlook).map(([region, outlook]) => (
                        <li key={region}>
                            <strong>{region}:</strong> {outlook}
                        </li>
                    ))}
                </ul>
              </section>
            </div>
          )}
          </div>
        </div>
      </div>
    </div>
    <CTA />
      {/* </div> */}
</div>
  );
};

export default IndustryPage;

// Add this to your CSS for fade-in effect:
// .animate-fadein { animation: fadein 0.3s; }
// @keyframes fadein { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: none; } }
