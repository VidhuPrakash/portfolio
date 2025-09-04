"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [resolvedTheme, setResolvedTheme] = useState("light");

  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {
    if (theme === "system") {
      setResolvedTheme(systemTheme || "light");
    } else {
      setResolvedTheme(theme || "light");
    }
  }, [theme, systemTheme]);

  const toggleTheme = () => {
    const newTheme = resolvedTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 p-3 bg-vintage-card border border-vintage-border hover:border-vintage-accent transition-colors rounded-md"
      aria-label={`Switch to ${
        resolvedTheme === "dark" ? "light" : "dark"
      } mode`}
    >
      {resolvedTheme === "dark" ? (
        <Sun className="w-5 h-5 text-vintage-accent" />
      ) : (
        <Moon className="w-5 h-5 text-vintage-accent" />
      )}
    </button>
  );
}
