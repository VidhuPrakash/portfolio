"use client";

import { useEffect, useRef } from "react";
import { Code, Database, Palette, Wrench } from "lucide-react";
import { skillCategories, stats, skillsWithIcons } from "@/lib/data";
import Image from "next/image";

export default function Skills() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 0.8;
      }
    };

    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, []);

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
  }, []);

  const skillIcons: { [key: string]: any } = {
    Frontend: Code,
    Backend: Database,
    "Productivity Tools": Palette,
    Tools: Wrench,
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 px-4 bg-vintage-section"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-5xl font-bold font-mono text-vintage-text mb-4">
            Skills & Tools
          </h2>
          <div className="w-20 h-1 bg-vintage-accent mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = skillIcons[category.title];
            return (
              <div
                key={category.title}
                className="bg-vintage-card border border-vintage-border p-6 hover:border-vintage-accent transition-all duration-300 hover-lift interactive-scale glow-effect fade-in"
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <h3 className="text-lg font-bold text-vintage-text font-mono mb-4 flex items-center">
                  <IconComponent className="w-5 h-5 mr-2 text-vintage-accent rotate-on-hover" />
                  {category.title}
                </h3>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className="text-vintage-muted font-mono text-sm hover:text-vintage-accent transition-all duration-300 cursor-default hover-lift interactive-scale"
                      style={{ transitionDelay: `${skillIndex * 50}ms` }}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="relative mb-16 overflow-hidden fade-in">
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-vintage-section to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-vintage-section to-transparent z-10" />

          <div ref={scrollRef} className="flex space-x-8 overflow-hidden py-6">
            {[...Array(3)].map((_, setIndex) => (
              <div key={setIndex} className="flex space-x-8 flex-shrink-0">
                {skillsWithIcons.map((skill, index) => (
                  <div
                    key={`${setIndex}-${index}`}
                    className="flex-shrink-0 px-6 py-4 bg-vintage-card border border-vintage-border whitespace-nowrap hover:border-vintage-accent transition-all duration-300 interactive-scale glow-effect group cursor-pointer"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <Image
                          src={skill.icon || "/placeholder.svg"}
                          alt={skill.name}
                          width={28}
                          height={28}
                          className="tech-icon"
                        />
                        <div className="absolute inset-0 bg-vintage-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full blur-sm" />
                      </div>
                      <span className="text-vintage-text font-mono group-hover:text-vintage-accent transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center fade-in hover-lift interactive-scale cursor-pointer"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl md:text-5xl font-bold text-vintage-accent font-mono mb-2 pulse-on-hover">
                {stat.number}
              </div>
              <div className="text-vintage-muted font-mono text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float opacity-10"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 4}s`,
              }}
            >
              <Code className="w-8 h-8 text-vintage-accent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
