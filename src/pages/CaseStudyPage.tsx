import { FiSliders } from "react-icons/fi";

const CaseStudyPage = () => {
  return (
    <div className=" text-white my-24 m-2 max-w-[1600px] 2xl:mx-auto">
      {/* 💡 Utility container for spacing */}
      <h1 className="text-h1 text-black text-center my-12">CHURN ANALYSIS</h1>
      <div className="">

      <img
        src="https://images.unsplash.com/photo-1552365955-29ca04d444ea?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="rounded-3xl w-full aspect-[16/9] soft-shadow"
        />
        </div>
      <div className="mx-auto space-y-32 py-24">
        {/* 🌟 Overview */}
        <section className="text-black rounded-3xl px-8">
          <h2 className="text-md md:text-lg font-extrabold tracking-tight mb-2 lg:mb-6">
            Project Overview
          </h2>
          <p className="text-h3 text-gray-300 font-light leading-relaxed">
            This project focused on redefining user retention through predictive
            analytics. By analyzing customer data, patterns, and behaviors, we
            were able to preemptively identify churn signals and recommend
            proactive strategies for engagement.
          </p>
        </section>

        {/* 🎯 Objective
        <section className="bg-[#111111] rounded-3xl p-12 shadow-xl">
          <h2 className="text-5xl font-extrabold tracking-tight mb-6">
            Objective
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            To build an intelligent system capable of accurately forecasting
            customer churn and empowering the client to retain valuable
            customers using data-driven recommendations.
          </p>
        </section> */}

        {/* 🚀 Approach */}
        <section className="text-gray-900">
          <h2 className="headline-gradient mx-auto font-extrabold tracking-tight mb-6 text-center">
            The Approach
          </h2>
          <div className="flex gap-2 w-full overflow-auto py-8 scroll-hidden">
            <div className="relative approach-card-wrapper col-span-1 overflow-hidden h-fit aspect-square">
              <div className="approach-card-ellipse"></div>
              <div className="flex justify-between items-center">
                <FiSliders size={45} className="rounded-3xl p-2" />
                <p className="text-xl font-semibold">4 Hours</p>
              </div>
              <div className="">
                <h3 className="text-3xl font-light p-4">Preprocessing</h3>
                <div className="flex flex-wrap w-full items-center">
                  <div className="py-2 px-4 font-bold border-2 border-gray-700 text-gray-800 rounded-3xl">
                    Dataset
                  </div>
                </div>
              </div>
            </div>

            <div className="relative approach-card-wrapper aspect-square">
              <div className="approach-card-ellipse"></div>
              <div className="flex justify-between items-center">
                <FiSliders size={45} className="rounded-3xl p-2" />
                <p className="text-xl font-semibold">4 Hours</p>
              </div>
              <div className="">
                <h3 className="text-3xl font-light p-4">Training</h3>
                <div className="flex flex-wrap w-full items-center">
                  <div className="py-2 px-4 font-bold border-2 border-gray-700 text-gray-800 rounded-3xl">
                    Dataset
                  </div>
                </div>
              </div>
            </div>

            <div className="relative approach-card-wrapper aspect-square">
              <div className="approach-card-ellipse"></div>
              <div className="flex justify-between items-center">
                <FiSliders size={45} className="rounded-3xl p-2" />
                <p className="text-xl font-semibold">4 Hours</p>
              </div>
              <div className="">
                <h3 className="text-3xl font-light p-4">Evaluation</h3>
                <div className="flex flex-wrap w-full items-center">
                  <div className="py-2 px-4 font-bold border-2 border-gray-700 text-gray-800 rounded-3xl">
                    Dataset
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ⚔️ Challenges */}
        <section className="bg-[#111111] grid md:grid-cols-2 rounded-3xl p-12 shadow-xl">
          <h2 className="text-5xl font-extrabold tracking-tight mb-6">
            Challenges
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Sparse data from inactive users, high class imbalance, and
            constantly shifting user behavior patterns were major obstacles. We
            introduced synthetic data balancing and temporal validation to
            ensure model generalization across future time windows.
          </p>
        </section>

        {/* 🧠 Impact */}
        <section className="grid md:grid-cols-2 text-gray-900 rounded-3xl p-8">
          <h2 className="text-h3 font-semibold tracking-tight mb-6">
            The Impact
          </h2>
          <p className="text-h3 text-gray-300 leading-relaxed">
            The deployed solution led to a 22% reduction in churn over 3 months,
            improved customer targeting strategies, and saved over ₹15 Cr in
            annual revenue leakage. Internal teams adopted the dashboard as a
            critical decision-making tool.
          </p>
        </section>
        <section className="mx-auto w-full m-2 p-8">
          <h3 className="text-h1 text-gray-900 mb-12">The Tech</h3>
          <div className="flex gap-2">
            <div className="bg-[#ffffef] size-24 rounded-3xl"></div>
            <div className="bg-[#ffffef] size-24 rounded-3xl"></div>
            <div className="bg-[#ffffef] size-24 rounded-3xl"></div>
            <div className="bg-[#ffffef] size-24 rounded-3xl"></div>

          </div>
        </section>
      </div>
    </div>
  );
};

export default CaseStudyPage;
