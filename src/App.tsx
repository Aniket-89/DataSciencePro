import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import DataAnalysisPage from './pages/DataAnalysisPage';
import MachineLearningPage from './pages/MachineLearningPage';
import ReportsPage from './pages/ReportsPage';
import ScrollToTop from './components/ScrollToTop';
import TestimonialsPage from './pages/TestimonialsPage';
import ChatbotComp from './components/ChatbotComp';
import { FaComments } from 'react-icons/fa';
import IndustryPage from './pages/IndustryPage';
import ReportsListPage from './pages/ReportsListPage';
import ReportDetailPage from './pages/ReportDetailPage';


function App() {
  const [chatbotOpen, setChatbotOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        {chatbotOpen && (
          <div className="fixed bottom-10 right-10 z-50 flex flex-col items-end">
            <ChatbotComp onClose={() => setChatbotOpen(false)} />
          </div>
        )}
        <button
          className="fixed bottom-10 right-10 z-50 bg-[#27548A] text-white rounded-full shadow-lg p-4 hover:bg-[#183B4E] transition-colors focus:outline-none"
          style={{ display: chatbotOpen ? 'none' : 'block' }}
          onClick={() => setChatbotOpen(true)}
          aria-label="Open Chatbot"
        >
            <span role="img" aria-label="chat">
            <svg style={{ display: 'none' }} /> {/* fallback for SSR */}
            {/* Import the chat icon at the top: import { FaComments } from 'react-icons/fa'; */}
            <FaComments size={24} />
            </span>
        </button>
        <main className="flex-grow">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/data-analysis" element={<DataAnalysisPage />} />
            <Route path="/services/machine-learning" element={<MachineLearningPage />} />
            <Route path="/services/reports" element={<ReportsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/industry/:slug" element={<IndustryPage />}>
              <Route index element={<ReportsListPage />} />
              <Route path=":reportId" element={<ReportDetailPage />} />
            </Route>
            <Route path="/testimonials" element={<TestimonialsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
