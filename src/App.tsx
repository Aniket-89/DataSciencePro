import { useState, Suspense, lazy, useEffect } from "react";
// import { Suspense, lazy } from "react";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import ChatbotWidget from "./chatbot/ChatBotWidget";

// Lazy load pages
const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const DataAnalysisPage = lazy(() => import("./pages/DataAnalysisPage"));
const MachineLearningPage = lazy(() => import("./pages/MachineLearningPage"));
const ReportsPage = lazy(() => import("./pages/ReportsPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const AddReportPage = lazy(() => import("./pages/AddReportPage"));
const CaseStudyPage = lazy(() => import("./pages/CaseStudyPage"));
const ReportDetailPage = lazy(() => import("./pages/ReportDetailPage"));
const ReportsListPage = lazy(() => import("./pages/ReportsListPage"));

function App() {
  const [showChatbot, setShowChatbot] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowChatbot(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />

        {showChatbot && <ChatbotWidget />}

        {/* Main content area */}

        <main className="flex-grow">
          <ScrollToTop />

          <Suspense
            fallback={<div className="text-center py-20">Loading...</div>}
          >
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route
                  path="/services/data-analysis"
                  element={<DataAnalysisPage />}
                />
                <Route
                  path="/services/machine-learning"
                  element={<MachineLearningPage />}
                />
                <Route path="/services/reports" element={<ReportsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/case" element={<CaseStudyPage />} />
                <Route path="/admin" element={<AddReportPage />} />

                {/* Simplified Reports System */}
                <Route path="/reports" element={<ReportsListPage />} />
                <Route
                  path="/reports/:reportId"
                  element={<ReportDetailPage />}
                />
              </Routes>
            </AnimatePresence>
          </Suspense>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
