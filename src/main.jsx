import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Pages
import Login from "./pages/Login.jsx";
import MoodSelector from "./pages/MoodSelector.jsx";

// Mood-based Home Pages
import HappyHome from "./pages/home/Home.jsx"; // You renamed HappyHome to Home
import SadHome from "./pages/home/SadHome.jsx";
import AnxiousHome from "./pages/home/AnxiousHome.jsx";
import LovedHome from "./pages/home/LovedHome.jsx";
import LonelyHome from "./pages/home/LonelyHome.jsx";

// Styles
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/mood" element={<MoodSelector />} />

        {/* Dynamic mood-based home routing */}
        <Route
          path="/home"
          element={
            (() => {
              const mood = localStorage.getItem("vibeMood");
              return mood === "Happy" ? (
                <HappyHome />
              ) : mood === "Sad" ? (
                <SadHome />
              ) : mood === "Anxious" ? (
                <AnxiousHome />
              ) : mood === "Loved" ? (
                <LovedHome />
              ) : mood === "Lonely" ? (
                <LonelyHome />
              ) : (
                <Navigate to="/mood" />
              );
            })()
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
