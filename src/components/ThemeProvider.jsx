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
        className={`min-h-screen transition-colors duration-500 ${
          isRedTheme
            ? "bg-red-900 text-white"
            : "bg-[#0A0F24]"
        }`}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
