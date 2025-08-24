"use client";

import { useEffect, useRef, useState } from "react";
import {
  ExternalLink,
  Github,
  User,
  Building2,
  Code,
  Zap,
  Star,
  Rocket,
} from "lucide-react";
import { personalProjects, companyProjects } from "@/lib/data";

const projectIcons = [Code, Zap, Star, Rocket];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState<"personal" | "company">(
    "personal"
  );
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "-50px" }
    );

    const elements = sectionRef.current?.querySelectorAll(".fade-in");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [activeTab]);

  const currentProjects =
    activeTab === "personal" ? personalProjects : companyProjects;

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-5xl font-bold font-mono text-vintage-text mb-4">
            Projects
          </h2>
          <div className="w-20 h-1 bg-vintage-accent mx-auto mb-8" />

          <div className="flex justify-center space-x-4 mb-8">
            <button
              onClick={() => setActiveTab("personal")}
              className={`flex items-center space-x-2 px-6 py-3 font-mono font-semibold transition-all duration-300 interactive-scale glow-effect ${
                activeTab === "personal"
                  ? "bg-vintage-accent text-white"
                  : "border-2 border-vintage-accent text-vintage-accent hover:bg-vintage-accent hover:text-white"
              }`}
            >
              <User className="w-4 h-4" />
              <span>Personal</span>
            </button>

            <button
              onClick={() => setActiveTab("company")}
              className={`flex items-center space-x-2 px-6 py-3 font-mono font-semibold transition-all duration-300 interactive-scale glow-effect ${
                activeTab === "company"
                  ? "bg-vintage-accent text-white"
                  : "border-2 border-vintage-accent text-vintage-accent hover:bg-vintage-accent hover:text-white"
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>Professional</span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProjects.map((project, index) => {
            const IconComponent = projectIcons[index % projectIcons.length];
            return (
              <div
                key={project.id}
                className="bg-vintage-card border border-vintage-border hover:border-vintage-accent transition-all duration-300 group hover-lift interactive-scale glow-effect fade-in"
                style={{ transitionDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative h-48 bg-gradient-to-br from-vintage-accent/20 to-vintage-accent/5 flex items-center justify-center overflow-hidden">
                  <IconComponent
                    className={`w-24 h-24 text-vintage-accent transition-all duration-500 ${
                      hoveredProject === project.id
                        ? "scale-125 rotate-on-hover"
                        : "animate-float"
                    }`}
                  />

                  <div className="absolute inset-0">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className={`absolute w-2 h-2 bg-vintage-accent/30 rounded-full transition-all duration-300 ${
                          hoveredProject === project.id
                            ? "animate-bounce-slow"
                            : "animate-float"
                        }`}
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          animationDelay: `${i * 0.2}s`,
                          animationDuration: `${2 + Math.random() * 2}s`,
                        }}
                      />
                    ))}
                  </div>

                  <div
                    className={`absolute top-4 left-4 px-2 py-1 text-xs font-mono font-bold interactive-scale ${
                      project.type === "personal"
                        ? "bg-vintage-accent text-white"
                        : "bg-blue-500 text-white"
                    }`}
                  >
                    {project.type === "personal" ? "PERSONAL" : "COMPANY"}
                  </div>

                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-yellow-500 text-black px-2 py-1 text-xs font-mono font-bold pulse-on-hover">
                      FEATURED
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="mb-4">
                    <p className="text-vintage-accent font-mono text-sm mb-1">
                      {project.subtitle}
                    </p>
                    <h3 className="text-xl font-bold text-vintage-text font-mono mb-2 hover:text-vintage-accent transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-vintage-muted mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-vintage-accent/10 border border-vintage-accent/20 text-vintage-accent text-xs font-mono hover:bg-vintage-accent/20 transition-all duration-300 interactive-scale cursor-pointer"
                        style={{ transitionDelay: `${techIndex * 50}ms` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    {project.live && (
                      <a
                        href={project.live}
                        className="flex items-center space-x-2 text-vintage-muted hover:text-vintage-accent transition-all duration-300 interactive-scale"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="font-mono text-sm">Live</span>
                      </a>
                    )}
                    {Array.isArray(project.github) &&
                      project.github.length > 0 && (
                        <div className="flex items-center gap-3">
                          {project.github.map((url, i) => (
                            <a
                              key={url || i}
                              href={url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center space-x-2 text-vintage-muted hover:text-vintage-accent transition-all duration-300 interactive-scale"
                            >
                              <Github className="w-4 h-4" />
                              <span className="font-mono text-sm">
                                Repo{i > 0 ? ` ${i + 1}` : ""}
                              </span>
                            </a>
                          ))}
                        </div>
                      )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(5)].map((_, i) => {
            const IconComponent = projectIcons[i % projectIcons.length];
            return (
              <div
                key={i}
                className="absolute animate-float opacity-10"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${6 + Math.random() * 4}s`,
                }}
              >
                <IconComponent className="w-12 h-12 text-vintage-accent" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
