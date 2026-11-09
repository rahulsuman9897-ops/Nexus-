import React, { useState, useRef } from "react";
import PirateLayout from "../../components/PirateTheme/PirateLayout";
import ParchmentScroll from "../../components/PirateTheme/ParchmentScroll";
import events from "./Events";
import nexusVideo from "../../assets/NexusPage/nexus-recap copy.mp4";
import {
  FaChevronLeft,
  FaChevronRight,
  FaPlay,
  FaPause,
  FaUndo,
  FaRedo,
  FaVolumeUp,
  FaVolumeMute,
} from "react-icons/fa";

const NexusPage = () => {
  // Find Decoduino index as default if available (as shown in screenshot)
  const decoduinoIdx = events.findIndex((e) => e.name.toLowerCase().includes("decoduino"));
  const [currentEventIdx, setCurrentEventIdx] = useState(decoduinoIdx !== -1 ? decoduinoIdx : 0);

  // Video Player state
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);

  const activeEvent = events[currentEventIdx] || events[0];

  const handlePrevEvent = () => {
    setCurrentEventIdx((prev) => (prev === 0 ? events.length - 1 : prev - 1));
  };

  const handleNextEvent = () => {
    setCurrentEventIdx((prev) => (prev === events.length - 1 ? 0 : prev + 1));
  };

  // Video Controls
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const skipTime = (seconds) => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = Math.max(
      0,
      Math.min(videoRef.current.duration || 0, videoRef.current.currentTime + seconds)
    );
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    setCurrentTime(videoRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    setDuration(videoRef.current.duration);
  };

  const handleSeek = (e) => {
    if (!videoRef.current) return;
    const seekTime = parseFloat(e.target.value);
    videoRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const formatTime = (time) => {
    if (isNaN(time)) return "--:--";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  // Select primary photo for active event
  const eventPhoto =
    Array.isArray(activeEvent.photos) && activeEvent.photos.length > 0
      ? activeEvent.photos[0]
      : activeEvent.image;

  return (
    <PirateLayout activeNav="Nexus">
      <div className="max-w-7xl mx-auto py-2">
        {/* Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          {/* Left Column: Stack of Two Parchment Scrolls */}
          <div className="lg:col-span-6 flex flex-col space-y-5">
            {/* 1. Nexus Intro Scroll */}
            <ParchmentScroll>
              <div className="text-center mb-2 pb-1 border-b border-[#a88247]/30">
                <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-[#1b1006]">
                  Nexus – Where Fun Meets Brilliance!
                </h2>
              </div>

              <p className="text-xs sm:text-[13px] leading-relaxed text-[#2c1d11] text-justify font-sans">
                <strong>Nexus</strong> is the signature fest of the Electronics and Communication
                Engineering department at NIT Jamshedpur, celebrated with unmatched enthusiasm
                every October or November. This exhilarating three-day extravaganza brings the
                campus to life with a perfect blend of technical brilliance and vibrant
                entertainment. From coding challenges and robotics competitions to quirky fun games,
                Nexus offers something for everyone. Signature events like Talent Hunt, Perfect
                Pixel, Film Nexus, Digimon, and Codexus further amplify the excitement, ensuring
                every participant finds a platform to shine, ignites talent, and creates memories
                that last a lifetime. Be part of the magic. Be part of Nexus!
              </p>
            </ParchmentScroll>

            {/* 2. Nexus Highlight Reel Video Player Scroll */}
            <ParchmentScroll>
              <div className="text-center mb-3">
                <h3 className="font-fondamento italic text-xl sm:text-2xl font-bold text-[#2a1708]">
                  Nexus Highlight Reel
                </h3>
              </div>

              {/* Video Element */}
              <div className="relative rounded-lg overflow-hidden border border-[#8a6839] bg-black shadow-inner aspect-video flex items-center justify-center">
                <video
                  ref={videoRef}
                  src={nexusVideo}
                  onTimeUpdate={handleTimeUpdate}
                  onLoadedMetadata={handleLoadedMetadata}
                  onEnded={() => setIsPlaying(false)}
                  className="w-full h-full object-cover"
                  playsInline
                />

                {/* Big Center Play Overlay when paused */}
                {!isPlaying && (
                  <button
                    onClick={togglePlay}
                    className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-[#1b120a]/80 border-2 border-[#d4af37] text-[#f7cd78] flex items-center justify-center hover:scale-110 transition-transform shadow-2xl z-20 pl-1"
                  >
                    <FaPlay size={20} />
                  </button>
                )}
              </div>

              {/* Custom Nautical Video Controller Bar (matching screenshot) */}
              <div className="mt-3 bg-[#110b06] border border-[#523d26] rounded-md p-2.5 flex flex-col gap-2 shadow-lg">
                {/* Controller Buttons: Rewind 10, Play/Pause, Forward 10 */}
                <div className="flex items-center justify-center gap-6 text-[#e8c782]">
                  <button
                    onClick={() => skipTime(-10)}
                    className="flex items-center gap-1 text-xs hover:text-[#f7cd78] transition-colors p-1"
                    title="Rewind 10 seconds"
                  >
                    <FaUndo size={12} />
                    <span className="text-[10px] font-bold">10</span>
                  </button>

                  <button
                    onClick={togglePlay}
                    className="w-8 h-8 rounded-full bg-[#2a1a0f] border border-[#a67c38] flex items-center justify-center text-[#f7cd78] hover:bg-[#a67c38] hover:text-[#110b06] transition-all"
                    title={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? <FaPause size={12} /> : <FaPlay size={12} className="pl-0.5" />}
                  </button>

                  <button
                    onClick={() => skipTime(10)}
                    className="flex items-center gap-1 text-xs hover:text-[#f7cd78] transition-colors p-1"
                    title="Forward 10 seconds"
                  >
                    <span className="text-[10px] font-bold">10</span>
                    <FaRedo size={12} />
                  </button>
                </div>

                {/* Progress bar + timestamp + audio */}
                <div className="flex items-center gap-3 text-[11px] text-[#baa171]">
                  <input
                    type="range"
                    min="0"
                    max={duration || 100}
                    value={currentTime}
                    onChange={handleSeek}
                    className="flex-1 h-1 bg-[#3a2919] rounded-lg appearance-none cursor-pointer accent-[#c89d55]"
                  />

                  <span className="font-mono text-[10px] text-[#ab9475]">
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </span>

                  <button
                    onClick={toggleMute}
                    className="text-[#baa171] hover:text-[#f7cd78] transition-colors"
                  >
                    {isMuted ? <FaVolumeMute size={13} /> : <FaVolumeUp size={13} />}
                  </button>
                </div>
              </div>
            </ParchmentScroll>
          </div>

          {/* Right Column: Tall Parchment Scroll with Event Showcase */}
          <div className="lg:col-span-6">
            <ParchmentScroll className="h-full">
              {/* Event Photo */}
              <div className="rounded-lg overflow-hidden border border-[#8a6839] shadow-inner max-h-[300px] sm:max-h-[340px] bg-[#1a1209]">
                {eventPhoto ? (
                  <img
                    src={eventPhoto}
                    alt={activeEvent.name}
                    className="w-full h-full object-cover object-center max-h-[320px] transition-transform duration-500 hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-60 flex items-center justify-center text-[#ab9475]">
                    Image Loading...
                  </div>
                )}
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
                Nexus Event {currentEventIdx + 1} of {events.length}
              </div>
            </ParchmentScroll>
          </div>
        </div>
      </div>
    </PirateLayout>
  );
};

export default NexusPage;
