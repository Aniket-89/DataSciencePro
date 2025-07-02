import { Link } from "react-router-dom";

type ButtonProps = {
  to: string;
  children: string;
  className?: string;
  vibe?: "primary" | "secondary";
};

const Button: React.FC<ButtonProps> = ({ to, children, className, vibe }) => {
  return (
    <Link
      to={to}
      className={
        className
          ? className
          : "inline-flex items-center px-6 bg-white shadow-md shadow-white/20 text-sm md:text-lg text-[#183B4E] group rounded-3xl py-2 font-bod hover:bg-[#DDA853] hover:text-gray-50 transition-colors"
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
  );
};

export default Button;
