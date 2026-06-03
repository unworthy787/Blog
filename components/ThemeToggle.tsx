"use client";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button onClick={toggle} className="theme-toggle" aria-label="Toggle theme"
      title={theme === "dark" ? "Light mode" : "Dark mode"}>
      <div className="theme-toggle-thumb">
        {theme === "dark" ? "🌙" : "☀️"}
      </div>
    </button>
  );
}
