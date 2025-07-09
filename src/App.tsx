import { useState, Suspense, lazy, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { FaComments } from "react-icons/fa";

// Lazy load pages
const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const DataAnalysisPage = lazy(() => import("./pages/DataAnalysisPage"));
const MachineLearningPage = lazy(() => import("./pages/MachineLearningPage"));
const ReportsPage = lazy(() => import("./pages/ReportsPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const TestimonialsPage = lazy(() => import("./pages/TestimonialsPage"));
const CaseStudyPage = lazy(() => import("./pages/CaseStudyPage"));
const IndustryPage = lazy(() => import("./pages/IndustryPage"));
const ReportsListPage = lazy(() => import("./pages/ReportsListPage"));
const ReportDetailPage = lazy(() => import("./pages/ReportDetailPage"));
const ChatbotComp = lazy(() => import("./components/ChatbotComp"));

function App() {
  const [chatbotOpen, setChatbotOpen] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);

  // Lazy load chatbot after delay
  useEffect(() => {
    const timer = setTimeout(() => setShowChatbot(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />

        {/* Chatbot floating button & popup */}
        {showChatbot && (
          <>
            {chatbotOpen && (
              <div className="fixed bottom-10 right-10 z-50 flex flex-col items-end">
                <Suspense fallback={null}>
                  <ChatbotComp onClose={() => setChatbotOpen(false)} />
                </Suspense>
              </div>
            )}

            <button
              onClick={() => setChatbotOpen(true)}
              aria-label="Open Chatbot"
              className="fixed bottom-10 right-10 z-40 bg-[#27548A] text-white rounded-full shadow-lg p-4 hover:bg-[#183B4E] transition-colors focus:outline-none"
              style={{ display: chatbotOpen ? "none" : "block" }}
            >
              <FaComments size={24} />
            </button>
          </>
        )}

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
                <Route path="/testimonials" element={<TestimonialsPage />} />
                <Route path="/reports/:slug" element={<IndustryPage />}>
                  <Route index element={<ReportsListPage />} />
                  <Route path=":reportId" element={<ReportDetailPage />} />
                </Route>
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
