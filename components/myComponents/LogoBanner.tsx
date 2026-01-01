"use client";

import Image from "next/image";

const logos = [
  { src: "/energyER.png", type: "men" },
  { src: "/mmbEM.png", type: "women" },
  { src: "/megastarsER.png", type: "men" },
  { src: "/doctorsEM.png", type: "women" },
  { src: "/naturebucksER.png", type: "men" },
  { src: "/lynxEM.png", type: "women" },
  { src: "/yluudER.png", type: "men" },
  { src: "/sbmEM.png", type: "women" },
  { src: "/altainbarsER.png", type: "men" },
  { src: "/dynastyEM.png", type: "women" },
  { src: "/aranzalER.png", type: "men" },
  { src: "/mubsiEM.png", type: "women" },
  { src: "/zavhanER.png", type: "men" },
  { src: "/hantaishirEM.png", type: "women" },
  { src: "/dornogoviER.png", type: "men" },
  { src: "/hilchinEM.png", type: "women" },
  { src: "/tuvzaamarER.png", type: "men" },
  { src: "/aranzalEM.png", type: "women" },
    { src: "/mogulsER.png", type: "men" },
];

export default function LogoBanner() {
  return (
    <div className="relative w-full overflow-hidden bg-white py-4">
      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-linear-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-linear-to-l from-white to-transparent z-10" />

      <div className="flex w-max animate-marquee gap-10">
        {[...logos, ...logos].map((item, i) => (
          <div
            key={i}
            className="flex items-center justify-center min-w-30"
          >
            {/* Эмэгтэй баг → dark pill */}
            <div
              className={
                item.type === "women"
                  ? "bg-gray-900 rounded-full p-3"
                  : ""
              }
            >
              <Image
                src={item.src}
                alt="team logo"
                width={100}
                height={100}
                className={`h-14 w-auto object-contain transition ${
                  item.type === "men"
                    ? "grayscale hover:grayscale-0"
                    : "drop-shadow-[0_0_6px_rgba(255,255,255,0.7)]"
                }`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
