const Card = () => {
  return (
    <div className="smoke-card">
      <div className="mb-6">
        <h3 className="text-2xl font-medium text-[#183B4E] mb-4">Card Title</h3>
      </div>
      <p className="text-gray-600 font-normal mb-6">
        This is a sample card description.
      </p>
      <a
        href="#"
        className="inline-flex items-center font-medium text-[#DDA853]"
      >
        Learn More
        <svg
          className="w-4 h-4 ml-2 transform transition-transform hover:translate-x-1"
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
      </a>
    </div>
  );
};

export default Card;
