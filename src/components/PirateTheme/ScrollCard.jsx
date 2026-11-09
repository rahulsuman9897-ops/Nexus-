import React from "react";

/**
 * Authentic Antique Map-Scroll Card.
 * Designed to look unmistakably like an antique rolled treasure map scroll:
 * - Prominent 3D cylindrical rolls (top and bottom) that extend slightly beyond the paper with curled scroll ends
 * - Authentic cartographic parchment paper body with inner double-line map border and nautical corner fleurons
 * - Subtle background navigation rhumb lines and faint compass rose watermark
 * - Clean straight vertical edges (no jagged cutout bites)
 */
export const ScrollCard = ({
  children,
  className = "",
  cornerCoord = "23°N • 86°E",
  landmarkTag,
}) => {
  return (
    <div
      className={`group relative flex flex-col items-center w-full transition-all duration-300 hover:-translate-y-2.5 drop-shadow-[0_16px_28px_rgba(0,0,0,0.85)] hover:drop-shadow-[0_24px_38px_rgba(0,0,0,0.95)] ${className}`}
    >
      {/* ================= TOP SCROLL ROLL (Curled Cylinder) ================= */}
      <div className="w-[103%] relative z-20 flex items-center justify-center">
        {/* Left 3D Curled Paper End */}
        <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 sm:w-5 h-7 sm:h-8 rounded-full bg-gradient-to-r from-[#2c1706] via-[#5c3a17] to-[#996e38] border border-[#231204] shadow-md flex items-center justify-center z-30">
          <div className="w-1.5 sm:w-2 h-4 sm:h-5 rounded-full border border-[#1b0d02] bg-[#120801]/70" />
        </div>

        {/* Cylinder Body */}
        <div
          className="w-full h-8 sm:h-10 rounded-t-md relative flex items-center justify-center overflow-hidden border-t-2 border-[#946e37]"
          style={{
            background:
              "linear-gradient(180deg, #44270a 0%, #7e5623 12%, #caa163 28%, #fae8be 45%, #fff9ec 55%, #d9b47a 75%, #633f15 92%, #221203 100%)",
            boxShadow:
              "0 6px 12px rgba(0,0,0,0.65), inset 0 2px 4px rgba(255,255,255,0.7), inset 0 -2px 3px rgba(0,0,0,0.7)",
          }}
        >
          {/* Paper Roll Crease / Sheen Line */}
          <div className="w-4/5 h-[1.5px] bg-white/70 blur-[0.5px]" />

          {/* Wooden / Brass Roll Knobs */}
          <div className="absolute left-1 top-0 bottom-0 w-2.5 bg-[#3a200a] border-r border-[#8f6d3a]/80 shadow-inner" />
          <div className="absolute right-1 top-0 bottom-0 w-2.5 bg-[#3a200a] border-l border-[#8f6d3a]/80 shadow-inner" />
        </div>

        {/* Right 3D Curled Paper End */}
        <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 sm:w-5 h-7 sm:h-8 rounded-full bg-gradient-to-l from-[#2c1706] via-[#5c3a17] to-[#996e38] border border-[#231204] shadow-md flex items-center justify-center z-30">
          <div className="w-1.5 sm:w-2 h-4 sm:h-5 rounded-full border border-[#1b0d02] bg-[#120801]/70" />
        </div>
      </div>

      {/* ================= MAIN PARCHMENT MAP BODY ================= */}
      {/* Slightly narrower than the rolls so the rolls clearly overhang like an actual scroll */}
      <div
        className="w-[95%] sm:w-[96%] relative -mt-1 -mb-1 px-4 sm:px-6 py-6 text-[#2c1d11] transition-all overflow-hidden border-x-2 border-[#7a5526] z-10 flex flex-col items-center"
        style={{
          background:
            "linear-gradient(180deg, #ecd197 0%, #f7e6bd 10%, #fbf3dc 50%, #f4dcaf 88%, #e6c890 100%)",
          boxShadow:
            "inset 20px 0 28px -10px rgba(97, 62, 23, 0.5), inset -20px 0 28px -10px rgba(97, 62, 23, 0.5), inset 0 16px 20px -8px rgba(60, 36, 12, 0.65), inset 0 -16px 20px -8px rgba(60, 36, 12, 0.65)",
        }}
      >
        {/* Cartographic Navigation Rhumb Lines & Grid Watermark */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.09] bg-repeat"
          style={{
            backgroundImage: `
              radial-gradient(#4a2b0c 1.2px, transparent 1.2px),
              linear-gradient(to right, rgba(74,43,12,0.22) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(74,43,12,0.22) 1px, transparent 1px)
            `,
            backgroundSize: "22px 22px, 44px 44px, 44px 44px",
          }}
        />

        {/* Faint Antique Compass Rose Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.07] text-[#422509]">
          <svg className="w-56 h-56" viewBox="0 0 100 100" fill="currentColor">
            {/* Compass Star & Circle */}
            <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2" />
            <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.8" />
            <polygon points="50,2 54,42 98,50 54,58 50,98 46,58 2,50 46,42" />
          </svg>
        </div>

        {/* Antique Map Double-Line Border Frame */}
        <div className="absolute inset-2 sm:inset-2.5 pointer-events-none border border-[#855e2d]/60 rounded-sm">
          {/* Inner Secondary Fine Line */}
          <div className="absolute inset-1 border border-[#855e2d]/30" />

          {/* 4 Nautical Corner Fleurons */}
          <span className="absolute -top-1.5 -left-1.5 text-[#634017] text-[10px] leading-none font-serif">✦</span>
          <span className="absolute -top-1.5 -right-1.5 text-[#634017] text-[10px] leading-none font-serif">✦</span>
          <span className="absolute -bottom-1.5 -left-1.5 text-[#634017] text-[10px] leading-none font-serif">✦</span>
          <span className="absolute -bottom-1.5 -right-1.5 text-[#634017] text-[10px] leading-none font-serif">✦</span>

          {/* Top Border Coordinate Tick */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-2 bg-[#f9edd0] text-[8px] font-cinzel font-bold text-[#7d5626] tracking-widest uppercase border border-[#855e2d]/40 rounded-sm">
            SECE MAP CHART
          </div>
        </div>

        {/* Card Content Container */}
        <div className="relative z-10 w-full flex flex-col items-center pt-2 pb-1">
          {children}
        </div>

        {/* Bottom Coordinates & Nautical Seal */}
        <div className="relative z-10 w-full mt-3 pt-2 border-t border-[#855e2d]/25 flex items-center justify-between text-[9px] font-cinzel text-[#6d4619] font-bold px-2">
          <span className="flex items-center gap-1 opacity-75">
            <span className="text-[#a62b2b]">⚓</span> {landmarkTag || "Crew Pin"}
          </span>
          <span className="tracking-widest opacity-65 font-mono text-[8px]">
            {cornerCoord}
          </span>
        </div>
      </div>

      {/* ================= BOTTOM SCROLL ROLL (Curled Cylinder) ================= */}
      <div className="w-[103%] relative z-20 flex items-center justify-center">
        {/* Left 3D Curled Paper End */}
        <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 sm:w-5 h-7 sm:h-8 rounded-full bg-gradient-to-r from-[#2c1706] via-[#5c3a17] to-[#996e38] border border-[#231204] shadow-md flex items-center justify-center z-30">
          <div className="w-1.5 sm:w-2 h-4 sm:h-5 rounded-full border border-[#1b0d02] bg-[#120801]/70" />
        </div>

        {/* Cylinder Body */}
        <div
          className="w-full h-8 sm:h-10 rounded-b-md relative flex items-center justify-center overflow-hidden border-b-2 border-[#54340e]"
          style={{
            background:
              "linear-gradient(180deg, #221203 0%, #633f15 8%, #d9b47a 25%, #fff9ec 45%, #fae8be 55%, #caa163 72%, #7e5623 88%, #44270a 100%)",
            boxShadow:
              "0 -4px 10px rgba(0,0,0,0.5), inset 0 -2px 4px rgba(255,255,255,0.6), inset 0 2px 3px rgba(0,0,0,0.6)",
          }}
        >
          {/* Paper Roll Crease / Sheen Line */}
          <div className="w-4/5 h-[1.5px] bg-white/60 blur-[0.5px]" />

          {/* Wooden / Brass Roll Knobs */}
          <div className="absolute left-1 top-0 bottom-0 w-2.5 bg-[#3a200a] border-r border-[#8f6d3a]/80 shadow-inner" />
          <div className="absolute right-1 top-0 bottom-0 w-2.5 bg-[#3a200a] border-l border-[#8f6d3a]/80 shadow-inner" />
        </div>

        {/* Right 3D Curled Paper End */}
        <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 sm:w-5 h-7 sm:h-8 rounded-full bg-gradient-to-l from-[#2c1706] via-[#5c3a17] to-[#996e38] border border-[#231204] shadow-md flex items-center justify-center z-30">
          <div className="w-1.5 sm:w-2 h-4 sm:h-5 rounded-full border border-[#1b0d02] bg-[#120801]/70" />
        </div>
      </div>
    </div>
  );
};

export default ScrollCard;

