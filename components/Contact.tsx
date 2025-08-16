"use client";

import { useState, useEffect, useRef } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { personalInfo } from "@/lib/data";
import emailjs from "emailjs-com"; 

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState<boolean>(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      );

      if (res.status === 200) {
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (err) {
      console.error("EmailJS error:", err);
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-5xl font-bold font-mono text-vintage-text mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-vintage-accent mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8 fade-in">
            <div>
              <h3 className="text-xl font-bold mb-4 text-vintage-text font-mono">
                Let's Work Together
              </h3>
              <p className="text-vintage-muted leading-relaxed">
                I'm always interested in new opportunities and exciting
                projects. Whether you have a question or just want to say hi,
                feel free to reach out.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-vintage-card border border-vintage-border hover:border-vintage-accent transition-colors">
                <Mail className="w-5 h-5 text-vintage-accent" />
                <span className="text-vintage-text font-mono">
                  {personalInfo.email}
                </span>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-vintage-card border border-vintage-border hover:border-vintage-accent transition-colors">
                <Phone className="w-5 h-5 text-vintage-accent" />
                <span className="text-vintage-text font-mono">
                  {personalInfo.phone}
                </span>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-vintage-card border border-vintage-border hover:border-vintage-accent transition-colors">
                <MapPin className="w-5 h-5 text-vintage-accent" />
                <span className="text-vintage-text font-mono">
                  {personalInfo.location}
                </span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 fade-in">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-vintage-card border border-vintage-border focus:border-vintage-accent focus:outline-none text-vintage-text placeholder-vintage-muted font-mono transition-colors"
                required
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-vintage-card border border-vintage-border focus:border-vintage-accent focus:outline-none text-vintage-text placeholder-vintage-muted font-mono transition-colors"
                required
              />
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-vintage-card border border-vintage-border focus:border-vintage-accent focus:outline-none text-vintage-text placeholder-vintage-muted font-mono resize-none transition-colors"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-vintage-accent text-vintage-bg font-mono font-semibold hover:bg-vintage-accent/90 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Send className="w-4 h-4" />
              <span>{submitting ? "Sending..." : "Send Message"}</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
