import { useRef, useEffect } from "react";

type InfiniteSliderProps = {
  icons: React.ReactNode[];
  speed?: number; // pixels per second
  height?: string;
  gap?: string;
};

const InfiniteSlider: React.FC<InfiniteSliderProps> = ({
  icons,
  speed = 60,
  height = "64px",
  gap = "2rem",
}) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let animationFrame: number;
    let start: number | null = null;
    let scrollLeft = 0;

    const animate = (timestamp: number) => {
      if (start === null) start = timestamp;
      const elapsed = timestamp - start;
      const distance = (elapsed / 1000) * speed;
      slider.scrollLeft = distance % (slider.scrollWidth / 2);
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [speed, icons.length]);

  // Duplicate icons for seamless loop
  const iconList = [...icons, ...icons];

  return (
    <div
      className="w-full overflow-hidden"
      style={{
        height,
        maskImage:
          "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
      }}
    >
      <div
        ref={sliderRef}
        className="flex items-center"
        style={{
          width: "max-content",
          minWidth: "100%",
          gap,
          scrollBehavior: "auto",
          overflow: "hidden",
          whiteSpace: "nowrap",
        }}
      >
        {iconList.map((icon, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center"
            style={{ height, minWidth: height }}
          >
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteSlider;
