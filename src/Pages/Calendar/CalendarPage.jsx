import React, { useState } from "react";
import PirateLayout from "../../components/PirateTheme/PirateLayout";
import ParchmentScroll from "../../components/PirateTheme/ParchmentScroll";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CalendarPage = () => {
  const [currentMonth, setCurrentMonth] = useState({ name: "November", year: 2025 });

  const startDay = 6; // Saturday
  const daysInMonth = 30;
  const calendarDays = [];
  for (let i = 0; i < startDay; i++) {
    calendarDays.push(null);
  }
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }

  const highlightedDays = [12, 13, 14];

  return (
    <PirateLayout activeNav="Events">
      <div className="max-w-2xl mx-auto py-4">
        <ParchmentScroll>
          <div className="text-center mb-3">
            <h1 className="font-fondamento italic text-2xl sm:text-3xl font-bold text-[#2a1708]">
              Events Calendar 2025-26
            </h1>

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
          <div className="grid grid-cols-7 gap-1 text-center font-cinzel text-xs font-semibold text-[#543b22] py-1 border-b border-[#ab854a]/30">
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
                return <div key={`empty-${idx}`} className="h-8" />;
              }

              const isHighlighted = highlightedDays.includes(day);

              return (
                <div key={`day-${day}`} className="h-8 flex items-center justify-center">
                  <span
                    className={`w-8 h-8 flex items-center justify-center rounded-md font-medium transition-all ${
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

          {/* Event description */}
          <div className="mt-4 pt-3 border-t border-[#ab854a]/20 text-center text-xs font-serif text-[#54381e] italic">
            Nov 12-14: Annual Technical Symposium & Flagship Hackathon
          </div>
        </ParchmentScroll>
      </div>
    </PirateLayout>
  );
};

export default CalendarPage;
