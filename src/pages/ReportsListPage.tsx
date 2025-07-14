import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import TopBanner from "../components/TopBanner";

type Report = {
  id: string;
  title: string;
  industry: string;
  industryslug: string;
};
const ReportsListPage = () => {
  const [reports, setReports] = useState<Report[]>([]);
  const [filteredReports, setFilteredReports] = useState<Report[]>([]);
  const [industries, setIndustries] = useState<string[]>([]);

  const [selectedIndustry, setSelectedIndustry] = useState("all");

  useEffect(() => {
    const fetchReports = async () => {
      const querySnapshot = await getDocs(collection(db, "reports"));
      const reportsData: Report[] = querySnapshot.docs.map((doc) => {
        const data = doc.data() as Report;
        return {
          ...data,
          id: doc.id, // ✅ ensures the URL uses Firestore doc ID
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
    <div className="">
      <TopBanner title="Research Reports" subtitle="Market Report" />
      <div className="max-w-5xl min-h-[70vh] mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">All Reports</h1>

        <div className="mb-4">
          <label className="mr-2 font-semibold">Filter by Industry:</label>
          <select
            value={selectedIndustry}
            onChange={(e) => setSelectedIndustry(e.target.value)}
            className="border p-2 rounded"
          >
            <option value="all">All</option>
            {industries.map((ind) => (
              <option key={ind} value={ind}>
                {ind.charAt(0).toUpperCase() + ind.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {filteredReports.length === 0 ? (
          <p>No reports available.</p>
        ) : (
          <ul className="space-y-4">
            {filteredReports.map((report) => (
              <li key={report.id} className="border p-4 rounded shadow">
                <Link
                  to={`/reports/${report.id}`}
                  className="text-blue-700 font-semibold text-lg hover:underline"
                >
                  {report.title}
                </Link>
                <p className="text-sm text-gray-600">
                  Industry: {report.industry}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ReportsListPage;
