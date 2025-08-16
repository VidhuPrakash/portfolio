"use client";

import { useEffect, useRef, useState } from "react";
import {
  Award,
  ExternalLink,
  Calendar,
  Shield,
  CheckCircle,
} from "lucide-react";
import { certificates } from "@/lib/data";

export default function Certificates() {
  const sectionRef = useRef<HTMLElement>(null);
  const [expandedCert, setExpandedCert] = useState<number | null>(null);

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

  const toggleExpanded = (certId: number) => {
    setExpandedCert(expandedCert === certId ? null : certId);
  };

  return (
    <section id="certificates" ref={sectionRef} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-5xl font-bold font-mono text-vintage-text mb-4">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-vintage-accent mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={cert.id}
              className="bg-vintage-card border border-vintage-border hover:border-vintage-accent transition-all duration-300 group hover-lift interactive-scale glow-effect fade-in"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative h-48 bg-gradient-to-br from-vintage-accent/20 to-vintage-accent/5 flex items-center justify-center overflow-hidden">
                {cert.iframeLink ? (
                  <div className="w-full h-full">
                    <iframe
                      src={cert.iframeLink}
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      scrolling="no"
                      className="rounded-t-lg"
                      title={`${cert.title} Certificate`}
                    />
                  </div>
                ) : (
                  <>
                    <Award className="w-24 h-24 text-vintage-accent animate-float" />

                    <div className="absolute inset-0">
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-2 h-2 bg-vintage-accent/30 rounded-full animate-float"
                          style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${i * 0.3}s`,
                            animationDuration: `${3 + Math.random() * 2}s`,
                          }}
                        />
                      ))}
                    </div>
                  </>
                )}

                {cert.expiryDate && (
                  <div
                    className={`absolute top-4 right-4 px-2 py-1 text-xs font-mono font-bold flex items-center space-x-1 ${
                      cert?.expiryDate && new Date(cert?.expiryDate) > new Date()
                        ? "bg-green-500 text-white"
                        : cert.expiryDate
                        ? "bg-yellow-500 text-black"
                        : "bg-blue-500 text-white"
                    }`}
                  >
                    <CheckCircle className="w-3 h-3" />
                    <span>
                      {cert.expiryDate && new Date(cert.expiryDate) > new Date()
                        ? "ACTIVE"
                        : cert.expiryDate
                        ? "EXPIRED"
                        : "LIFETIME"}
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <p className="text-vintage-accent font-mono text-sm mb-1">
                    {cert.issuer}
                  </p>
                  <h3 className="text-lg font-bold text-vintage-text font-mono mb-2 hover:text-vintage-accent transition-colors">
                    {cert.title}
                  </h3>
                </div>

                <p className="text-vintage-muted mb-4 leading-relaxed text-sm">
                  {cert.description}
                </p>

                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-vintage-muted">Issue Date:</span>
                    <span className="text-vintage-text font-mono">
                      {cert.issueDate}
                    </span>
                  </div>
                  {cert.expiryDate && (
                    <div className="flex items-center justify-between">
                      <span className="text-vintage-muted">Expires:</span>
                      <span className="text-vintage-text font-mono">
                        {cert.expiryDate}
                      </span>
                    </div>
                  )}
                  <div className="flex items-center justify-between">
                    <span className="text-vintage-muted">Certificate ID:</span>
                    <span className="text-vintage-accent font-mono text-xs">
                      {cert.certificateId}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-vintage-accent/10 border border-vintage-accent/20 text-vintage-accent text-xs font-mono hover:bg-vintage-accent/20 transition-all duration-300 interactive-scale cursor-pointer"
                      style={{ transitionDelay: `${skillIndex * 50}ms` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={cert.verificationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-vintage-muted hover:text-vintage-accent transition-all duration-300 interactive-scale"
                  >
                    <Shield className="w-4 h-4" />
                    <span className="font-mono text-sm">Verify</span>
                  </a>
                  <button
                    onClick={() => toggleExpanded(cert.id)}
                    className="flex items-center space-x-2 text-vintage-muted hover:text-vintage-accent transition-all duration-300 interactive-scale"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="font-mono text-sm">
                      {expandedCert === cert.id ? "Less" : "More"}
                    </span>
                  </button>
                </div>

                {expandedCert === cert.id && (
                  <div className="mt-4 pt-4 border-t border-vintage-border animate-fade-in">
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-vintage-accent" />
                        <span className="text-vintage-muted">
                          Valid from {cert.issueDate}
                          {cert.expiryDate && ` to ${cert.expiryDate}`}
                        </span>
                      </div>
                      <div className="bg-vintage-section p-3 rounded border border-vintage-border">
                        <p className="text-vintage-muted text-xs font-mono">
                          Certificate ID: {cert.certificateId}
                        </p>
                        <p className="text-vintage-muted text-xs">
                          Click "Verify" to authenticate this certificate with
                          the issuing organization.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(4)].map((_, i) => (
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
              <Award className="w-12 h-12 text-vintage-accent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
