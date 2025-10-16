import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout.jsx';
import Game from './pages/Game.jsx';
import Settings from './pages/Settings.jsx';
import HomePage from "./Pages/HomePage.jsx";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="game" element={<Game />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;
