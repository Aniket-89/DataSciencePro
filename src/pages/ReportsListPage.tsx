import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import TopBanner from "../components/TopBanner";
import { Placeholder } from "../assets/assets";
import { useSearchParams } from "react-router-dom";

type Report = {
  id: string;
  title: string;
  industry: string;
  industryslug: string;
  thumbnail: string;
};

const ReportsListPage = () => {
  const [searchParams] = useSearchParams();
  const defaultIndustry = searchParams.get("industry") || "all";

  const [reports, setReports] = useState<Report[]>([]);
  const [filteredReports, setFilteredReports] = useState<Report[]>([]);
  const [industries, setIndustries] = useState<string[]>([]);
  const [selectedIndustry, setSelectedIndustry] = useState(defaultIndustry);

  useEffect(() => {
    const fetchReports = async () => {
      const querySnapshot = await getDocs(collection(db, "reports"));
      const reportsData: Report[] = querySnapshot.docs.map((doc) => {
        const data = doc.data() as Report;
        return {
          ...data,
          id: doc.id,
        };
      });

      setReports(reportsData);
      setFilteredReports(reportsData);

      const uniqueIndustries = Array.from(
        new Set(reportsData.map((r) => r.industryslug))
      );
      setIndustries(uniqueIndustries);
    };

    fetchReports();
  }, []);

  useEffect(() => {
    if (selectedIndustry === "all") {
      setFilteredReports(reports);
    } else {
      setFilteredReports(
        reports.filter((r) => r.industryslug === selectedIndustry)
      );
    }
  }, [selectedIndustry, reports]);

  return (
    <div>
      <TopBanner title="Research Reports" subtitle="Market Report" />

      <div className="max-w-[1600px] mx-auto p-2 md:p-4 min-h-[70vh] my-12 lg:my-24">
        {/* Filter Section */}
        <div className="mb-6 flex flex-col lg:flex-row gap-6">
          {/* Mobile (horizontal scroll) */}
          <div className="flex lg:hidden gap-2 overflow-x-auto bg-blue-50 rounded-3xl">
            <button
              onClick={() => setSelectedIndustry("all")}
              className={`whitespace-nowrap p-2 text-base text-left text-sm font-medium rounded-2xl border-b-2 transition-all duration-200 focus:outline-none capitalize ${
                selectedIndustry === "all"
                  ? "border-[#DDA853] text-[#DDA853] bg-gray-50 shadow-sm"
                  : "border-transparent text-[#183B4E] hover:bg-blue-400"
              }`}
            >
              All Industries
            </button>
            {industries.map((ind) => (
              <button
                key={ind}
                onClick={() => setSelectedIndustry(ind)}
                className={`whitespace-nowrap p-2 text-base text-left text-sm font-medium rounded-2xl border-b-2 transition-all duration-200 focus:outline-none capitalize ${
                  selectedIndustry === ind
                    ? "border-[#DDA853] text-[#DDA853] bg-gray-50 shadow-sm"
                    : "border-transparent text-[#183B4E] hover:bg-blue-400"
                }`}
              >
                {ind.replace(/-/g, " ")}
              </button>
            ))}
          </div>

          {/* Desktop (sidebar layout) */}
          <div className="hidden lg:flex">
            <aside className="w-64 shrink-0">
              <h2 className="text-lg font-semibold mb-4">Filter by Industry</h2>
              <ul className="space-y-2">
                <li
                  onClick={() => setSelectedIndustry("all")}
                  className={`cursor-pointer whitespace-nowrap p-2 text-base text-left text-sm font-medium rounded-2xl border-b-2 transition-all duration-200 focus:outline-none capitalize ${
                    selectedIndustry === "all"
                      ? "border-[#DDA853] text-[#DDA853] bg-gray-50 shadow-sm"
                      : "border-transparent text-[#183B4E] hover:bg-blue-400"
                  }`}
                >
                  All Industries
                </li>
                {industries.map((ind) => (
                  <li
                    key={ind}
                    onClick={() => setSelectedIndustry(ind)}
                    className={`cursor-pointer whitespace-nowrap p-2 text-base text-left text-sm font-medium rounded-2xl border-b-2 transition-all duration-200 focus:outline-none capitalize ${
                      selectedIndustry === ind
                        ? "border-[#DDA853] text-[#DDA853] bg-gray-50 shadow-sm"
                        : "border-transparent text-[#183B4E] hover:bg-blue-400"
                    }`}
                  >
                    {ind.replace(/-/g, " ")}
                  </li>
                ))}
              </ul>
            </aside>
          </div>

          {/* Report List */}
          <main className="flex-1">
            <h1 className="text-2xl font-bold mb-6">All Reports</h1>
            {filteredReports.length === 0 ? (
              <p>No reports available.</p>
            ) : (
              <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
                {filteredReports.map((report) => (
                  <li
                    key={report.id}
                    className="p-2 rounded-2xl shadow-sm space-y-2 gap-2"
                  >
                    <img
                      src={report.thumbnail ? report.thumbnail : Placeholder}
                      alt="Thumbnail"
                      className="h-40 w-full object-cover rounded mb-2"
                    />

                    <Link
                      to={`/reports/${report.id}`}
                      className="text-blue-400 font-semibold text-lg hover:underline"
                    >
                      {report.title}
                    </Link>
                    <p className="text-sm text-gray-600 capitalize">
                      Industry: {report.industry}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default ReportsListPage;
