import { PopupButton } from "react-calendly";

type BookButtonProps = {
  text: string;
  color?: string;
  gradient?: boolean;
};

const BookButton: React.FC<BookButtonProps> = ({ text, color, gradient }) => {
  const root = document.getElementById("root") || document.body;

  return (
    <PopupButton
      url="https://calendly.com/databitzy/30min"
      rootElement={root}
      text={text}
      className={`px-6 rounded-3xl py-2 max-w-fit text-sm md:text-lg font-semibold text-white hover:bg-blue-500 transition-colors items-center
            ${color ? `bg-[${color}]` : "bg-[#27548A]"} +
            ${
              gradient
                ? "bg-gradient-to-br to-[#183B4E] from-[#27548A] hover:from-[#183B4E] hover:to-[#27548A] "
                : ""
            }`}
    />
  );
};

export default BookButton;
