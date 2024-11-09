import React from "react";
import { MapPin } from "lucide-react";
import world_map from "../assets/world_map_pink.png";

const MapExperienceOverlay = () => {
  const experiences = [
    {
      company: "WorkUp",
      year: "2024",
      coordinates: { x: "17.5%", y: "42.5%" },
      location: " Los Angeles, CA", // Los Angeles
    },
    {
      company: "KANINI",
      year: "2023",
      coordinates: { x: "71%", y: "52%" }, // Chennai
      location: " Chennai, IND",
    },
    {
      company: "MSAII",
      year: "2022-23",
      coordinates: { x: "26.5%", y: "40%" },
      location: "Ohio, USA", // Offset Chennai
    },
    {
      company: "Mitacs",
      year: "2022",
      coordinates: { x: "26.5%", y: "37%" }, // Waterloo
      location: " Waterloo, ON",
    },
    {
      company: "zebo.ai",
      year: "2021-22",
      coordinates: { x: "70%", y: "50%" }, // Remote (center)
      location: " Bengaluru, IND",
    },
  ];

  return (
    <div className="hidden md:block relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative w-full h-auto">
        {/* Background Map Image */}
        <img
          src={world_map}
          alt="World Map"
          className="w-full h-auto brightness-[0.65] object-contain"
        />

        {/* Experience markers and labels */}
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="absolute group"
            style={{
              left: exp.coordinates.x,
              top: exp.coordinates.y,
            }}
          >
            {/* Pop-up on hover */}
            {/* ({exp.exp}) */}
            <div className="hidden group-hover:block absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center bg-black text-white text-xs px-2 py-1 rounded-lg z-10">
              {exp.location}
            </div>

            {/* Label */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center whitespace-nowrap">
              <p className="text-purple-300 text-xs sm:text-sm font-medium">
                {exp.company} <span className="text-xs">({exp.year})</span>
              </p>
            </div>

            {/* Map Pin */}
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MapExperienceOverlay;
