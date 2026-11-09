import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PirateLayout from "../../components/PirateTheme/PirateLayout";
import mapImage from "../../assets/pirate_theme/treasure_map_cropped.jpg";
import { FaCompass } from "react-icons/fa";

const ISLAND_PINS = [
  {
    id: "nexus",
    title: "Nexus",
    path: "/nexus",
    left: "28.9%",
    top: "25.9%",
    width: "15%",
    height: "11%",
    badge: "⚔️",
    desc: "The Annual Flagship Fest of ECE: 3 days of techno-cultural brilliance, coding battles & fun!",
  },
  {
    id: "events",
    title: "Events",
    path: "/events",
    left: "44.3%",
    top: "40.9%",
    width: "15%",
    height: "11%",
    badge: "💣",
    desc: "Coding challenges, technical workshops, robotics contests, and fun tournaments.",
  },
  {
    id: "team",
    title: "Team",
    path: "/team",
    left: "68.0%",
    top: "35.0%",
    width: "14%",
    height: "11%",
    badge: "👥",
    desc: "Meet the crew: student leaders, heads, and members driving the society forward.",
  },
  {
    id: "pmc",
    title: "Placement Masterclass",
    path: "/placement_masterclass",
    left: "84.3%",
    top: "52.1%",
    width: "17%",
    height: "13%",
    badge: "🎓",
    desc: "Alumni wisdom, placement stories, preparation roadmaps & top company interview tips.",
  },
  {
    id: "alumni",
    title: "Alumni",
    path: "/alumni",
    left: "74.8%",
    top: "65.5%",
    width: "15%",
    height: "11%",
    badge: "⚓",
    desc: "Legacy records of past batches: creators of community, architects of tomorrow.",
  },
  {
    id: "home",
    title: "Home",
    path: "/home",
    left: "17.7%",
    top: "70.0%",
    width: "15%",
    height: "11%",
    badge: "☸️",
    desc: "Society of Electronics & Communication basecamp: history, vision & community.",
  },
  {
    id: "motto",
    title: "SECE Charter",
    path: "/home",
    left: "88.0%",
    top: "9.5%",
    width: "16%",
    height: "14%",
    badge: "📜",
    desc: "Different Islands, Same Crew, Bigger Dreams: Read the society story.",
    isMotto: true,
  },
];

const HomePage = () => {
  const navigate = useNavigate();
  const [activeIsland, setActiveIsland] = useState(null);

  const handlePinClick = (pin) => {
    navigate(pin.path);
  };

  return (
    <PirateLayout activeNav="Map">
      <div className="max-w-7xl mx-auto py-1 flex flex-col items-center">
        {/* Map Container framed in antique wood/ragged border */}
        <div className="relative w-full rounded-2xl overflow-hidden border-2 border-[#543b20] shadow-[0_20px_50px_rgba(0,0,0,0.95)] bg-[#0f0b07]">
          {/* Main Map Image */}
          <div className="relative w-full aspect-[730/514] overflow-hidden select-none">
            <img
              src={mapImage}
              alt="SECE Treasure Map - Different Islands Same Crew Bigger Dreams"
              className="w-full h-full object-cover object-center filter brightness-105 contrast-105"
            />

            {/* Clickable Island Hotspots Overlay over text & banners */}
            {ISLAND_PINS.map((pin) => (
              <button
                key={pin.id}
                onClick={() => handlePinClick(pin)}
                onMouseEnter={() => setActiveIsland(pin)}
                onMouseLeave={() => setActiveIsland(null)}
                style={{
                  left: pin.left,
                  top: pin.top,
                  width: pin.width,
                  height: pin.height,
                }}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group cursor-pointer focus:outline-none rounded-lg transition-all duration-200 hover:scale-105 hover:bg-[#f5ca73]/15 hover:border hover:border-[#f5ca73]/70 hover:shadow-[0_0_16px_rgba(245,202,115,0.45)]"
                title={`Click to sail to ${pin.title}`}
              >
                {/* Red pulse on hover near the X mark */}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#e63946]/40 animate-ping opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                {/* Accessible text */}
                <span className="sr-only">Go to {pin.title} page</span>

                {/* Hover Popover Tooltip Card */}
                {activeIsland?.id === pin.id && (
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-48 sm:w-56 p-2.5 rounded-lg bg-[#140e08]/95 border border-[#c89d55] shadow-2xl z-30 pointer-events-none text-center animate-in fade-in zoom-in-95 duration-150">
                    <div className="flex items-center justify-center gap-1.5 border-b border-[#3d2c1c] pb-1 mb-1">
                      <span className="text-sm">{pin.badge}</span>
                      <h4 className="font-cinzel font-bold text-xs sm:text-sm text-[#f5ca73]">
                        {pin.title}
                      </h4>
                    </div>
                    <p className="text-[10px] sm:text-[11px] text-[#cfbda4] leading-tight font-sans">
                      {pin.desc}
                    </p>
                    <div className="mt-1.5 text-center">
                      <span className="text-[9px] uppercase font-cinzel font-bold text-[#e5be73] tracking-widest">
                        Click to Open Page ➔
                      </span>
                    </div>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Legend / Quick Travel Bar under Map */}
        <div className="w-full mt-4 p-3 rounded-xl bg-[#140e08]/90 border border-[#3d2c1b] flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-[#cbb89b]">
            <FaCompass className="text-[#c89d55] animate-[spin_20s_linear_infinite]" size={16} />
            <span className="font-cinzel text-xs font-semibold text-[#f0cb79]">
              Navigational Coordinates:
            </span>
            <span className="hidden sm:inline text-[#988266]">
              Click on any text banner or island icon on the map to sail directly to that page!
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {ISLAND_PINS.filter((p) => !p.isMotto).map((pin) => (
              <button
                key={pin.id}
                onClick={() => handlePinClick(pin)}
                className="px-2.5 py-1 rounded bg-[#20150c] border border-[#5a4228] hover:border-[#c89d55] text-[#d6c19f] hover:text-[#f7cd78] font-cinzel text-[11px] font-medium transition-all hover:scale-105 cursor-pointer"
              >
                {pin.badge} {pin.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </PirateLayout>
  );
};

export default HomePage;
