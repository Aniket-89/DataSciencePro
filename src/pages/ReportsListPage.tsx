import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';

interface Report {
  id: string;
  slug: string;
  title: string;
  overview: string;
  industry: string;
  // industryslug: string;
}

const ReportsListPage = () => {
  const { slug } = useParams();
  const [reports, setReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    const fetchReports = async () => {
      setLoading(true);
      try {
        const q = query(collection(db, 'reports'), where('industryslug', '==', slug));
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map(doc => doc.data() as Report);
        setReports(data);
      } catch (err) {
        console.error('Error fetching reports:', err);
        setReports([]);
      } finally {
        setLoading(false);
      }
    };

    fetchReports();
  }, [slug]);

  if (loading) {
    return <div className="p-8 text-center text-lg">Loading reports...</div>;
  }

  if (!reports.length) {
    return <div className="p-8 text-center text-lg">No reports found for this industry.</div>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Reports in {reports[0]?.industry}</h2>
      <ul className="grid gap-6">
        {reports.map((report) => (
          <li key={report.id} className="bg-white p-6 rounded-none shadow-sm border border-gray-200 flex flex-col gap-2">
            <Link
              to={`/industry/${slug}/${report.slug}`}
              className="text-lg font-semibold text-[#27548A] hover:underline"
            >
              {report.title}
            </Link>
            <p className="text-gray-700 text-sm mb-2 line-clamp-3">{report.overview}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReportsListPage;
