import React, { useEffect, useState } from "react";
import { useTheme } from "../ThemeProvider";

function Nav() {
  const { isRedTheme, setIsRedTheme } = useTheme();
  const [DateUse, setDateUse] = useState("");

  let now = new Date();
  const house = now.getHours();

  useEffect(() => {
    if (house <= 12) {
      setDateUse("Morning");
    } else if (house > 12) {
      setDateUse("evening");
    } else if (house > 17) {
      setDateUse("night");
    }
  }, []);



  return (
    <div className={`w-full rounded-[100px] shadow-2xl py-[25px] flex justify-between px-[50px] transition-colors duration-500 relative`}>
      <h2 className="font-bold text-2xl nav-h2 ">
        Good {DateUse}, <span className="text-primary nav-h2-span">BKDR</span>
      </h2>

      <button
        className="bg-white rounded-[10px] p-2 toggel-btn"
        onClick={() => setIsRedTheme(!isRedTheme)}
      >
        {isRedTheme ? "☀️" : "🌙"}
      </button>
    </div>
  );
}

export default Nav;
