import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CaseStudySection = () => {
  return (
    <section className="py-32">
      <div className="max-w-[1600px] mx-auto px-4">
        <div className=" mx-auto mb-8">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 9, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            className=""
          >
            <h3 className="text-hero text-[#183B4E] mb-4">Case Study</h3>
          </motion.div>
          {/* <h3 className="text-2xl font-medium text-gray-800 mb-2">
              Predicting Customer Churn for ABC Telecom
            </h3> */}
        </div>
        <Link to={"/case"}>
          <motion.div
            initial={{ scaleX: 0, padding: 0 }}
            whileInView={{ scaleX: 1, padding: "3rem" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            exit={{ scaleX: 1 }}
            viewport={{ amount: 0.5 }}
            className="aspect-[9/16] max-h-screen md:aspect-[16/7] rounded-3xl bg-transparent mx-auto overflow-hidden relative"
          >
            <img
              src="https://images.unsplash.com/photo-1552365955-29ca04d444ea?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="absolute top-0 left-0 w-full h-full object-cover -z-10"
            />

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.4 }}
              className="text-h3 text-white"
            >
              Predicting Customer Churn for ABC Telecom
            </motion.h3>
          </motion.div>
        </Link>
        {/* <div className=" mx-auto bg-white p-10 rounded-3xl shadow-sm">
            <div className="mb-8">
              <div className="flex items-center mb-2">
                <span className="text-xl mr-2">🧠</span>
                <span className="text-xl font-semibold text-gray-900">
                  Objective
                </span>
              </div>
              <p className="text-gray-700 text-lg ml-7">
                Develop a machine learning model to predict churn and reduce
                customer attrition.
              </p>
            </div>
            <div className="mb-8">
              <div className="flex items-center mb-2">
                <span className="text-xl mr-2">🔧</span>
                <span className="text-xl font-semibold text-gray-900">
                  Approach:
                </span>
              </div>
              <ul className="list-disc ml-12 text-gray-700 text-lg space-y-2">
                <li>
                  <span className="font-semibold">Data Preprocessing:</span>{" "}
                  Cleaned and analyzed customer demographics & usage.
                </li>
                <li>
                  <span className="font-semibold">Feature Engineering:</span>{" "}
                  Tenure, contract type, feedback scores.
                </li>
                <li>
                  <span className="font-semibold">Modeling:</span> Logistic
                  Regression, Random Forest, and Gradient Boosting with
                  hyperparameter tuning.
                </li>
                <li>
                  <span className="font-semibold">Evaluation:</span> Achieved
                  85% accuracy, 78% precision, and 82% recall.
                </li>
              </ul>
            </div>
            <div>
              <div className="flex items-center mb-2">
                <span className="text-xl mr-2">🎯</span>
                <span className="text-xl font-semibold text-gray-900">
                  Impact
                </span>
              </div>
              <p className="text-gray-700 text-lg ml-7">
                Churn reduced by 15% in 6 months → Significant revenue
                retention.
              </p>
            </div>
          </div> */}
      </div>
    </section>
  );
};

export default CaseStudySection;
