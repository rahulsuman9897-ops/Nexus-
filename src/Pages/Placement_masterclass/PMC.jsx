import React, { useState } from "react";
import PirateLayout from "../../components/PirateTheme/PirateLayout";
import { PMCData } from "./PMCData.js";
import { WaxSealStamp } from "../../components/PirateTheme/PirateIcons";
import { FaTimes } from "react-icons/fa";

const HorizontalScrollCard = ({ member, onOpenModal }) => {
  return (
    <div className="relative group transition-transform duration-200 hover:-translate-y-1">
      {/* Scroll Cylinder Ends: Left Roll */}
      <div
        className="absolute -left-2 top-0 bottom-0 w-3 rounded-l-md z-20 shadow-md"
        style={{
          background: "linear-gradient(90deg, #7a5423 0%, #caa163 35%, #fff2cf 60%, #9b7235 100%)",
          boxShadow: "inset -1px 0 2px rgba(0,0,0,0.4)",
        }}
      />

      {/* Main Parchment Card Body */}
      <div
        className="relative z-10 rounded-md p-3 sm:p-4 flex items-center justify-between border-y border-[#8e6833] overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #ecd6a4 0%, #f6e6c2 15%, #fbf2db 50%, #f2ddb2 85%, #e5c993 100%)",
          boxShadow: "0 6px 14px rgba(0,0,0,0.6), inset 0 2px 4px rgba(255,255,255,0.4)",
        }}
      >
        {/* Left Side: Photo + Name + Read More Button */}
        <div className="flex items-center gap-3 sm:gap-4 z-10">
          {/* Member Photo */}
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-md overflow-hidden border-2 border-[#8f6d3a] bg-[#1a1209] shadow-inner flex-shrink-0">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Name & Read More */}
          <div className="flex flex-col">
            <h3 className="font-cinzel font-bold text-sm sm:text-base text-[#1b1006] tracking-wide leading-tight">
              {member.name}
            </h3>

            <button
              onClick={() => onOpenModal(member)}
              className="mt-2 self-start px-3 py-1 rounded border border-[#6b4c23] bg-[#ddbe8a] hover:bg-[#c9a76d] text-[#1a1005] font-cinzel font-bold text-[10px] sm:text-xs tracking-wider transition-all shadow-sm active:scale-95"
            >
              Read More
            </button>
          </div>
        </div>

        {/* Right Side: Company Logo */}
        <div className="flex items-center justify-end z-10 max-w-[100px] sm:max-w-[120px] max-h-12">
          {member.logo && (
            <img
              src={member.logo}
              alt="Company Logo"
              className="max-h-10 sm:max-h-12 w-auto object-contain filter drop-shadow-sm"
            />
          )}
        </div>

        {/* Wax Seal Stamp (bottom center-right) */}
        <div className="absolute right-24 sm:right-32 -bottom-2 z-20 pointer-events-none">
          <WaxSealStamp className="w-8 h-9 sm:w-9 sm:h-10" />
        </div>
      </div>

      {/* Scroll Cylinder Ends: Right Roll */}
      <div
        className="absolute -right-2 top-0 bottom-0 w-3 rounded-r-md z-20 shadow-md"
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

  // Batch Selector Dropdown for Top Navbar
  const batchDropdown = (
    <div className="relative">
      <button
        onClick={() => setBatchDropdownOpen(!batchDropdownOpen)}
        className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#c89d55] bg-[#1a130b] text-[#e8c782] text-xs font-cinzel font-medium hover:bg-[#251b11] transition-colors shadow-md"
      >
        <span>{getBatchLabel(selectedBatch)}</span>
        <span className="text-[10px] text-[#c89d55]">▼</span>
      </button>

      {batchDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-lg bg-[#16100a] border border-[#5a4228] shadow-2xl py-1 z-50 animate-in fade-in duration-150">
          {Object.keys(batches).map((label) => (
            <button
              key={label}
              onClick={() => {
                setSelectedBatch(batches[label]);
                setBatchDropdownOpen(false);
              }}
              className={`w-full text-left px-4 py-2 text-xs font-cinzel transition-colors ${
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
    <PirateLayout activeNav="Placement Masterclass" topBarExtras={batchDropdown}>
      <div className="max-w-6xl mx-auto py-1">
        {/* Wooden Board Container */}
        <div
          className="relative rounded-xl p-4 sm:p-7 border-2 border-[#543b20] shadow-[0_16px_36px_rgba(0,0,0,0.9)] overflow-hidden"
          style={{
            background:
              "linear-gradient(180deg, #181008 0%, #20150b 50%, #150d06 100%)",
          }}
        >
          {/* Subtle wood plank horizontal grain lines */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#a67c38_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

          {/* Banner at top-right corner: Different Islands Same Crew Bigger Dreams */}
          <div className="absolute top-3 right-4 hidden md:flex items-center gap-1.5 px-3 py-1 bg-[#1a1209]/90 border border-[#8a6839] rounded shadow-lg">
            <div className="text-center font-berkshire text-xs text-[#d6b16e]">
              <p className="leading-tight">Different Islands</p>
              <p className="leading-tight">Same Crew</p>
              <p className="leading-tight">Bigger Dreams</p>
            </div>
            <span className="text-base">☠️</span>
          </div>

          {/* Header Section */}
          <div className="text-center mb-6 relative z-10">
            <h1 className="font-cinzel text-2xl sm:text-4xl font-extrabold text-[#f3ca76] tracking-wider drop-shadow-md">
              Masterclass Profiles
            </h1>
          </div>

          {/* 2-Column Grid of Masterclass Scroll Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 relative z-10">
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
