import { LoaderAnimation } from "../assets/assets";
import Lottie from "lottie-react";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 bg-white flex justify-center items-center">
      <Lottie animationData={LoaderAnimation} loop style={{ height: 150 }} />
    </div>
  );
};

export default Loader;
