import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ShipWheelIcon,
  AnchorIcon,
  CrossedSwordsIcon,
  PirateSkullBadge,
} from "./PirateIcons";
import {
  FaCalendarAlt,
  FaUsers,
  FaGraduationCap,
  FaIdBadge,
  FaHome,
  FaUser,
  FaYoutube,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaBars,
  FaTimes,
  FaEnvelope,
} from "react-icons/fa";

export const NAV_ITEMS = [
  { name: "Map", path: "/", icon: ShipWheelIcon },
  { name: "Events", path: "/events", icon: FaCalendarAlt },
  { name: "Team", path: "/team", icon: FaUsers },
  { name: "Placement Masterclass", path: "/placement_masterclass", icon: FaGraduationCap },
  { name: "Alumni", path: "/alumni", icon: FaIdBadge },
  { name: "Nexus", path: "/nexus", icon: CrossedSwordsIcon },
  { name: "Home", path: "/home", icon: FaHome },
  { name: "Profile", path: "#profile", icon: FaUser, isAction: true },
];

const PirateLayout = ({ children, activeNav, topBarExtras }) => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  // Determine current active item
  const currentPath = location.pathname;
  const isItemActive = (item) => {
    if (activeNav) return activeNav.toLowerCase() === item.name.toLowerCase();
    if (item.path === "/" && (currentPath === "/" || currentPath === "/map")) return true;
    if (item.path === "/home" && currentPath === "/home") return true;
    if (item.path !== "/" && item.path !== "#profile" && currentPath.startsWith(item.path)) return true;
    return false;
  };

  return (
    <div className="min-h-screen bg-[#0a0705] text-[#e0d3bf] flex flex-col font-sans overflow-x-hidden selection:bg-[#966d31] selection:text-[#0b0806]">
      {/* Top Mobile Bar */}
      <div className="lg:hidden flex items-center justify-between px-4 py-3 bg-[#110c08] border-b border-[#3d2c1c] z-50 sticky top-0">
        <Link to="/" className="flex items-center gap-2">
          <ShipWheelIcon className="w-8 h-8" color="#c89d55" />
          <span className="font-cinzel font-bold text-xl tracking-wider text-[#e8c782]">SECE</span>
        </Link>
        <div className="flex items-center gap-3">
          {topBarExtras}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded bg-[#1a130b] border border-[#523d26] text-[#e8c782]"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>
      </div>

      <div className="flex flex-1 relative overflow-hidden">
        {/* Left Sidebar (Desktop persistent, Mobile drawer) */}
        <aside
          className={`fixed inset-y-0 left-0 z-40 w-64 bg-[#0e0a07] border-r border-[#2d2116] flex flex-col justify-between py-5 px-3 transform transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 ${
            mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          } shadow-2xl`}
        >
          {/* Top Brand Header */}
          <div>
            <Link
              to="/"
              className="flex items-center gap-3 px-2 py-2 group hover:opacity-90 transition-opacity"
            >
              <div className="w-11 h-11 flex-shrink-0 relative flex items-center justify-center">
                <ShipWheelIcon className="w-10 h-10 animate-[spin_60s_linear_infinite]" color="#d4af37" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-cinzel font-extrabold text-2xl tracking-widest text-[#f0cb79] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                    SECE
                  </span>
                  <span className="text-[#a67c38] text-sm italic font-serif">~</span>
                </div>
                <span className="text-[10px] text-[#ab9475] tracking-tight leading-tight font-sans">
                  Society of Electronics and Communication
                </span>
              </div>
            </Link>

            {/* Subtle Divider */}
            <div className="my-4 h-px bg-gradient-to-r from-transparent via-[#453422] to-transparent"></div>

            {/* Navigation Menu */}
            <nav className="space-y-1.5">
              {NAV_ITEMS.map((item) => {
                const active = isItemActive(item);
                const Icon = item.icon;

                if (item.isAction) {
                  return (
                    <button
                      key={item.name}
                      onClick={() => setProfileOpen(!profileOpen)}
                      className={`w-full flex items-center gap-3.5 px-3.5 py-2.5 rounded-md text-sm font-medium transition-all duration-200 text-left cursor-pointer ${
                        profileOpen
                          ? "bg-[#251a10] border border-[#9c7333] text-[#f7cd78] shadow-[0_0_12px_rgba(156,115,51,0.2)]"
                          : "text-[#c2af94] hover:text-[#f3d48d] hover:bg-[#18110b] border border-transparent"
                      }`}
                    >
                      <span className="w-5 flex justify-center text-base">
                        <Icon size={16} />
                      </span>
                      <span className="tracking-wide">{item.name}</span>
                    </button>
                  );
                }

                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center gap-3.5 px-3.5 py-2.5 rounded-md text-sm font-medium transition-all duration-200 ${
                      active
                        ? "bg-[#251a10] border border-[#9c7333] text-[#f7cd78] shadow-[0_0_12px_rgba(156,115,51,0.25)] font-semibold"
                        : "text-[#c2af94] hover:text-[#f3d48d] hover:bg-[#18110b] border border-transparent"
                    }`}
                  >
                    <span className="w-5 flex justify-center text-base">
                      {typeof Icon === "function" && Icon === ShipWheelIcon ? (
                        <Icon className="w-4 h-4" color={active ? "#f7cd78" : "#c2af94"} />
                      ) : typeof Icon === "function" && Icon === CrossedSwordsIcon ? (
                        <Icon className="w-4 h-4" color={active ? "#f7cd78" : "#c2af94"} />
                      ) : (
                        <Icon size={16} />
                      )}
                    </span>
                    <span className="tracking-wide">{item.name}</span>
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Bottom Sidebar Elements */}
          <div className="pt-4 border-t border-[#261c13]">
            {/* Anchor ornament */}
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="h-px bg-[#3b2b1b] flex-1"></div>
              <AnchorIcon className="w-4 h-4 text-[#8a6839]" color="#8a6839" />
              <div className="h-px bg-[#3b2b1b] flex-1"></div>
            </div>

            <p className="text-center text-[11px] uppercase tracking-wider text-[#937b60] mb-2 font-cinzel">
              Follow us
            </p>

            {/* Social Icons */}
            <div className="flex items-center justify-center gap-2 mb-3">
              <a
                href="https://www.youtube.com/@sece_nitjsr"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-full border border-[#4a3724] bg-[#140e09] flex items-center justify-center text-[#ab9475] hover:text-[#f5c767] hover:border-[#966d31] transition-colors"
                title="YouTube"
              >
                <FaYoutube size={12} />
              </a>
              <a
                href="https://www.linkedin.com/company/society-of-electronics-and-communication-engineering-nit-jamshedpur/"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-full border border-[#4a3724] bg-[#140e09] flex items-center justify-center text-[#ab9475] hover:text-[#f5c767] hover:border-[#966d31] transition-colors"
                title="LinkedIn"
              >
                <FaLinkedinIn size={11} />
              </a>
              <a
                href="https://www.facebook.com/sece.nitjsr/"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-full border border-[#4a3724] bg-[#140e09] flex items-center justify-center text-[#ab9475] hover:text-[#f5c767] hover:border-[#966d31] transition-colors"
                title="Facebook"
              >
                <FaFacebookF size={11} />
              </a>
              <a
                href="https://www.instagram.com/sece_nitjsr/"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-full border border-[#4a3724] bg-[#140e09] flex items-center justify-center text-[#ab9475] hover:text-[#f5c767] hover:border-[#966d31] transition-colors"
                title="Instagram"
              >
                <FaInstagram size={12} />
              </a>
            </div>

            {/* Email link */}
            <a
              href="mailto:sece.student@nitjsr.ac.in"
              className="flex items-center justify-center gap-1.5 text-[10px] text-[#8f7960] hover:text-[#e4c278] transition-colors"
            >
              <FaEnvelope size={10} />
              <span>sece.student@nitjsr.ac.in</span>
            </a>
          </div>
        </aside>

        {/* Backdrop for mobile drawer */}
        {mobileOpen && (
          <div
            className="fixed inset-0 bg-black/70 z-30 lg:hidden"
            onClick={() => setMobileOpen(false)}
          />
        )}

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col min-w-0 h-[100vh] lg:h-screen overflow-y-auto relative bg-[#0b0806]">
          {/* Top Bar for Desktop */}
          <header className="sticky top-0 z-20 hidden lg:flex items-center justify-end px-6 py-2.5 bg-gradient-to-b from-[#0e0a07]/90 to-transparent backdrop-blur-[2px]">
            <div className="flex items-center gap-4">
              {/* Extra controls (e.g. Batch selector dropdown) */}
              {topBarExtras}

              {/* Profile Badge & Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="flex items-center gap-2 px-2.5 py-1 rounded-full border border-[#4a3622] bg-[#17100a]/80 hover:border-[#9c7333] transition-colors text-xs text-[#d8c3a1]"
                >
                  <PirateSkullBadge className="w-6 h-6" />
                  <span className="font-cinzel text-xs tracking-wider">My Profile</span>
                  <span className="text-[9px] text-[#9a7e58]">▼</span>
                </button>

                {profileOpen && (
                  <div className="absolute right-0 mt-2 w-48 rounded-lg bg-[#150f0a] border border-[#523d26] shadow-2xl p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="px-3 py-2 border-b border-[#312316] mb-1">
                      <p className="text-xs font-semibold text-[#f0cd7d]">ECE Pirate Crew</p>
                      <p className="text-[10px] text-[#937b60]">NIT Jamshedpur</p>
                    </div>
                    <Link
                      to="/alumni"
                      onClick={() => setProfileOpen(false)}
                      className="block px-3 py-1.5 text-xs text-[#cfbc9e] hover:bg-[#251a10] hover:text-[#f3ca76] rounded"
                    >
                      View Alumni Records
                    </Link>
                    <Link
                      to="/placement_masterclass"
                      onClick={() => setProfileOpen(false)}
                      className="block px-3 py-1.5 text-xs text-[#cfbc9e] hover:bg-[#251a10] hover:text-[#f3ca76] rounded"
                    >
                      Placement Masterclass
                    </Link>
                    <a
                      href="mailto:sece.student@nitjsr.ac.in"
                      className="block px-3 py-1.5 text-xs text-[#cfbc9e] hover:bg-[#251a10] hover:text-[#f3ca76] rounded"
                    >
                      Contact Society
                    </a>
                  </div>
                )}
              </div>
            </div>
          </header>

          {/* Children View Content */}
          <div className="flex-1 px-3 sm:px-6 pb-8 pt-2">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default PirateLayout;

