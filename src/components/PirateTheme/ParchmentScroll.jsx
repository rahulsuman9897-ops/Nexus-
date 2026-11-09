import React from "react";

/**
 * Reusable antique parchment scroll container matching the pirate design.
 * Features realistic rolled top and bottom cylinders with aged paper body.
 */
export const ParchmentScroll = ({
  children,
  className = "",
  title,
  titleStyle = "serif", // "serif" | "cursive"
  extraHeader,
  compact = false,
  maxHeight,
}) => {
  return (
    <div className={`relative flex flex-col items-center w-full my-2 drop-shadow-[0_12px_24px_rgba(0,0,0,0.85)] ${className}`}>
      {/* Top Scroll Roll */}
      <div className="w-full relative z-10 flex flex-col items-center">
        {/* Curled top cylinder */}
        <div
          className="w-full h-8 sm:h-10 rounded-t-lg relative flex items-center justify-center overflow-hidden border-t border-[#8f6d3a]"
          style={{
            background: "linear-gradient(180deg, #bb9355 0%, #ecd7a5 35%, #fff2cf 55%, #caa163 85%, #7a5423 100%)",
            boxShadow: "0 4px 10px rgba(0,0,0,0.5), inset 0 2px 4px rgba(255,255,255,0.6)",
          }}
        >
          {/* Wooden / rolled knobs on sides */}
          <div className="absolute left-0 top-0 bottom-0 w-3 sm:w-4 bg-[#5b3b19] border-r border-[#8f6d3a] shadow-inner"></div>
          <div className="absolute right-0 top-0 bottom-0 w-3 sm:w-4 bg-[#5b3b19] border-l border-[#8f6d3a] shadow-inner"></div>

          {/* Paper roll highlight crease */}
          <div className="w-4/5 h-[1.5px] bg-white/40 blur-[0.5px]"></div>
        </div>
      </div>

      {/* Main Parchment Paper Body */}
      <div
        className="w-[98%] sm:w-[99%] relative -mt-1 -mb-1 px-4 sm:px-8 py-5 text-[#2c1d11] transition-all overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, #ecd6a4 0%, #f6e5be 8%, #fbf1d8 50%, #f2dcaf 92%, #e5c993 100%)",
          boxShadow:
            "inset 16px 0 24px -10px rgba(115, 77, 34, 0.4), inset -16px 0 24px -10px rgba(115, 77, 34, 0.4), inset 0 12px 16px -8px rgba(84, 53, 20, 0.5), inset 0 -12px 16px -8px rgba(84, 53, 20, 0.5), 0 8px 16px rgba(0,0,0,0.6)",
          maxHeight: maxHeight || "none",
        }}
      >
        {/* Ragged/uneven border effect on left and right */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-r from-[#6e4922]/50 to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-l from-[#6e4922]/50 to-transparent pointer-events-none"></div>

        {/* Optional Title Header */}
        {(title || extraHeader) && (
          <div className="mb-3 text-center border-b border-[#bb9355]/40 pb-2">
            {title && (
              <h2
                className={`font-bold tracking-wide text-[#231509] ${
                  titleStyle === "cursive"
                    ? "font-fondamento italic text-2xl sm:text-3xl text-[#3d240d]"
                    : "font-cinzel text-2xl sm:text-3xl text-[#1e1005]"
                }`}
              >
                {title}
              </h2>
            )}
            {extraHeader}
          </div>
        )}

        {/* Parchment Body Content */}
        <div className="relative z-10">{children}</div>
      </div>

      {/* Bottom Scroll Roll */}
      <div className="w-full relative z-10 flex flex-col items-center">
        {/* Curled bottom cylinder */}
        <div
          className="w-full h-8 sm:h-10 rounded-b-lg relative flex items-center justify-center overflow-hidden border-b border-[#634217]"
          style={{
            background: "linear-gradient(180deg, #7a5423 0%, #caa163 15%, #fff2cf 45%, #ecd7a5 65%, #9b7235 100%)",
            boxShadow: "0 -4px 10px rgba(0,0,0,0.4), inset 0 -2px 4px rgba(0,0,0,0.4)",
          }}
        >
          {/* Wooden / rolled knobs on sides */}
          <div className="absolute left-0 top-0 bottom-0 w-3 sm:w-4 bg-[#5b3b19] border-r border-[#8f6d3a] shadow-inner"></div>
          <div className="absolute right-0 top-0 bottom-0 w-3 sm:w-4 bg-[#5b3b19] border-l border-[#8f6d3a] shadow-inner"></div>

          {/* Paper roll highlight crease */}
          <div className="w-4/5 h-[1.5px] bg-white/40 blur-[0.5px]"></div>
        </div>
      </div>
    </div>
  );
};

export default ParchmentScroll;

