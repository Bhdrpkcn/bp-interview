"use client";

import React from "react";

interface HeaderProps {
  selectedMode: string;
  setSelectedMode: (mode: string) => void;
}

const Header: React.FC<HeaderProps> = ({ selectedMode, setSelectedMode }) => {
  return (
    <div className="flex justify-center space-x-4 p-4 bg-white shadow-md rounded-md mb-6">
      <label className="cursor-pointer">
        <input
          type="radio"
          value="all"
          checked={selectedMode === "all"}
          onChange={() => setSelectedMode("all")}
          className="mr-2"
        />
        Show All
      </label>

      <label className="cursor-pointer">
        <input
          type="radio"
          value="ordered"
          checked={selectedMode === "ordered"}
          onChange={() => setSelectedMode("ordered")}
          className="mr-2"
        />
        Show Ordered
      </label>

      <label className="cursor-pointer">
        <input
          type="radio"
          value="random"
          checked={selectedMode === "random"}
          onChange={() => setSelectedMode("random")}
          className="mr-2"
        />
        Show Random
      </label>
    </div>
  );
};

export default Header;
