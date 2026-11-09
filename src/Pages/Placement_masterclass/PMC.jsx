import React, { useState } from "react";
import PirateLayout from "../../components/PirateTheme/PirateLayout";
import { PMCData } from "./PMCData.js";
import { WaxSealStamp } from "../../components/PirateTheme/PirateIcons";
import { FaTimes } from "react-icons/fa";

const HorizontalScrollCard = ({ member, onOpenModal }) => {
  return (
    <div className="relative group transition-transform duration-200 hover:-translate-y-1 w-full">
      {/* Scroll Cylinder Ends: Left Roll */}
      <div
        className="absolute -left-2.5 top-0 bottom-0 w-3.5 rounded-l-md z-20 shadow-md"
        style={{
          background: "linear-gradient(90deg, #7a5423 0%, #caa163 35%, #fff2cf 60%, #9b7235 100%)",
          boxShadow: "inset -1px 0 2px rgba(0,0,0,0.4)",
        }}
      />

      {/* Main Parchment Card Body */}
      <div
        className="relative z-10 rounded-md p-4 sm:p-5 flex items-center justify-between border-y-2 border-[#8e6833] overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #ecd6a4 0%, #f6e6c2 15%, #fbf2db 50%, #f2ddb2 85%, #e5c993 100%)",
          boxShadow: "0 8px 18px rgba(0,0,0,0.65), inset 0 2px 4px rgba(255,255,255,0.4)",
        }}
      >
        {/* Subtle Map / Cartography Watermark Grid Texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.06] bg-repeat"
          style={{
            backgroundImage: `radial-gradient(#5a3916 1px, transparent 1px), linear-gradient(to right, rgba(90,57,22,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(90,57,22,0.2) 1px, transparent 1px)`,
            backgroundSize: "20px 20px, 40px 40px, 40px 40px",
          }}
        />

        {/* Left Side: Photo + Name + Read More Button */}
        <div className="flex items-center gap-4 sm:gap-6 z-10">
          {/* Member Photo */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border-2 border-[#8f6d3a] bg-[#1a1209] shadow-inner flex-shrink-0">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Name & Read More */}
          <div className="flex flex-col">
            <h3 className="font-cinzel font-bold text-base sm:text-xl text-[#1b1006] tracking-wide leading-tight">
              {member.name}
            </h3>

            <button
              onClick={() => onOpenModal(member)}
              className="mt-2.5 self-start px-4 py-1.5 rounded border border-[#6b4c23] bg-[#ddbe8a] hover:bg-[#c9a76d] text-[#1a1005] font-cinzel font-bold text-xs sm:text-sm tracking-wider transition-all shadow-md active:scale-95"
            >
              Read More
            </button>
          </div>
        </div>

        {/* Right Side: Company Logo */}
        <div className="flex items-center justify-end z-10 max-w-[130px] sm:max-w-[170px] max-h-14 pr-3 sm:pr-8">
          {member.logo && (
            <img
              src={member.logo}
              alt="Company Logo"
              className="max-h-10 sm:max-h-12 w-auto object-contain filter drop-shadow-sm"
            />
          )}
        </div>

        {/* Wax Seal Stamp (bottom center-right) */}
        <div className="absolute right-36 sm:right-56 -bottom-2 z-20 pointer-events-none">
          <WaxSealStamp className="w-8 h-9 sm:w-10 sm:h-11" />
        </div>
      </div>

      {/* Scroll Cylinder Ends: Right Roll */}
      <div
        className="absolute -right-2.5 top-0 bottom-0 w-3.5 rounded-r-md z-20 shadow-md"
        style={{
          background: "linear-gradient(90deg, #9b7235 0%, #fff2cf 40%, #caa163 65%, #7a5423 100%)",
          boxShadow: "inset 1px 0 2px rgba(0,0,0,0.4)",
        }}
      />
    </div>
  );
};

const Masterclass = () => {
  const [selectedBatch, setSelectedBatch] = useState(24);
  const [modalMember, setModalMember] = useState(null);
  const [batchDropdownOpen, setBatchDropdownOpen] = useState(false);

  const batches = {
    "Batch 2k21-2k25": 25,
    "Batch 2k20-2k24": 24,
    "Batch 2k19-2k23": 23,
  };

  const getBatchLabel = (batchNum) => {
    return Object.keys(batches).find((key) => batches[key] === batchNum) || "Batch 2k20-2k24";
  };

  const filteredMembers = PMCData.filter((item) => item.batch === selectedBatch);

  // Batch Selector Dropdown (Centered)
  const batchDropdown = (
    <div className="relative inline-block z-40">
      <button
        onClick={() => setBatchDropdownOpen(!batchDropdownOpen)}
        className="flex items-center gap-3 px-6 py-2 rounded-full border-2 border-[#8a6839] bg-[#160f08] text-[#f5ca73] text-sm font-cinzel font-semibold hover:border-[#d4af37] hover:bg-[#22160b] transition-all shadow-xl cursor-pointer"
      >
        <span>{getBatchLabel(selectedBatch)}</span>
        <span className="text-xs text-[#d4af37]">▼</span>
      </button>

      {batchDropdownOpen && (
        <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-52 rounded-lg bg-[#16100a] border-2 border-[#8a6839] shadow-2xl py-1 z-50 animate-in fade-in duration-150">
          {Object.keys(batches).map((label) => (
            <button
              key={label}
              onClick={() => {
                setSelectedBatch(batches[label]);
                setBatchDropdownOpen(false);
              }}
              className={`w-full text-center px-4 py-2 text-xs font-cinzel transition-colors cursor-pointer ${
                selectedBatch === batches[label]
                  ? "bg-[#2c1d0e] text-[#f5ca73] font-bold"
                  : "text-[#cbb89b] hover:bg-[#22160b] hover:text-[#f0cf85]"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <PirateLayout activeNav="Placement Masterclass">
      <div className="max-w-5xl mx-auto py-1">
        {/* Wooden Board Container */}
        <div
          className="relative rounded-xl p-4 sm:p-7 border-2 border-[#543b20] shadow-[0_16px_36px_rgba(0,0,0,0.9)]"
          style={{
            background:
              "linear-gradient(180deg, #181008 0%, #20150b 50%, #150d06 100%)",
          }}
        >
          {/* Subtle wood plank horizontal grain lines */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#a67c38_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none rounded-xl" />

          {/* Header Section (Centered Title & Centered Batch Button with high z-index) */}
          <div className="text-center mb-10 sm:mb-12 relative z-30 flex flex-col items-center">
            <h1 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-[#f3ca76] tracking-wider drop-shadow-md">
              Placement Masterclass
            </h1>
            <p className="font-cinzel text-xs sm:text-sm font-semibold text-[#c89d55] tracking-widest uppercase mt-1">
              BY SECE
            </p>

            {/* Batch Selector Button in Center */}
            <div className="mt-4 relative z-40">
              {batchDropdown}
            </div>
          </div>

          {/* 1-Column Grid (1 card per row) */}
          <div className="flex flex-col gap-5 sm:gap-6 max-w-4xl mx-auto relative z-10">
            {filteredMembers.map((member, idx) => (
              <HorizontalScrollCard
                key={idx}
                member={member}
                onOpenModal={setModalMember}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Large Banner Popup Modal for Read More */}
      {modalMember && (
        <div
          className="fixed inset-0 bg-black/85 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setModalMember(null)}
        >
          <div
            className="relative max-w-3xl max-h-[90vh] bg-[#120d08] border-2 border-[#a67c38] rounded-xl p-3 shadow-2xl overflow-hidden flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalMember(null)}
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#20150c] border border-[#a67c38] text-[#f3ca76] flex items-center justify-center hover:bg-[#a67c38] hover:text-[#120d08] transition-colors z-20"
              title="Close"
            >
              <FaTimes size={14} />
            </button>

            <div className="w-full overflow-y-auto rounded-lg">
              <img
                src={modalMember.pmc}
                alt={`${modalMember.name} Placement Masterclass`}
                className="w-full h-auto object-contain rounded"
              />
            </div>

            <div className="mt-3 flex items-center justify-between w-full px-2 text-xs font-cinzel text-[#d4af37]">
              <span>{modalMember.name}</span>
              <span>Society of Electronics and Communication</span>
            </div>
          </div>
        </div>
      )}
    </PirateLayout>
  );
};

export default Masterclass;
