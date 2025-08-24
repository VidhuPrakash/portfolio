"use client";

import { useTheme } from "@/lib/theme-context";

export default function RetroBackground() {
  const { theme } = useTheme();

  return (
    <>
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern" />
      </div>

      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-scanlines" />
      </div>

      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`absolute animate-float-${i % 3} ${
              theme === "dark"
                ? "bg-gradient-to-r from-retro-accent/5 to-retro-secondary/5"
                : "bg-gradient-to-r from-retro-accent/5 to-retro-secondary/5"
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${20 + Math.random() * 30}px`,
              height: `${20 + Math.random() * 30}px`,
              transform: `rotate(${Math.random() * 360}deg)`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <div className="fixed inset-0 pointer-events-none">
        <div
          className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-10 ${
            theme === "dark" ? "bg-retro-accent" : "bg-retro-accent"
          }`}
        />
        <div
          className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-10 ${
            theme === "dark" ? "bg-retro-secondary" : "bg-retro-secondary"
          }`}
        />
      </div>
    </>
  );
}
