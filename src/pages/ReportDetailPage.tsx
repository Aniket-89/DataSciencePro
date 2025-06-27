import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { industryReports } from '../data/industryReports';

const TABS = [
  { key: 'description', label: 'Report Description' },
  { key: 'scope', label: 'Report Scope' },
  { key: 'methodology', label: 'Methodology' },
  { key: 'region', label: 'Major Region' },
];

const ReportDetailPage = () => {
  const { slug, reportId } = useParams();
  const report =
    industryReports[slug as keyof typeof industryReports]?.find(
      (r) => r.slug === reportId

    );
  const [activeTab, setActiveTab] = useState('description');

  if (!report) return <div className="p-8 text-center text-lg">Industry report not found.</div>;

  return (
    <div className="w-full bg-[#F3F3E0] text-gray-900">
      {/* <div className="relative my-8 w-full h-72 rounded-none bg-gradient-to-r from-[#E9F1FA] to-[#FDF6E3] border border-[#DDE6F2] px-6 py-5 flex items-center gap-4">
        <div className="flex mx-auto items-center justify-between gap-4">
            <span className="text-3xl font-bold text-[#27548A]">{report.title}</span>
            <span className="ml-auto text-sm text-[#DDA853] font-medium uppercase tracking-wider absolute bottom-5 right-10">Market Report</span>
        </div>
      </div> */}
      <div className="flex gap-8 lg:p-8 p-2 mx-auto md:my-12 my-4 max-w-7xl">
        {/* Main Content */}
        <div className="flex-1 min-w-0 lg:p-">
          <div className="max-w-5xl mx-auto"> 
            <h1 className="text-xl md:text-3xl font-bold text-[#27548A] mb-2">{report.title}</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 bg-[#27548A] mb-8 mt-4">
              {TABS.map(tab => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`p-2 text-base text-left text-sm font-medium border-b-2 transition-all duration-200 focus:outline-none
                      ${activeTab === tab.key
                          ? 'border-[#DDA853] text-[#DDA853] bg-gray-50 shadow-sm'
                          : 'border-transparent text-gray-50 hover:bg-blue-400'}`}
                          style={{ borderRadius: 0 }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="bg-white p-2 lg:p-12 min-h-[400px] rounded-none shadow-sm ">
            {/* Report Description */}
            {activeTab === 'description' && (
              <div className="animate-fadein">
                <p className="mb-6 text-gray-700 text-lg">{report.overview}</p>
                <section className="mb-8 rd">
                  <h2 className="text-xl font-semibold mb-2">Executive Summary</h2>
                  <p>{report.executiveSummary}</p>
                </section>
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
                    {Object.entries(report.segmentation).map(([key, value]) => (
                      <li key={key}>
                        <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {Array.isArray(value) ? value.join(', ') : value}
                      </li>
                    ))}
                  </ul>
                </section>
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
            {/* Report Scope */}
            {activeTab === 'scope' && (
              <div className="animate-fadein">
                <table className='border-2 lg:p-4' style={{ borderCollapse: 'collapse', width: '100%' }}  cellPadding="8" cellSpacing="0">
                  <thead>
                    <tr style={{ backgroundColor: 'yellow' }}>
                      <th>Attribute</th>
                      <th>Details</th>
                    </tr>
                  </thead>
                  <tbody style={{ backgroundColor: '#F3F3E0' }}>
                    <tr>
                      <td>Market Size (2025)</td>
                      <td>USD XX.X million</td>
                    </tr>
                    <tr>
                      <td>Revenue Forecast (2034)</td>
                      <td>USD XX.X million</td>
                    </tr>
                    <tr>
                      <td>Growth Rate</td>
                      <td>CAGR of XX.X% (2025–2034)</td>
                    </tr>
                    <tr>
                      <td>Base Year</td>
                      <td>2024</td>
                    </tr>
                    <tr>
                      <td>Historical Data</td>
                      <td>2020–2023</td>
                    </tr>
                    <tr>
                      <td>Forecast Period</td>
                      <td>2025–2034</td>
                    </tr>
                    <tr>
                      <td>Quantitative Units</td>
                      <td>Revenue in USD million/billion, CAGR</td>
                    </tr>
                    <tr>
                      <td>Report Coverage</td>
                      <td>Revenue forecast, trends, competitive analysis, and growth drivers</td>
                    </tr>
                    <tr>
                      <td>Segments Covered</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Regional Scope</td>
                      <td>North America, Europe, Asia-Pacific, Latin America, Middle East & Africa</td>
                    </tr>
                    <tr>
                      <td>Country Scope</td>
                      <td>U.S., Canada, Mexico, Germany, UK, France, China, India, Japan, South Korea, Brazil, Saudi Arabia, UAE</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
            {/* Methodology */}
            {activeTab === 'methodology' && (
                <div className="animate-fadein">
                <section className="lg:py-12 p-2 lg:px-6">
                  <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-[#27548A] mb-8">Our Research Methodology</h2>
                    <div className="mb-10">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">1.2 Secondary Research</h3>
                      <div className="pl-1">
                      <p className="text-gray-700 mb-2">
                        Our team conducts secondary research using trusted sources to identify market trends and gather supporting data.
                        These sources include:
                      </p>
                      <ul className="list-disc list-inside text-gray-700 mb-2">
                        <li>Company filings and presentations</li>
                        <li>Government and regulatory bodies</li>
                        <li>National statistics agencies</li>
                        <li>Industry journals and paid databases</li>
                      </ul>
                      <p className="text-gray-700">
                        This step helps us build the initial foundation of the report.
                      </p>
                      </div>
                    </div>
                    <div className="mb-10">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">1.3 Primary Research</h3>
                      <p className="text-gray-700 pl-1">
                        We conduct interviews with key stakeholders across the industry—such as executives, suppliers, channel partners, and consultants.
                        These interactions provide firsthand insights into market performance, pricing strategies, competition, and growth opportunities.
                        Primary research also validates and complements the secondary findings.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">1.4 Forecasting Methods</h3>
                      <p className="text-gray-700 mb-2 pl-1">
                        We apply multiple forecasting models and tools to estimate current and future market figures.
                        These techniques use historical trends, industry patterns, and insights from experts to generate accurate market forecasts.
                        All findings are cross-verified by industry professionals to ensure accuracy and relevance.
                      </p>
                      <p className="text-gray-700 pl-1">
                        The final step involves compiling the analyzed data into a structured report, which is reviewed, finalized, and distributed across various platforms.
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            )}
            {/* Major Region */}
            {activeTab === 'region' && (
                <div className="animate-fadein">
                <section className="bg-white lg:py-12 p-6 lg:px-6">
                  <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-[#27548A] mb-6">Regions & Countries Covered</h2>
                    <div className="overflow-x-auto">
                      <table className="min-w-full table-auto border border-gray-300 text-left text-sm text-gray-700">
                        <thead className="bg-yellow-300 text-black font-semibold">
                          <tr>
                            <th className="px-4 py-3 border border-gray-300">Region</th>
                            <th className="px-4 py-3 border border-gray-300">Countries Covered</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="px-4 py-2 border border-gray-200 font-medium">North America</td>
                            <td className="px-4 py-2 border border-gray-200">U.S., Canada, Mexico, Others</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2 border border-gray-200 font-medium">Europe</td>
                            <td className="px-4 py-2 border border-gray-200">Germany, UK, France, Others</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2 border border-gray-200 font-medium">Asia Pacific</td>
                            <td className="px-4 py-2 border border-gray-200">China, India, Japan, South Korea, Others</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2 border border-gray-200 font-medium">Central & South America</td>
                            <td className="px-4 py-2 border border-gray-200">Brazil, Argentina, Colombia, Others</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2 border border-gray-200 font-medium">Middle East & Africa</td>
                            <td className="px-4 py-2 border border-gray-200">Saudi Arabia, UAE, Others</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>
              </div>
            )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportDetailPage;