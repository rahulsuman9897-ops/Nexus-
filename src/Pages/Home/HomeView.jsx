import React from "react";
import { Link } from "react-router-dom";
import PirateLayout from "../../components/PirateTheme/PirateLayout";
import ParchmentScroll from "../../components/PirateTheme/ParchmentScroll";
import { ShipWheelIcon, CrossedSwordsIcon } from "../../components/PirateTheme/PirateIcons";
import aboutPhoto from "../../assets/about-photo2.png";
import nexusPhoto from "../../assets/nexus-photo2.jpg";
import eventPhoto from "../../assets/event_photos2.jpg";
import seceLogo from "../../assets/sece_logo.png";
import { FaCalendarAlt, FaUsers, FaGraduationCap, FaMapMarkedAlt, FaCompass } from "react-icons/fa";

const HomeView = () => {
  return (
    <PirateLayout activeNav="Home">
      <div className="max-w-6xl mx-auto py-2 space-y-8">
        {/* Hero Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#8a6839] bg-[#1a1208]/80 text-[#d4af37] text-xs font-cinzel">
            <ShipWheelIcon className="w-3.5 h-3.5" color="#d4af37" />
            <span>Official Flagship Basecamp</span>
          </div>

          <h1 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-[#f3ca76] tracking-wider drop-shadow-md">
            Society of Electronics & Communication
          </h1>
          <p className="text-xs sm:text-base font-serif italic text-[#cbb89b] max-w-2xl mx-auto">
            Shaping Electronics • Transforming Communication • Connecting the Future
          </p>
          <p className="text-[11px] sm:text-xs font-sans text-[#9e886d] uppercase tracking-widest">
            Department of ECE • National Institute of Technology Jamshedpur
          </p>

          <div className="pt-2 flex justify-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#20150b] border border-[#a67c38] text-[#f5ca73] hover:bg-[#8a6839] hover:text-[#140e08] font-cinzel text-xs font-bold transition-all shadow-lg hover:scale-105"
            >
              <FaMapMarkedAlt size={14} />
              <span>Explore Treasure Map</span>
            </Link>
          </div>
        </div>

        {/* About Us Scroll */}
        <ParchmentScroll className="max-w-4xl mx-auto">
          <div className="py-2 px-2 sm:px-6">
            <div className="text-center pb-4 mb-4 border-b border-[#8a6839]/30">
              <span className="text-[11px] font-cinzel uppercase tracking-widest text-[#735025] font-bold">
                About Our Society
              </span>
              <h2 className="font-fondamento italic text-2xl sm:text-3xl font-bold text-[#1b1005]">
                Where Innovation Meets Excellence
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="space-y-3 text-xs sm:text-sm font-serif text-[#3d2a17] leading-relaxed text-justify">
                <p>
                  Welcome to the <strong>Society of Electronics and Communication Engineering (SECE)</strong>,
                  where innovation meets excellence in the realm of advancing technology.
                  Our vision is to create a dynamic space where fresh ideas can be turned into reality
                  through passion, teamwork, and technical determination.
                </p>
                <p>
                  We organize a wide spectrum of events, workshops, hackathons, and webinars throughout
                  the academic year to keep students at the forefront of modern semiconductor engineering,
                  embedded systems, competitive programming, and cutting-edge software domains.
                </p>
                <p className="italic font-semibold text-[#543b22]">
                  "Different Islands • Same Crew • Bigger Dreams"
                </p>
              </div>

              <div className="relative rounded-xl overflow-hidden border-2 border-[#735025] shadow-xl bg-[#1b1208]">
                <img
                  src={aboutPhoto}
                  alt="SECE Team and Department"
                  className="w-full h-56 sm:h-64 object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0a06]/80 via-transparent to-transparent flex items-end p-3">
                  <span className="font-cinzel text-[11px] text-[#f5ca73] font-bold">
                    ECE Department • NIT Jamshedpur
                  </span>
                </div>
              </div>
            </div>
          </div>
        </ParchmentScroll>

        {/* Society Pillars / Main Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Nexus Fest Card */}
          <div
            className="rounded-xl p-5 border-2 border-[#8a6839]/70 shadow-xl flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1"
            style={{
              background:
                "linear-gradient(180deg, #ecd6a4 0%, #f6e6c2 25%, #fbf2db 60%, #e8cca0 100%)",
            }}
          >
            <div className="space-y-3">
              <div className="relative rounded-lg overflow-hidden border border-[#8a6839] h-40 bg-[#160f08]">
                <img
                  src={nexusPhoto}
                  alt="Nexus Fest"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 left-2 px-2.5 py-1 rounded bg-[#160f08]/90 border border-[#8a6839] text-[#f5ca73] font-cinzel text-[10px] font-bold flex items-center gap-1.5">
                  <CrossedSwordsIcon className="w-3.5 h-3.5" color="#f5ca73" />
                  <span>Annual Flagship Fest</span>
                </div>
              </div>

              <h3 className="font-cinzel font-bold text-lg text-[#1a0f05]">
                Nexus — Where Fun Meets Brilliance!
              </h3>
              <p className="text-xs font-serif text-[#4a3521] leading-relaxed text-justify">
                Nexus is the signature fest of the ECE department at NIT Jamshedpur, celebrated
                every October or November. A three-day extravaganza combining robotics battles,
                Decoduino IoT competitions, CP contests, and vibrant cultural nights.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-[#8a6839]/30 flex justify-end">
              <Link
                to="/nexus"
                className="px-3.5 py-1.5 rounded-md bg-[#1c1209] text-[#ecd8b0] hover:bg-[#8a6839] hover:text-[#1c1209] font-cinzel text-xs font-bold transition-colors"
              >
                Discover Nexus ➔
              </Link>
            </div>
          </div>

          {/* Events & Competitions Card */}
          <div
            className="rounded-xl p-5 border-2 border-[#8a6839]/70 shadow-xl flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1"
            style={{
              background:
                "linear-gradient(180deg, #ecd6a4 0%, #f6e6c2 25%, #fbf2db 60%, #e8cca0 100%)",
            }}
          >
            <div className="space-y-3">
              <div className="relative rounded-lg overflow-hidden border border-[#8a6839] h-40 bg-[#160f08]">
                <img
                  src={eventPhoto}
                  alt="SECE Events"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 left-2 px-2.5 py-1 rounded bg-[#160f08]/90 border border-[#8a6839] text-[#f5ca73] font-cinzel text-[10px] font-bold flex items-center gap-1.5">
                  <FaCalendarAlt size={11} />
                  <span>Technical & Cultural</span>
                </div>
              </div>

              <h3 className="font-cinzel font-bold text-lg text-[#1a0f05]">
                Year-Round Events & Workshops
              </h3>
              <p className="text-xs font-serif text-[#4a3521] leading-relaxed text-justify">
                SECE conducts high-impact programming contests, technical hands-on sessions,
                robotics workshops, and circuit design challenges to nurture core engineering
                and problem-solving skills across the campus.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-[#8a6839]/30 flex justify-end">
              <Link
                to="/events"
                className="px-3.5 py-1.5 rounded-md bg-[#1c1209] text-[#ecd8b0] hover:bg-[#8a6839] hover:text-[#1c1209] font-cinzel text-xs font-bold transition-colors"
              >
                Explore Events ➔
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Island Hop Links */}
        <div className="max-w-4xl mx-auto p-4 rounded-xl bg-[#140e08]/90 border border-[#3d2c1b] flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-[#cbb89b]">
            <FaCompass className="text-[#c89d55] animate-[spin_20s_linear_infinite]" size={16} />
            <span className="font-cinzel text-xs font-semibold text-[#f0cb79]">
              Sail to Other Destinations:
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <Link
              to="/"
              className="px-3 py-1 rounded bg-[#20150c] border border-[#5a4228] hover:border-[#c89d55] text-[#d6c19f] hover:text-[#f7cd78] font-cinzel text-[11px] font-medium transition-colors"
            >
              🗺️ Treasure Map
            </Link>
            <Link
              to="/placement_masterclass"
              className="px-3 py-1 rounded bg-[#20150c] border border-[#5a4228] hover:border-[#c89d55] text-[#d6c19f] hover:text-[#f7cd78] font-cinzel text-[11px] font-medium transition-colors"
            >
              🎓 Masterclass
            </Link>
            <Link
              to="/alumni"
              className="px-3 py-1 rounded bg-[#20150c] border border-[#5a4228] hover:border-[#c89d55] text-[#d6c19f] hover:text-[#f7cd78] font-cinzel text-[11px] font-medium transition-colors"
            >
              ⚓ Alumni
            </Link>
            <Link
              to="/team"
              className="px-3 py-1 rounded bg-[#20150c] border border-[#5a4228] hover:border-[#c89d55] text-[#d6c19f] hover:text-[#f7cd78] font-cinzel text-[11px] font-medium transition-colors"
            >
              👥 Team
            </Link>
          </div>
        </div>
      </div>
    </PirateLayout>
  );
};

export default HomeView;
