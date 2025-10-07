import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from './../components/SideBar/SideBar.jsx';

function Layout() {
  return (
    <div className="flex min-h-screen">
      <SideBar />
      <main className="flex-1 bg-[#f4f5fa] p-6 transition-all duration-300">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
