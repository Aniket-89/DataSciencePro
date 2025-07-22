import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import ScrollToTop from "./components/ScrollToTop";
import ChatbotWidget from "./chatbot/ChatBotWidget";
import { AnimatePresence } from "framer-motion";
import { Suspense, lazy } from "react";

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

function MainLayout() {
  const [loading, setLoading] = useState(true);
  const [showChatbot, setShowChatbot] = useState(false);
  const location = useLocation();

  // 🔹 Initial Load: 0.5s
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  // 🔹 Page change: 0.2s
  useEffect(() => {
    if (!loading) {
      setLoading(true);
      const timeout = setTimeout(() => {
        setLoading(false);
      }, 200);
      return () => clearTimeout(timeout);
    }
  }, [location.pathname]);

  // 🔹 Show chatbot after 2.5s
  useEffect(() => {
    const timer = setTimeout(() => setShowChatbot(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loader variant="animation" />}

      <div
        className={`${
          loading ? "opacity-0" : "opacity-100"
        } transition-opacity duration-200`}
      >
        <div className="min-h-screen flex flex-col">
          <Header />

          {showChatbot && <ChatbotWidget />}

          <main className="flex-grow">
            <ScrollToTop />

            <Suspense
              fallback={<div className="text-center py-20">Loading...</div>}
            >
              <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
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
      </div>
    </>
  );
}

export default MainLayout;
