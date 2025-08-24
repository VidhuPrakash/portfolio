"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 p-3 bg-vintage-card border border-vintage-border hover:border-vintage-accent transition-colors rounded-md"
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5 text-vintage-accent" />
      ) : (
        <Moon className="w-5 h-5 text-vintage-accent" />
      )}
    </button>
  );
}
