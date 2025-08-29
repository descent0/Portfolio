"use client";

import { useEffect, useRef, useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Project } from "@/lib/types";

interface ProjectsSectionProps {
  projects?: Project[];
}

const defaultProjects: Project[] = [
   {
   title: "SafeStranger",
description:
  "Real-time anonymous chat and video matching platform built with WebRTC and a custom signaling server, featuring NSFW.js for live video moderation and an efficient pool-based matching algorithm.",
technologies: [
  "Next.js",
  "WebRTC",
  "Web Sockets",
  "Signaling Server",
  "NSFW.js",
  "Tailwind CSS",
],
    codeUrl: "https://github.com/descent0/SAFE_STRANGERS",
    liveUrl: "https://safe-strangers.vercel.app/",
    featured: true,
    imageUrl: "/safeStranger.png",
  },
  {
    title: "noWaitz",
    description:
      "MERN-based web app for booking service slots at local shops, featuring Google OAuth, Razorpay payments, email confirmations, and an admin panel.",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Express.js",
      "JWT",
      "Razorpay",
      "NodeMailer",
      "Google OAuth",
    ],
    codeUrl: "https://github.com/descent0/nowaitz",
    liveUrl: "https://nowaitz.vercel.app",
    featured: true,
    imageUrl: "/nowaitz.png",
  },
  {
    title: "EFAT - Eco Feasibility Tool",
    description:
      "A platform to assess startup eco-friendliness by checking parameters like energy use and waste, offering NLP-driven insights and AI-based recommendations to improve environmental sustainability",
    technologies: [
      "MongoDB",
      "React",
      "Express.js",
      "Flask",
      "JWT",
      "Tailwind CSS",
      "Hugging Face",
      "Random Forest",
    ],
    codeUrl: "#",
    liveUrl: "#",
    featured: true,
    imageUrl: "/EFAT.png",
  },
  {
    title: "Nyaauta",
    description:
      "Web platform for managing digital invitations with card categories and employee controls. Includes design tools and bulk email delivery.",
    technologies: ["PHP", "MySQL", "HTML5", "Bootstrap", "JavaScript", "XAMPP", "stateful_auth"],
    codeUrl: "https://github.com/descent0/Nyaauta",
    liveUrl: "#",
    featured: true,
    imageUrl: "/nyaauta.png",
  },
  {
    title: "Personal Financial Visualiser",
    description:
      "A dashboard to visualize & track your finance according to the vis",
    technologies: ["Next.js", "shadCN UI", "Tailwind CSS", "lucide-react"],
    codeUrl: "https://github.com/descent0/Yardstick",
    liveUrl: "https://yardstick-eight.vercel.app",
    featured: true,
    imageUrl: "/finance.png",
  },
];

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  const projectsData =
    Array.isArray(projects) && projects.length > 0 ? projects : defaultProjects;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setActiveIndex(index);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      projectRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className=" text-white pt-24 px-6" id="projects">
      <div className="text-center mb-20">
        <h2 className="text-5xl font-bold text-white">
          <span className="text-purple-400">My</span> Projects
        </h2>

        <div className="w-20 h-1 bg-purple-500 mx-auto mt-6"></div>
      </div>
      <div className="mx-auto flex flex-col md:flex-row gap-4 ">
        <div className="hidden md:block space-y-32 relative z-10 flex-2/3">
          {projectsData.map((project, index) => (
            <div
              key={index}
              ref={(el) => {
                projectRefs.current[index] = el;
              }}
              data-index={index}
              className="h-[90vh] overflow-hidden relative group"
            >
              {/* Image container */}
              <div className="relative w-full h-full">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105 mix-blend-soft-light"
                />

                {/* Radial fade to match #0E1421 background */}
                <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(ellipse,rgba(14,20,33,0)_35%,rgba(14,20,33,0.7)_70%,rgba(14,20,33,1)_100%)] mix-blend-darken" />
              </div>
            </div>
          ))}
        </div>

        {/* Right: Project Text - not sticky on mobile */}
        <div className="h-full flex-1/3 md:sticky md:top-20">
          <div className="backdrop-blur-lg h-full min-h-[500px] rounded-2xl p-8 shadow-lg border border-white/10 space-y-6 transition-all duration-500">
            {!isMobile ? (
              <>
                <h2 className="text-3xl font-bold mb-2">
                  {projectsData[activeIndex].title}
                </h2>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {projectsData[activeIndex].description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {projectsData[activeIndex].technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-purple-600/10 text-purple-300 text-xs px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}

                  <div className="flex gap-4 pt-4">
                    <a href={projectsData[activeIndex].codeUrl}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </a>
                    <a href={projectsData[activeIndex].liveUrl}>
                      <Button
                        size="sm"
                        className="bg-purple-600 hover:bg-purple-700"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    </a>
                  </div>
                </div>
              </>
            ) : (
              <>
                {projectsData.map((project, index) => (
                  <div
                    key={index}
                    className="mb-10 border-b border-white/10 pb-6 last:border-none last:pb-0"
                  >
                    <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-purple-600/10 text-purple-300 text-xs px-2 py-1 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}

                      <div className="flex gap-4 pt-4">
                    <a href={project.codeUrl}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </a>
                    <a href={project.liveUrl}>
                      <Button
                        size="sm"
                        className="bg-purple-600 hover:bg-purple-700"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    </a>
                  </div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
