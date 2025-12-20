"use client";

import type { Skill } from "@/lib/types";

export default function SkillsSection() {
  const skillsData: Skill[] = [
    {
      category: "Frontend Development",
      technologies: [
        "React.js",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Bootstrap",
        "Responsive Design",
        "shadcnUI",
        "Next.js",
      ],
    },
    {
      category: "Backend Development",
      technologies: [
        "Node.js",
        "Express.js",
        "PHP",
        "Next.js",
        "RESTful APIs",
        "Authentication",
        "OAuth",
        "Payment Integration",
        "Server Architecture",
      ],
    },
    {
      category: "Database Management",
      technologies: [
        "MongoDB",
        "MySQL",
        "Database Modeling",
        "Query Optimization",
      ],
    },
  ];

  return (
    <section id="skills" className="pt-28 px-4 max-w-7xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-24">
        <h2 className="text-5xl font-bold text-white">
          My <span className="text-purple-400">Skills</span>
        </h2>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">
          Here’s what I bring to the table.
        </p>
        <div className="w-24 h-1 bg-purple-500 mx-auto mt-6"></div>
      </div>

      {/* Floating Cards */}
      <div className="relative grid md:grid-cols-3 gap-10">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className={`
              relative bg-gray-900/80 backdrop-blur-xl
              rounded-2xl p-7
              border border-white/10
              shadow-2xl
              transition-all duration-500 ease-out
              hover:-translate-y-6
              hover:shadow-purple-600/40
              hover:border-purple-500/40
             
            `}
          >
            {/* Glow layer */}
            <div className="absolute inset-0 rounded-2xl bg-purple-500/10 blur-2xl opacity-0 hover:opacity-100 transition-opacity"></div>

            {/* Content */}
            <h3 className="relative z-10 text-purple-400 font-semibold text-xl mb-5">
              {skill.category}
            </h3>

            <div className="relative z-10 flex flex-wrap gap-2">
              {skill.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="
                    bg-white/10 text-gray-200
                    px-3 py-1 rounded-full text-sm
                    hover:bg-purple-600 hover:text-white
                    transition-colors
                  "
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Philosophy */}
      <div className="mt-32 text-center">
        <div className="bg-gradient-to-r from-purple-950 to-[#B99ECD] rounded-xl p-10 shadow-lg">
          <h3 className="text-2xl font-bold text-white mb-4">
            Core Engineering Philosophy
          </h3>
          <p className="text-gray-100 text-lg leading-relaxed max-w-3xl mx-auto">
            I believe in building systems that are{" "}
            <span className="font-semibold text-white">scalable</span>,{" "}
            <span className="font-semibold text-white">accessible</span>, and{" "}
            <span className="font-semibold text-white">
              developer-friendly
            </span>
            . Every line of code should serve a purpose — optimized for both
            performance and clarity.
          </p>
        </div>
      </div>
    </section>
  );
}
