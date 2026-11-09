import React, { useState } from "react";
import PirateLayout from "../../components/PirateTheme/PirateLayout";
import ParchmentScroll from "../../components/PirateTheme/ParchmentScroll";
import events from "./Events";
import { FaChevronLeft, FaChevronRight, FaCog } from "react-icons/fa";

const EventsPage = () => {
  const [currentEventIdx, setCurrentEventIdx] = useState(0);
  const [currentMonth, setCurrentMonth] = useState({ name: "November", year: 2025 });

  const activeEvent = events[currentEventIdx] || events[0];

  const handlePrevEvent = () => {
    setCurrentEventIdx((prev) => (prev === 0 ? events.length - 1 : prev - 1));
  };

  const handleNextEvent = () => {
    setCurrentEventIdx((prev) => (prev === events.length - 1 ? 0 : prev + 1));
  };

  // Calendar dates for November 2025 (November 1, 2025 is Saturday)
  // 6 blank days before Saturday: Sun=0, Mon=1, Tue=2, Wed=3, Thu=4, Fri=5, Sat=6
  const startDay = 6; // Saturday
  const daysInMonth = 30;
  const calendarDays = [];
  for (let i = 0; i < startDay; i++) {
    calendarDays.push(null);
  }
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }

  // Highlighted event days: 12, 13, 14
  const highlightedDays = [12, 13, 14];

  return (
    <PirateLayout activeNav="Events">
      <div className="max-w-7xl mx-auto py-2">
        {/* Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          {/* Left Column: Stack of Two Parchment Scrolls */}
          <div className="lg:col-span-6 flex flex-col space-y-5">
            {/* 1. About ECE Society Scroll */}
            <ParchmentScroll>
              <div className="flex items-center justify-center gap-2 mb-2 pb-1 border-b border-[#a88247]/30">
                <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-[#1b1006] text-center">
                  About ECE Society
                </h2>
                <FaCog className="text-[#64441f] text-base animate-[spin_10s_linear_infinite]" />
              </div>

              <p className="text-xs sm:text-[13px] leading-relaxed text-[#2c1d11] text-justify font-sans">
                The Society of Electronics and Communication Engineering (ECE) is dedicated to
                fostering technical innovation, creativity, and hands-on learning among
                students. Every year, the ECE Society organizes a diverse range of events that
                cater to the technical interests of its members, from coding to exciting
                electronics-based activities, events are designed to engage students in real-world
                problem solving while promoting teamwork, innovation, and fun.
              </p>
            </ParchmentScroll>

            {/* 2. Events Calendar Scroll */}
            <ParchmentScroll>
              <div className="text-center mb-2">
                <h3 className="font-fondamento italic text-xl sm:text-2xl font-bold text-[#2a1708]">
                  Events Calendar 2025-26
                </h3>

                {/* Month Navigator */}
                <div className="flex items-center justify-center gap-4 mt-2 text-xs sm:text-sm font-cinzel font-bold text-[#1e1005]">
                  <button
                    onClick={() => setCurrentMonth({ name: "October", year: 2025 })}
                    className="hover:text-[#9c7333] transition-colors p-1"
                  >
                    <FaChevronLeft size={10} />
                  </button>
                  <span>
                    {currentMonth.name} {currentMonth.year}
                  </span>
                  <button
                    onClick={() => setCurrentMonth({ name: "December", year: 2025 })}
                    className="hover:text-[#9c7333] transition-colors p-1"
                  >
                    <FaChevronRight size={10} />
                  </button>
                </div>
              </div>

              {/* Days of week header */}
              <div className="grid grid-cols-7 gap-1 text-center font-cinzel text-[11px] font-semibold text-[#543b22] py-1 border-b border-[#ab854a]/30">
                <span>Sun</span>
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
              </div>

              {/* Calendar Days Grid */}
              <div className="grid grid-cols-7 gap-1 text-center text-xs sm:text-sm font-sans pt-2">
                {calendarDays.map((day, idx) => {
                  if (day === null) {
                    return <div key={`empty-${idx}`} className="h-7 sm:h-8" />;
                  }

                  const isHighlighted = highlightedDays.includes(day);

                  return (
                    <div
                      key={`day-${day}`}
                      className="h-7 sm:h-8 flex items-center justify-center"
                    >
                      <span
                        className={`w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-md font-medium transition-all ${
                          isHighlighted
                            ? "border-2 border-[#b88c3a] bg-[#f0d191] text-[#1a1005] font-bold shadow-sm scale-105"
                            : "text-[#2e1f13] hover:bg-[#ebd5a7]/50"
                        }`}
                      >
                        {day}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Event highlight legend */}
              <div className="mt-3 pt-2 border-t border-[#ab854a]/20 flex items-center justify-center gap-2 text-[11px] font-serif text-[#54381e] italic">
                <span className="w-3 h-3 rounded border border-[#b88c3a] bg-[#f0d191] inline-block"></span>
                <span>Nov 12-14: Annual Technical Symposium & Flagship Hackathon</span>
              </div>
            </ParchmentScroll>
          </div>

          {/* Right Column: Tall Parchment Scroll with Event Showcase */}
          <div className="lg:col-span-6">
            <ParchmentScroll className="h-full">
              {/* Event Photo */}
              <div className="rounded-lg overflow-hidden border border-[#8a6839] shadow-inner max-h-[300px] sm:max-h-[340px] bg-[#1a1209]">
                <img
                  src={activeEvent.image}
                  alt={activeEvent.name}
                  className="w-full h-full object-cover object-center max-h-[320px] transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Event Carousel Navigator */}
              <div className="mt-4 flex flex-col items-center">
                <div className="flex items-center justify-between w-full px-2 sm:px-6">
                  <button
                    onClick={handlePrevEvent}
                    className="p-2 text-[#4a2e13] hover:text-[#0b0704] hover:scale-125 transition-transform"
                    title="Previous event"
                  >
                    <FaChevronLeft size={16} />
                  </button>

                  <h3 className="font-cinzel text-lg sm:text-xl font-extrabold text-[#1a1006] tracking-wider text-center">
                    {activeEvent.name}
                  </h3>

                  <button
                    onClick={handleNextEvent}
                    className="p-2 text-[#4a2e13] hover:text-[#0b0704] hover:scale-125 transition-transform"
                    title="Next event"
                  >
                    <FaChevronRight size={16} />
                  </button>
                </div>

                {/* Golden Progress Bar Indicator */}
                <div className="w-48 sm:w-64 h-1 bg-[#baa171]/40 rounded-full mt-1 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#9c7333] via-[#e5bf73] to-[#9c7333] transition-all duration-300 rounded-full"
                    style={{
                      width: `${((currentEventIdx + 1) / events.length) * 100}%`,
                    }}
                  />
                </div>
              </div>

              {/* Event Description Text */}
              <div className="mt-4 px-1 sm:px-3 text-xs sm:text-sm text-[#2b1c10] leading-relaxed font-sans text-justify">
                <p>{activeEvent.description}</p>
              </div>

              {/* Events count counter */}
              <div className="mt-4 text-center text-[11px] font-cinzel text-[#6d4d27]">
                Event {currentEventIdx + 1} of {events.length}
              </div>
            </ParchmentScroll>
          </div>
        </div>
      </div>
    </PirateLayout>
  );
};

export default EventsPage;
