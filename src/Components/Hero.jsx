import React from "react";
import { FaPlus, FaRightToBracket, FaBookOpen } from "react-icons/fa6";
import uitsimage from "../assets/uits-image.jpg";


const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#0f172a]">
      <nav className="absolute top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center bg-transparent">
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/30 group-hover:scale-105 transition-transform duration-300">
            U
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-white tracking-wide leading-none drop-shadow-md">
              oU1TS <span className="text-blue-400 font-light">Portal</span>
            </span>
            <span className="text-[10px] text-gray-300 uppercase tracking-widest leading-none mt-1 group-hover:text-blue-300 transition-colors drop-shadow-sm">
              Academic Hub
            </span>
          </div>
        </div>

        <button
          className="relative overflow-hidden flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white text-sm font-semibold tracking-wide transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] group active:scale-95"
          onClick={() => console.log("Login Clicked")}
        >
          <span className="relative z-10">Login</span>
          <FaRightToBracket className="relative z-10 text-blue-300 group-hover:translate-x-1 transition-transform" />
        </button>
      </nav>

      <div className="absolute inset-0 z-0">
        <img
          src={uitsimage}
          alt="University Background"
          className="w-full h-full object-cover scale-105 animate-slow-pan"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/70 to-black/30"></div>

        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/50 to-transparent"></div>
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
      </div>

      <div className="relative z-10 w-full h-full flex flex-col justify-center items-center text-center px-4 pt-10">
        <div className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-bold tracking-widest uppercase backdrop-blur-md shadow-lg shadow-blue-900/20 animate-fade-in-down">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Official Resource Hub
        </div>

        <h1 className="max-w-4xl text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-6 drop-shadow-2xl tracking-tight">
          Level Up Your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient-x">
            Academic Journey
          </span>
        </h1>

        <p className="max-w-2xl text-lg md:text-xl text-gray-200 font-light leading-relaxed mb-10 drop-shadow-md">
          One platform for all your university needs. Access notes, question
          banks, and project showcases designed exclusively for{" "}
          <span className="text-white font-semibold">UITS Students</span>.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-5">
          <a
            href="#browse"
            className="group relative px-8 py-4 bg-white text-black rounded-full font-bold shadow-xl shadow-white/10 hover:shadow-white/20 transition-all hover:-translate-y-1 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative flex items-center gap-3">
              <FaBookOpen className="text-blue-600" />
              <span>Browse Resources</span>
            </div>
          </a>

          <a
            href="https://forms.gle/UR1HSavWJYdPBPnC8"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 text-white rounded-full font-medium transition-all hover:-translate-y-1 flex items-center gap-3 group"
          >
            <FaPlus className="text-green-400 group-hover:rotate-90 transition-transform duration-300" />
            <span>Submit Resource</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
