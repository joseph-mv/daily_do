import React, { useEffect, useState } from "react";
import "./ThemeToggle.css";
const ThemeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    // Initialize state based on local storage or system preference
    const savedTheme = localStorage.getItem("theme");
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (savedTheme) {
      return savedTheme === "dark";
    } else {
      return prefersDarkMode;
    }
  });

  useEffect(() => {
    // Apply the theme className to the body
    if (isDarkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <label className="switch">
      <input onChange={toggleTheme} checked={!isDarkMode} type="checkbox" />
      <span className="slider"></span>
    </label>
  );
};

export default ThemeToggle;
