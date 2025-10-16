import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isRedTheme, setIsRedTheme] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) setIsRedTheme(saved === "red");
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", isRedTheme ? "red" : "primary");

    document.documentElement.classList.toggle("dark-blue-theme", !isRedTheme);
  }, [isRedTheme]);

  return (
    <ThemeContext.Provider value={{ isRedTheme, setIsRedTheme }}>
      <div
        className={`min-h-screen transition-colors duration-500 ${isRedTheme
            ? "bg-gradient-to-b from-[#ff3b3b] to-[#1a0000] text-white"
            : "bg-gradient-to-b from-[#081636] to-[#0d2b6b]"
        }`}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);