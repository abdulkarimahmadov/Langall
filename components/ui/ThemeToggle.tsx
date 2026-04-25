"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";

const THEME_KEY = "globalidioms-theme";

export function ThemeToggle() {
  useEffect(() => {
    const saved = localStorage.getItem(THEME_KEY);
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldBeDark = saved ? saved === "dark" : prefersDark;
    localStorage.setItem(THEME_KEY, shouldBeDark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", shouldBeDark);
  }, []);

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.contains("dark");
    const next = !isDark;
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem(THEME_KEY, next ? "dark" : "light");
  };

  return <Button onClick={toggleTheme}>Toggle Theme</Button>;
}
