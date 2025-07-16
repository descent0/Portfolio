import type { Project } from "@/lib/types"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

interface ProjectsSectionProps {
  projects: Project[]
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  const defaultProjects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce application built with MERN stack featuring user authentication, payment integration, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "Stripe API"],
      codeUrl: "#",
      liveUrl: "#",
      featured: true,
    },
    {
      title: "Task Management System",
      description:
        "Collaborative task management application with real-time updates, user roles, and project tracking capabilities.",
      technologies: ["React", "PHP", "MySQL", "Bootstrap", "Socket.io"],
      codeUrl: "#",
      liveUrl: "#",
      featured: true,
    },
    {
      title: "Social Media Dashboard",
      description:
        "Analytics dashboard for social media management with data visualization and automated reporting features.",
      technologies: ["React", "Node.js", "MongoDB", "Chart.js", "Google OAuth"],
      codeUrl: "#",
      liveUrl: "#",
      featured: true,
    },
    {
      title: "Restaurant Management System",
      description:
        "Complete restaurant management solution with order tracking, inventory management, and customer feedback system.",
      technologies: ["React", "Express.js", "Oracle DB", "Tailwind CSS"],
      codeUrl: "#",
      liveUrl: "#",
      featured: true,
    },
  ]

  const projectsData = projects.length > 0 ? projects : defaultProjects

  return (
    <section id="projects" className="py-20 px-4 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="text-purple-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-purple-400 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 hover:border-purple-400 transition-colors"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-purple-600/20 text-purple-400 px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white bg-transparent"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
