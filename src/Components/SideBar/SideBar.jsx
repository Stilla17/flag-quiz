import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { IoGameController, IoChevronBack, IoChevronForward } from "react-icons/io5";

function SideBar() {
    const [open, setOpen] = useState(false);
    const [showArrow, setShowArrow] = useState(false);
    const { pathname } = useLocation();

    const menu = [
        { name: "Home", path: "/", icon: <FaHome /> },
        { name: "Game", path: "/game", icon: <IoGameController /> },
        { name: "Settings", path: "/settings", icon: <IoMdSettings /> },
    ];
    const sidebarWidth = () => {
        if (open) {
            return "w-60";
        } else {
            return "w-20";
        }
    };

    const arrowVisible = () => {
        if (showArrow) {
            return "opacity-100 translate-x-0";
        } else {
            return "opacity-0 translate-x-3";
        }
    };

    const menuStyle = (path) => {
        if (pathname === path) {
            return "bg-gradient-to-r from-blue-600 to-blue-400 shadow-lg";
        } else {
            return "hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-400";
        }
    };

    const iconColor = (path) => {
        if (pathname === path) {
            return "text-white";
        } else {
            return "text-gray-300";
        }
    };

    return (
        <div onMouseEnter={() => setShowArrow(true)} onMouseLeave={() => setShowArrow(false)} className={`${sidebarWidth()} h-[90vh] ml-[10px] mt-[25px] mb-[25px] BarSunV text-white flex flex-col justify-between transition-all duration-300 rounded-3xl relative shadow-2xl border border-blue-900/30`}>
            <button onClick={() => setOpen(!open)} className={`absolute right-2 top-3 p-2 rounded-full transition-all duration-300 BarStrelka ${arrowVisible()}`}>{open ? <IoChevronBack /> : <IoChevronForward />}</button>

            <div className="flex flex-col gap-2 mt-14 px-3">
                {menu.map((item, i) => (
                    <Link key={i} to={item.path} className={`flex items-center gap-4 p-3 rounded-2xl transition-all duration-300 ${menuStyle(item.path)}`}>
                        <div className={`text-[22px] ml-[5px] ${iconColor(item.path)}`}>{item.icon}</div>
                        {open && <span className="text-[15px] text-gray-200 font-medium">{item.name}</span>}
                    </Link>
                ))}
            </div>
        </div>

    );
}

export default SideBar;
