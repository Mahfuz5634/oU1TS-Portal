import React from "react";
import {
  FaBook,
  FaFacebook,
  FaGlobe,
  FaGraduationCap,
  FaHeartPulse,
  FaArrowRight,
  FaShieldHalved,
} from "react-icons/fa6";

const FeaturedMarquee = () => {
  const items = [
    {
      title: "UITS Cyber Security Wing",
      category: "Security",
      url: "https://uitssec.github.io/",
      img: "https://res.cloudinary.com/djsa2kkyu/image/upload/v1757773769/nobg_UITS_Cyber_Security_Wing_FB_logo_admu5c.png",
      icon: <FaShieldHalved />,
      theme: "text-green-400",
    },
    {
      title: "FAQ on Capstone Project",
      category: "Academic",
      url: "#",
      img: null,
      icon: <FaBook />,
      theme: "text-blue-400",
    },
    {
      title: "b1t Academics",
      category: "Education",
      url: "https://b1tacad.netlify.app/",
      img: null,
      icon: <FaGraduationCap />,
      theme: "text-yellow-400",
    },
    {
      title: "Blood Donation Network",
      category: "Community",
      url: "https://bd-ou1ts.netlify.app/",
      img: null,
      icon: <FaHeartPulse />,
      theme: "text-red-500",
    },
    {
      title: "Students Forum UITS",
      category: "Social",
      url: "https://www.facebook.com/groups/sfuits",
      img: null,
      icon: <FaFacebook />,
      theme: "text-blue-600",
    },
  ];

  return (
    <section
      id="featured"
      className="py-20 bg-[#0f172a] relative overflow-hidden"
    >
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: scroll 30s linear infinite;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
        /* Tech Grid Background Pattern */
        .bg-grid-pattern {
          background-image: linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>

      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-3/4 bg-blue-600/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 mb-12 text-center">
        <div className="inline-block px-3 py-1 mb-4 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-bold tracking-widest uppercase">
          Ecosystem
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Featured{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Projects
          </span>
        </h2>
        <p className="text-gray-400 text-base max-w-2xl mx-auto">
          Explore the tools, communities, and resources built by the brilliant
          minds at UITS.
        </p>
      </div>

      <div className="relative w-full overflow-hidden group py-4">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/80 to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0f172a] via-[#0f172a]/80 to-transparent z-20 pointer-events-none"></div>

        <div className="flex w-max">
          <ul className="flex items-center gap-6 px-3 animate-marquee">
            {items.map((item, index) => (
              <MarqueeItem key={index} item={item} />
            ))}
          </ul>
          <ul
            className="flex items-center gap-6 px-3 animate-marquee"
            aria-hidden="true"
          >
            {items.map((item, index) => (
              <MarqueeItem key={`dup-${index}`} item={item} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

const MarqueeItem = ({ item }) => (
  <li className="list-none">
    <a
      href={item.url}
      target="_blank"
      rel="noreferrer"
      className="
        relative block group/card
        w-[320px] p-5
        bg-gradient-to-br from-white/10 to-white/[0.02]
        backdrop-blur-xl border border-white/10 rounded-2xl
        hover:border-blue-500/30 hover:shadow-[0_10px_40px_-10px_rgba(59,130,246,0.2)]
        hover:-translate-y-1
        transition-all duration-300 ease-out
        overflow-hidden
      "
    >
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity"></div>

      <div className="flex items-start gap-5">
        <div
          className={`
          w-14 h-14 flex-shrink-0 
          flex items-center justify-center 
          rounded-xl bg-black/20 border border-white/5
          shadow-inner
          group-hover/card:scale-105 transition-transform duration-300
        `}
        >
          {item.img ? (
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover rounded-xl"
            />
          ) : (
            <span className={`text-2xl ${item.theme}`}>
              {item.icon || <FaGlobe />}
            </span>
          )}
        </div>

        <div className="flex flex-col flex-1 min-w-0">
          <span
            className={`text-[10px] font-bold uppercase tracking-wider mb-1 opacity-70 ${item.theme}`}
          >
            {item.category}
          </span>

          <h3 className="text-white font-semibold text-base leading-tight group-hover/card:text-blue-200 transition-colors truncate">
            {item.title}
          </h3>

          <div className="mt-3 flex items-center text-xs text-gray-400 group-hover/card:text-white transition-colors">
            <span>Visit Resource</span>
            <FaArrowRight className="ml-2 w-3 h-3 opacity-0 -translate-x-2 group-hover/card:opacity-100 group-hover/card:translate-x-0 transition-all duration-300" />
          </div>
        </div>
      </div>
    </a>
  </li>
);

export default FeaturedMarquee;
