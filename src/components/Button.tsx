import { Link } from "react-router-dom";
import FadeContent from "../blocks/Animations/FadeContent/FadeContent";

type ButtonProps = {
  to: string;
  children: string;
  className?: string;
  vibe?: "light" | "dark";
  color?: string;
  variant?: "outline" | "solid";
};

const Button: React.FC<ButtonProps> = ({
  to,
  children,
  className,
  variant,
  color,
}) => {
  return (
    <FadeContent duration={500} delay={400}>
      <Link
        to={to}
        className={
          className
            ? className
            : `inline-flex items-center px-6 ${
                variant === "solid"
                  ? "bg-[#0077B5] hover:bg-[#00A0DC] text-white"
                  : `bg-transparent ${
                      color === "black"
                        ? "text-black border-black hover:bg-black hover:text-white"
                        : "text-white border-white hover:bg-white hover:text-black"
                    } border `
              }
               shadow-none shadow-black/20 text-sm md:text-lg group rounded-3xl py-2 font-bold hover:shadow-sm transition-[box-shadow] duration-400 transition-colors`
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
