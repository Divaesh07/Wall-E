"use client";
import React, { useState } from "react";
import { Navbar } from "../component/Navbar";
import { Mobileview } from "../component/Mobilemenu";
import FarmMap from "./sections/FarmMap";
import Irrigate from "./sections/Irrigate";
import WaterAnalytics from "./sections/WaterAnalytics";
import Pestcontrol from "./sections/Pestcontrol";
import Rover from "./sections/Rover";

// Define tabs
const tabs = [
  { key: "farm-map", label: "Farm Map" },
  { key: "irrigation", label: "Irrigation" },
  { key: "pest-control", label: "Pest Control" },
  { key: "analytics", label: "Analytics" },
  { key: "rover", label: "Rover" },
];

const Manage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("farm-map");

  // Function to render content based on active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case "farm-map":
        return <FarmMap />;
      case "irrigation":
        return <Irrigate />;
      case "pest-control":
        return <Pestcontrol />;
      case "analytics":
        return <WaterAnalytics />;
      case "rover":
        return <Rover />;
      default:
        return <div>Select a tab</div>;
    }
  };

  // Handle tab change
  const handleTabChange = (tabKey: string) => {
    setActiveTab(tabKey);
  };

  return (
    <>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Mobileview menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main className="min-h-screen bg-black text-white px-4 pt-[80px] pb-4">
        <h1 className="text-2xl font-bold px-3 py-5">Rover Management</h1>
        <div className="flex space-x-4 bg-black p-2 rounded-lg shadow mb-4">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => handleTabChange(tab.key)}  // Call the handleTabChange
              className={`px-4 py-2 rounded-md font-semibold transition-all ${
                activeTab === tab.key
                  ? "bg-white text-black shadow"
                  : "bg-zinc-800 text-white hover:bg-zinc-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="bg-black p-6 rounded-lg">
          {renderTabContent()}
        </div>
      </main>
    </>
  );
};

export default Manage;
