import React from "react";
import { FiSliders } from "react-icons/fi";

type EllipseCardProps = {
  title: string;
  desc?: string;
  to?: string;
};

const EllipseCard: React.FC<EllipseCardProps> = ({ title, desc, to }) => {
  return (
    <div className="relative approach-card-wrapper col-span-1 overflow-hidden h-fit aspect-square">
      <div className="approach-card-ellipse"></div>
      <div className="flex justify-between items-center">
        <FiSliders size={45} className="rounded-3xl p-2" />
        <p className="text-xl font-semibold">4 Hours</p>
      </div>
      <div className="">
        <h3 className="text-3xl font-light p-4">{title}</h3>
        {desc && <p className="text-gray-700 font-light text-2xl">{desc}</p>}
        <div className="flex flex-wrap w-full items-center">
          <div className="py-2 px-4 font-bold border-2 border-gray-700 text-gray-800 rounded-3xl">
            Dataset
          </div>
        </div>
      </div>
    </div>
  );
};

export default EllipseCard;
