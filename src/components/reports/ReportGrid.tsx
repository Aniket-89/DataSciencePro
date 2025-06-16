import { motion } from 'framer-motion';
import type { Report } from '../../types/reports';
import { SAMPLE_REPORTS } from '../../types/reports';

const ReportCard = ({ report }: { report: Report }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="bg-white p-6 group hover:bg-gray-100 transition-colors"
  >
    <div className="text-sm text-gray-500 mb-2">{report.industry}</div>
    <h3 className="text-xl font-light text-gray-900 mb-3 group-hover:text-gray-700">
      {report.title}
    </h3>
    <p className="text-gray-600 mb-4">
      {report.summary}
    </p>
    <button className="text-gray-900 group-hover:text-gray-700 font-light">
      View Report →
    </button>
  </motion.div>
);

const ReportGrid = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-light text-gray-900"
          >
            Latest Reports
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            <select className="px-4 py-2 bg-gray-50 text-gray-900">
              <option>All Industries</option>
              <option>Sort by Date</option>
              <option>Sort by Popularity</option>
            </select>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SAMPLE_REPORTS.map((report, index) => (
            <ReportCard key={index} report={report} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReportGrid;
