import { useEffect, useState } from "react";
import SunIcon from "../icons/SunIcon";
import MoonIcon from "../icons/MoonIcon";

export default function ThemeToggle({ iconOnly, onClick = null, classes = "" }) {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    const currentIsDark = !isDark;
    setIsDark(currentIsDark);
    localStorage.setItem("theme", currentIsDark ? "dark" : "light");

    html.classList.contains("dark")
      ? html.classList.remove("dark")
      : html.classList.add("dark");
  };

  return (
    <button
      onClick={() => {
        toggleTheme();
        onClick?.();
      }}
      className={`flex items-center justify-center ${
        iconOnly ? "border" : ""
      } border-neutral-200 p-4 rounded-full hover hover:ring ring-palette-yellow ring-offset-4 ring-offset-neutral-50 dark:ring-offset-slate-800 transition ${classes}`}
    >
      <span className={iconOnly ? "sr-only" : "mr-4"}>
        {isDark ? "Light theme" : "Dark theme"}
      </span>
      {isDark ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
