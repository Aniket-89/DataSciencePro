// Example usage in a page or section
import { FaPython } from "react-icons/fa";
import {
  SiR,
  SiFlask,
  SiDjango,
  SiTensorflow,
  SiPytorch,
  SiFastapi,
  //   SiMicrosoftexcel,
  SiScikitlearn,
  //   SiApachemxnet,
} from "react-icons/si";
// import { TbBrandNlp } from "react-icons/tb";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { GiArtificialIntelligence } from "react-icons/gi";
import { BsBarChartFill } from "react-icons/bs";
import { PiChartLineUpBold } from "react-icons/pi";
import { BiSolidBot } from "react-icons/bi";
import { AiOutlineBarChart } from "react-icons/ai"; // Use as Power BI alternative
import { GrDeploy } from "react-icons/gr"; // Use as Model Deployment alternative
import { FaRobot } from "react-icons/fa"; // Use as Automation Tools alternative
import { FaRegImage } from "react-icons/fa"; // Use as Image Processing alternative
import { useRef, useEffect } from "react";

// You can add more icons or swap as needed for your stack
const techIcons = [
  <FaPython size={40} title="Python" />,
  <SiR size={40} title="R" />,
  <SiFlask size={40} title="Flask" />,
  <SiDjango size={40} title="Django" />,
  <SiTensorflow size={40} title="TensorFlow" />,
  <SiPytorch size={40} title="PyTorch" />,
  <SiFastapi size={40} title="fastai" />,
  //   <TbBrandNlp size={40} title="NLP" />,
  <GiArtificialIntelligence size={40} title="CNN/DNN" />,
  <MdOutlineDashboardCustomize size={40} title="Clustering" />,
  <BiSolidBot size={40} title="Chatbots" />,
  <AiOutlineBarChart size={40} title="Power BI" />, // Power BI alternative
  //   <SiMicrosoftexcel size={40} title="Excel" />,
  <BsBarChartFill size={40} title="Matplotlib" />,
  <PiChartLineUpBold size={40} title="Seaborn" />,
  <SiScikitlearn size={40} title="Scikit-learn" />,
  //   <SiApachemxnet size={40} title="MXNet" />,
  <span style={{ fontSize: 40, fontWeight: "bold" }} title="TfLite">
    TfLite
  </span>,
  <span style={{ fontSize: 40, fontWeight: "bold" }} title="Tesseract">
    Tesseract
  </span>,
  <FaRegImage size={40} title="Image & Speech Processing" />, // Image Processing alternative
  <GrDeploy size={40} title="Model Deployment" />, // Model Deployment alternative
  <FaRobot size={40} title="Automation Tools" />, // Automation Tools alternative
];

export default function ToolsSliderSection() {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let animationFrame: number;
    let start: number | null = null;
    const speed = 30; // px per second

    const animate = (timestamp: number) => {
      if (start === null) start = timestamp;
      const elapsed = timestamp - start;
      const distance = (elapsed / 1000) * speed;
      slider.scrollLeft = distance % (slider.scrollWidth / 2);
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-[1600px] mx-auto flex px-4">
        <h2 className="text-sm font-light text-left mb-8">
          Tools & Technologies
        </h2>
        <div
          ref={sliderRef}
          className="w-full overflow-hidden"
          style={{
            height: "56px",
            maskImage:
              "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          }}
        >
          <div
            className="flex items-center"
            style={{
              width: "max-content",
              minWidth: "100%",
              gap: "2.5rem",
              whiteSpace: "nowrap",
            }}
          >
            {[...techIcons, ...techIcons].map((icon, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center"
                style={{
                  height: "56px",
                  minWidth: "56px",
                }}
              >
                {icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
