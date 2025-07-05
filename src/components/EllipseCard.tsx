import React from "react";
import { FiSliders } from "react-icons/fi";
import Button from "./Button";

type EllipseCardProps = {
  title: string;
  desc?: string;
  to?: string;
  tags?: string[];
  list?: boolean;
};

const EllipseCard: React.FC<EllipseCardProps> = ({ title, desc, to, tags, list }) => {
  return (
    <div className="relative approach-card-wrapper col-span-1 overflow-hidden grid">
      <div className="approach-card-ellipse"></div>
      <div className="flex justify-between items-center">
        <FiSliders size={45} className="rounded-3xl p-2" />
        <p className="text-xl font-semibold">4 Hours</p>
      </div>
      <div className="grid gap-4">
        <h3 className="text-3xl font-light">{title}</h3>
        {desc && <p className="text-gray-700 font-light text-sm">{desc}</p>}
          {tags && 
        <div className={`flex flex-wrap w-full gap-1 ${list ? 'flex-col': 'items-center '}`}>
          {tags.map((tag, index) => (
            <div 
            key={index}
            className={` font-semibold ${ list ? 'border-none' : 'border-2 py-1 px-3' } border-gray-700 text-gray-800 text-sm rounded-3xl`}>
            {tag}
          </div>
            
          ))}
        </div>
          }
      </div>
      {to && <Button to={to}>Learn More</Button>}
    </div>
  );
};

export default EllipseCard;
