import React from "react";
import {
  FaFacebookF,
  FaTelegram,
  FaDiscord,
  FaGithub,
  FaRedditAlien,
  FaHeart,
} from "react-icons/fa6";

const AboutSection = () => {
  const socials = [
    {
      icon: <FaFacebookF />,
      url: "https://facebook.com",
      label: "Facebook",
      color: "hover:bg-[#1877F2] hover:shadow-[#1877F2]/50",
    },
    {
      icon: <FaTelegram />,
      url: "https://t.me",
      label: "Telegram",
      color: "hover:bg-[#229ED9] hover:shadow-[#229ED9]/50",
    },
    {
      icon: <FaDiscord />,
      url: "https://discord.gg",
      label: "Discord",
      color: "hover:bg-[#5865F2] hover:shadow-[#5865F2]/50",
    },
    {
      icon: <FaGithub />,
      url: "https://github.com",
      label: "GitHub",
      color: "hover:bg-[#333] hover:shadow-white/20",
    },
    {
      icon: <FaRedditAlien />,
      url: "https://reddit.com",
      label: "Reddit",
      color: "hover:bg-[#FF4500] hover:shadow-[#FF4500]/50",
    },
  ];

  return (
    <section className="relative bg-[#0b1121] text-white py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                About <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  oU1TS Portal
                </span>
              </h2>
            </div>

            <div className="text-gray-400 space-y-4 text-lg leading-relaxed">
              <p>
                <span className="text-white font-semibold">"oU1TS"</span> is
                more than just a website; it's an initiative to build the
                foundation of a student-centered ecosystem. We seek individuals
                who are inherently ambitious about their careers and passionate
                about technology.
              </p>
              <p>
                This portal is a{" "}
                <span className="text-purple-300">
                  scalable open-source project
                </span>{" "}
                designed for effortless resource sharing. Whether it's notes,
                code, or guidance — everything is welcome here.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10">
              <p className="text-sm font-medium text-gray-500 italic flex items-center gap-2">
                <FaHeart className="text-red-500 animate-pulse" />
                "Jazakallahu khair, o wanderer of life!"
              </p>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl hover:border-white/20 transition-colors">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">
                Join the Community
              </h3>
              <p className="text-gray-400 text-sm">
                Connect with developers, contributors, and students across our
                platforms.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {socials.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`
                    group flex flex-col items-center justify-center gap-2 p-4 rounded-xl 
                    bg-[#1e293b] border border-gray-700 
                    transition-all duration-300 ease-out 
                    hover:-translate-y-1 hover:text-white 
                    ${social.color}
                    ${idx >= 3 ? "col-span-1.5" : ""} /* Centering adjustment for last row if needed */
                  `}
                >
                  <span className="text-2xl text-gray-300 group-hover:text-white transition-colors">
                    {social.icon}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider font-semibold opacity-0 group-hover:opacity-100 transition-opacity -mt-2 group-hover:mt-0">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-8 text-center">
              <a
                href="#"
                className="text-sm text-blue-400 hover:text-blue-300 hover:underline underline-offset-4 transition-all"
              >
                Want to become a maintainer?
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
