import { LoaderAnimation, LoaderSpinner } from "../assets/assets";
import Lottie from "lottie-react";

type LoaderProps = {
  variant?: "animation" | "spinner";
};

const Loader: React.FC<LoaderProps> = ({ variant }) => {
  return (
    <div className="fixed inset-0 z-50 bg-white flex justify-center items-center">
      <Lottie
        animationData={
          variant === "animation" ? LoaderAnimation : LoaderSpinner
        }
        loop
        style={{ height: 200 }}
      />
    </div>
  );
};

export default Loader;
