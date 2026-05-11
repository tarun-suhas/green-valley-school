import { schoolData } from "@/data/schoolData";
import { Star } from "lucide-react";

export default function Marquee() {
  const items = [...schoolData.marquee, ...schoolData.marquee]; // Duplicate for seamless loop

  return (
    <div className="bg-primary-dark py-3 overflow-hidden whitespace-nowrap border-y border-white/10">
      <div className="animate-marquee inline-flex items-center">
        {items.map((item, index) => (
          <div key={index} className="flex items-center px-8 text-white font-medium text-sm md:text-base">
            <Star className="text-white fill-white mr-3 shrink-0" size={14} />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
