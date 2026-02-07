import React from "react";
import {
  FaGraduationCap,
  FaBookOpen,
  FaLightbulb,
  FaShareNodes,
  FaGithub,
  FaUser,
  FaGlobe,
  FaUsers,
  FaArrowRight,
} from "react-icons/fa6";

const categories = [
  {
    title: "Materials",
    subtitle: "Drive & Lecture Notes",
    icon: <FaGraduationCap />,
    href: "/materials",
    color: "from-purple-500 to-indigo-500",
    shadow: "group-hover:shadow-purple-500/50",
    border: "group-hover:border-purple-500/50",
  },
  {
    title: "Tools",
    subtitle: "Software & Utilities",
    icon: <FaBookOpen />,
    href: "/tools",
    color: "from-emerald-400 to-cyan-500",
    shadow: "group-hover:shadow-emerald-500/50",
    border: "group-hover:border-emerald-500/50",
  },
  {
    title: "Guidance",
    subtitle: "Tips, Tricks & Tutorials",
    icon: <FaLightbulb />,
    href: "/guidance",
    color: "from-amber-400 to-orange-500",
    shadow: "group-hover:shadow-amber-500/50",
    border: "group-hover:border-amber-500/50",
  },
  {
    title: "Community",
    subtitle: "Clubs & Social Groups",
    icon: <FaShareNodes />,
    href: "/community",
    color: "from-pink-500 to-rose-500",
    shadow: "group-hover:shadow-pink-500/50",
    border: "group-hover:border-pink-500/50",
  },
  {
    title: "Course Repos",
    subtitle: "GitHub Codebase",
    icon: <FaGithub />,
    href: "/courses",
    color: "from-gray-200 to-gray-400",
    shadow: "group-hover:shadow-gray-500/50",
    border: "group-hover:border-gray-500/50",
  },
  {
    title: "Portfolios",
    subtitle: "Student Showcases",
    icon: <FaUser />,
    href: "/portfolios",
    color: "from-blue-400 to-indigo-500",
    shadow: "group-hover:shadow-blue-500/50",
    border: "group-hover:border-blue-500/50",
  },
  {
    title: "Official UITS",
    subtitle: "Portals & Notices",
    icon: <FaGlobe />,
    href: "/official",
    color: "from-teal-400 to-teal-600",
    shadow: "group-hover:shadow-teal-500/50",
    border: "group-hover:border-teal-500/50",
  },
  {
    title: "Contributors",
    subtitle: "Hall of Fame",
    icon: <FaUsers />,
    href: "/contributions",
    color: "from-lime-400 to-green-500",
    shadow: "group-hover:shadow-lime-500/50",
    border: "group-hover:border-lime-500/50",
  },
];

const CategoryGrid = () => {
  return (
    <section
      id="categories"
      className="py-20 px-4 md:px-10 bg-[#0f172a] relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Explore{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Categories
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Everything you need for your academic journey, organized in one
            place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <a
              key={idx}
              href={cat.href}
              className={`
                group relative flex flex-col items-start p-6 
                bg-white/5 backdrop-blur-md 
                border border-white/10 rounded-2xl 
                transition-all duration-300 ease-out
                hover:-translate-y-2 hover:bg-white/10
                ${cat.border} ${cat.shadow} hover:shadow-2xl
              `}
            >
              <div
                className={`
                w-14 h-14 rounded-xl mb-6 
                flex items-center justify-center text-white text-2xl 
                bg-gradient-to-br ${cat.color} 
                shadow-lg shadow-black/20
                group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300
              `}
              >
                {cat.icon}
              </div>

              <div className="w-full">
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-200 transition-colors">
                  {cat.title}
                </h3>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                  {cat.subtitle}
                </p>
              </div>

              <div className="absolute top-6 right-6 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                <FaArrowRight className="text-gray-300" />
              </div>

              <div
                className={`
                absolute bottom-0 left-0 w-0 h-1 
                bg-gradient-to-r ${cat.color} 
                group-hover:w-full transition-all duration-500 rounded-b-2xl
              `}
              ></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
