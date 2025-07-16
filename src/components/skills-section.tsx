"use client";

import type { Skill } from "@/lib/types";


export default function SkillsSection() {
  const defaultSkills: Skill[] = [
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
        "BootStrap",
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
        "OpenAuth",
        "Payment Integerateion",
        "Server Architecture",
      ],
    },
    {
      category: "Database Management",
      technologies: [
        "MongoDB",
        "MySQL",
        "Database Modelling",
        "Query Optimization",
      ],
    },
    {
      category: "Tools & Technologies",
      technologies: [
        "Git/GitHub",
        "VS Code",
        "MongoDB Compass",
        "npm",
        "Vercel",
        "Postman",
        "XAMPP",
        "Google OAuth",
      ],
    },
  ];
  const skills: Skill[] = [];
  const skillsData = skills.length > 0 ? skills : defaultSkills;

  return (
    <section id="skills" className="pt-24 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-5xl font-bold text-white">
          My <span className="text-purple-400">Skills</span>
        </h2>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">
          Here’s what I bring to the table.
        </p>
        <div className="w-20 h-1 bg-purple-500 mx-auto mt-6"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {skillsData.map((skillCategory, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-purple-600/40 transition-shadow duration-300"
          >
            <h3 className="text-purple-400 font-semibold text-xl mb-3">
              {skillCategory.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillCategory.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-purple-600 hover:text-white transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <div className="bg-gradient-to-r from-purple-950  to-[#B99ECD] rounded-lg p-8">
          <h3 className="text-2xl font-bold text-white mb-4">
            Core Engineering Philosophy
          </h3>
          <p className="text-gray-100 text-lg leading-relaxed">
            I believe in building systems that are{" "}
            <span className="text-white font-semibold">scalable</span>,{" "}
            <span className="text-white font-semibold">accessible</span>, and{" "}
            <span className="text-white font-semibold">developer-friendly</span>
            . Every line of code should serve a purpose — optimized for both
            performance and clarity.
          </p>
        </div>
      </div>
    </section>
  );
}
