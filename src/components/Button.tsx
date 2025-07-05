import { Link } from "react-router-dom";
import FadeContent from "../blocks/Animations/FadeContent/FadeContent";

type ButtonProps = {
  to: string;
  children: string;
  className?: string;
  vibe?: "light" | "dark";
  color?: string;
};

const Button: React.FC<ButtonProps> = ({
  to,
  children,
  className,
  color,
  vibe,
}) => {
  return (
    <FadeContent duration={500} delay={700}>
      <Link
        to={to}
        className={
          className
            ? className
            : `inline-flex items-center px-6 bg-${
                color ? color : "white"
              } shadow-sm shadow-black/20 text-sm md:text-lg text-${
                vibe && vibe === "dark" ? "white" : "[#183B4E]"
              } group rounded-3xl py-2 font-bod hover:bg-[#DDA853] hover:text-gray-50 hover:shadow-none transition-[box-shadow] duration-400 transition-colors`
        }
      >
        {children}
        <svg
          className="w-4 h-4 ml-2 group-hover:translate-x-2 transform group-hover:translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </Link>
    </FadeContent>
  );
};

export default Button;
