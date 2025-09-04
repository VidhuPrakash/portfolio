"use client";

import { useState, useEffect } from "react";
import {
  ChevronDown,
  Linkedin,
  Github,
  Instagram,
  Facebook,
} from "lucide-react";
import { personalInfo } from "@/lib/data";
import Image from "next/image";

export default function Hero() {
  const [text, setText] = useState("");
  const [showGlitch, setShowGlitch] = useState(false);
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(personalInfo.title.slice(0, i));
      i++;
      if (i > personalInfo.title.length) {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const triggerGlitch = () => {
    setShowGlitch(true);
    setTimeout(() => setShowGlitch(false), 600);
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10"></div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          >
            <div
              className={`w-${2 + Math.floor(Math.random() * 4)} h-${
                2 + Math.floor(Math.random() * 4)
              } bg-vintage-accent/20 ${
                Math.random() > 0.5 ? "rounded-full" : ""
              }`}
            />
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
        <div className="relative mx-auto w-48 h-48 mb-8">
          <div
            className="absolute inset-0 rounded-full border-2 border-vintage-accent/30 animate-spin"
            style={{ animationDuration: "20s" }}
          />
          <div
            className="absolute inset-2 rounded-full border border-vintage-accent/20 animate-spin"
            style={{ animationDuration: "15s", animationDirection: "reverse" }}
          />

          <div className="absolute inset-4 rounded-full bg-vintage-accent/10 animate-pulse" />

          <div
            className="glitch-container relative w-full h-full rounded-full overflow-hidden border-4 border-vintage-accent/30 cursor-pointer group"
            onClick={triggerGlitch}
            onMouseEnter={() => setShowGlitch(true)}
            onMouseLeave={() => setShowGlitch(false)}
          >
            <div className="absolute inset-0 -z-10  rounded-full before:content-[''] before:absolute before:inset-[-8px] before:rounded-full before:bg-[radial-gradient(circle,theme(colors.vintage-accent/40)_0%,transparent_60%)] before:blur-[8px] before:animate-[pulseRing_2.6s_ease-in-out_infinite]" />

            <Image
              src={
                personalInfo.image ||
                "/placeholder.svg?height=200&width=200&query=professional developer portrait"
              }
              alt={personalInfo.name}
              width={200}
              height={200}
              className="glitch-image w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
            />

            {showGlitch && (
              <>
                <div className="glitch-overlay glitch-overlay-1" />
                <div className="glitch-overlay glitch-overlay-2" />
                <div className="glitch-overlay glitch-overlay-3" />
              </>
            )}

            <div className="scan-lines" />
          </div>

          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-vintage-accent/50 rounded-full animate-float"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        <div className="space-y-4">
          <h1 className="text-2xl md:text-7xl font-bold font-mono text-vintage-text relative">
            <span className="inline-block animate-fade-in-up">
              {personalInfo.name.split("").map((char, index) => (
                <span
                  key={index}
                  className="inline-block hover:text-vintage-accent transition-colors duration-300 cursor-default"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animation: "fadeInUp 0.6s ease-out forwards",
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </span>
          </h1>

          <div className="h-8 relative">
            <p className="text-xl md:text-2xl text-vintage-accent font-mono">
              {text}
              <span className="animate-pulse text-vintage-accent">_</span>
            </p>

            <div className="absolute right-0 top-0 w-1 h-8 bg-vintage-accent animate-pulse opacity-75" />
          </div>
        </div>

        <div className="flex justify-center space-x-6">
          {[
            { icon: Linkedin, href: personalInfo.social.linkedin, delay: "0s" },
            { icon: Github, href: personalInfo.social.github, delay: "0.1s" },
            {
              icon: Instagram,
              href: personalInfo.social.instagram,
              delay: "0.2s",
            },
            {
              icon: Facebook,
              href: personalInfo.social.facebook,
              delay: "0.3s",
            },
          ].map(({ icon: Icon, href, delay }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-vintage-card border border-vintage-border hover:border-vintage-accent transition-all duration-300 interactive-scale glow-effect group relative overflow-hidden"
              style={{ animationDelay: delay }}
            >
              <Icon className="w-6 h-6 text-vintage-muted group-hover:text-vintage-accent transition-colors relative z-10" />

              <div className="absolute inset-0 bg-vintage-accent/10 scale-0 group-hover:scale-100 transition-transform duration-300 rounded" />
            </a>
          ))}
        </div>

        <p
          className="text-lg md:text-xl text-vintage-muted max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-in-up"
          style={{ animationDelay: "1s", animationFillMode: "forwards" }}
        >
          {personalInfo.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection("projects")}
            className="px-8 py-3 bg-vintage-accent text-white  font-mono font-semibold hover:bg-vintage-accent/90 transition-all duration-300 interactive-scale glow-effect relative overflow-hidden group opacity-0 animate-fade-in-up"
            style={{ animationDelay: "1.2s", animationFillMode: "forwards" }}
          >
            <span className="relative z-10">View Projects</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-3 border-2 border-vintage-accent text-vintage-accent font-mono font-semibold hover:bg-vintage-accent hover:text-white transition-all duration-300 interactive-scale glow-effect opacity-0 animate-fade-in-up"
            style={{ animationDelay: "1.4s", animationFillMode: "forwards" }}
          >
            Contact Me
          </button>

          <a
            href={process.env.NEXT_PUBLIC_RESUME_LINK as string}
            download
            className="px-5 py-4 bg-vintage-accent text-white  font-mono font-semibold hover:bg-vintage-accent/90 transition-all duration-300 interactive-scale glow-effect relative overflow-hidden group opacity-0 animate-fade-in-up"
            style={{ animationDelay: "1.6s", animationFillMode: "forwards" }}
          >
            <span className="relative z-10">Download Resume</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-6 pt-8">
          {[
            { text: "About", section: "about", delay: "1.6s" },
            { text: "Experience", section: "experience", delay: "1.7s" },
            { text: "Education", section: "education", delay: "1.8s" },
            { text: "Certificates", section: "certificates", delay: "1.9s" },
            { text: "Skills", section: "skills", delay: "2.0s" },
          ].map(({ text, section, delay }) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="text-vintage-muted hover:text-vintage-accent transition-all duration-300 font-mono text-sm interactive-scale relative group opacity-0 animate-fade-in-up"
              style={{ animationDelay: delay, animationFillMode: "forwards" }}
            >
              {text}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-vintage-accent group-hover:w-full transition-all duration-300" />
            </button>
          ))}
        </div>
      </div>

      <div
        className="absolute top-10 left-10 w-20 h-20 border-l-2 border-t-2 border-vintage-accent/30 opacity-0 animate-fade-in"
        style={{ animationDelay: "2.2s", animationFillMode: "forwards" }}
      />
      <div
        className="absolute top-10 right-10 w-20 h-20 border-r-2 border-t-2 border-vintage-accent/30 opacity-0 animate-fade-in"
        style={{ animationDelay: "2.4s", animationFillMode: "forwards" }}
      />
      <div
        className="absolute bottom-10 left-10 w-20 h-20 border-l-2 border-b-2 border-vintage-accent/30 opacity-0 animate-fade-in"
        style={{ animationDelay: "2.6s", animationFillMode: "forwards" }}
      />
      <div
        className="absolute bottom-10 right-10 w-20 h-20 border-r-2 border-b-2 border-vintage-accent/30 opacity-0 animate-fade-in"
        style={{ animationDelay: "2.8s", animationFillMode: "forwards" }}
      />
    </section>
  );
}
