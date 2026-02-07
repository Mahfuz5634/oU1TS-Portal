import React from "react";
import { FaHeart, FaGithub, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] border-t border-white/10 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white tracking-wide">
              oU1TS <span className="text-blue-400">Portal</span>
            </h3>
            <p className="text-gray-500 text-sm mt-1">
              &copy; {new Date().getFullYear()} UITS Academic Hub. All rights
              reserved.
            </p>
          </div>

          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-blue-400 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              Contact
            </a>
          </div>
        </div>

        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>

        <div className="flex flex-col items-center justify-center">
          <p className="text-gray-500 text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
            Crafted with <FaHeart className="text-red-500 animate-pulse" /> by
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <DeveloperCard
              name="Developer Name 1"
              role="Frontend Wizard"
              github="#"
              linkedin="#"
            />

            <div className="hidden sm:block w-[1px] h-8 bg-white/20"></div>

            <DeveloperCard
              name="Developer Name 2"
              role="Backend Ninja"
              github="#"
              linkedin="#"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

const DeveloperCard = ({ name, role, github, linkedin }) => (
  <div className="group flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 hover:border-blue-500/30 transition-all duration-300">
    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-xs font-bold text-white shadow-lg">
      {name.charAt(0)}
    </div>

    <div className="flex flex-col">
      <span className="text-white text-sm font-medium group-hover:text-blue-300 transition-colors">
        {name}
      </span>
      <span className="text-[10px] text-gray-500 group-hover:text-gray-400">
        {role}
      </span>
    </div>

    <div className="flex gap-2 pl-2 border-l border-white/10 opacity-50 group-hover:opacity-100 transition-opacity">
      <a
        href={github}
        target="_blank"
        rel="noreferrer"
        className="text-gray-400 hover:text-white transition-colors"
      >
        <FaGithub size={14} />
      </a>
      <a
        href={linkedin}
        target="_blank"
        rel="noreferrer"
        className="text-gray-400 hover:text-blue-400 transition-colors"
      >
        <FaLinkedin size={14} />
      </a>
    </div>
  </div>
);

export default Footer;
