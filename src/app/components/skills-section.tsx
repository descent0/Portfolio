import type { Skill } from "@/lib/types"

interface SkillsSectionProps {
  skills: Skill[]
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  const defaultSkills = [
    {
      category: "Frontend Development",
      technologies: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Responsive Design"],
    },
    {
      category: "Backend Development",
      technologies: ["Node.js", "Express.js", "PHP", "RESTful APIs", "Authentication", "Server Architecture"],
    },
    {
      category: "Database Management",
      technologies: ["MongoDB", "MySQL", "Oracle Database", "Database Design", "Query Optimization"],
    },
    {
      category: "Tools & Technologies",
      technologies: ["Git/GitHub", "VS Code", "MongoDB Compass", "npm", "Vercel", "Postman", "XAMPP", "Google OAuth"],
    },
  ]

  const skillsData = skills.length > 0 ? skills : defaultSkills

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical <span className="text-purple-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-purple-400 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillsData.map((skillCategory, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-purple-400 mb-4">{skillCategory.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillCategory.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-purple-600 hover:text-white transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-4">MERN Stack Expertise</h3>
            <p className="text-gray-200 mb-6">
              Specialized in building full-stack applications using MongoDB, Express.js, React, and Node.js
            </p>
            <div className="flex justify-center space-x-8">
              {["MongoDB", "Express.js", "React", "Node.js"].map((tech, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-2 mx-auto">
                    <span className="text-2xl font-bold">{tech[0]}</span>
                  </div>
                  <span className="text-sm">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
