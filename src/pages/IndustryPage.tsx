import IndustryCategoriesSidebar from "../components/IndustryCategoriesSidebar";
import { Outlet } from "react-router-dom";
import CTA from "../components/CTA";
import TopBanner from "../components/TopBanner";

const IndustryPage = () => {
  return (
    <div className="bg-white">
      <TopBanner title="Research Reports" subtitle="Market Report" />
      {/* <div className="relative my-8 w-full h-72 rounded-none bg-gradient-to-r from-[#E9F1FA] to-[#FDF6E3] border border-[#DDE6F2] px-6 py-5 flex items-center gap-4"> */}
      {/* <div className="flex mx-auto items-center justify-between gap-4">
          <span className="text-3xl font-bold text-[#27548A]">
            Research Reports
          </span>
          <span className="ml-auto text-sm text-[#DDA853] font-medium uppercase tracking-wider absolute bottom-5 right-10">
            Market Report
          </span>
        </div> */}
      {/* </div> */}
      <div className="grid lg:grid-cols-4 my-12 rounded-3xl m-2 max-w-[1600px] gap-4 min-h-[60vh] bg-[#F3F3E0] 2xl:mx-auto">
        {/* Sidebar: 1/4 width */}
        <div className="lg:col-span-1 h-fit">
          <div className="md:sticky md:top-24">
            <IndustryCategoriesSidebar />
          </div>
        </div>
        {/* Main Content: 3/4 width */}
        <main className="lg:col-span-3 lg:p-8 p-2 flex-1 min-w-0">
          {/* Here you can render either a list of reports or report details via nested routes */}
          <Outlet />
        </main>
      </div>
      <CTA />
    </div>
  );
};

export default IndustryPage;
