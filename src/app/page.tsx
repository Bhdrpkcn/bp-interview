"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Body from "@/components/Body";

export default function Home() {
  const [selectedMode, setSelectedMode] = useState("all");

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-6">
        JavaScript Interview Questions 🚀
      </h1>

      <Header selectedMode={selectedMode} setSelectedMode={setSelectedMode} />
      <Body selectedMode={selectedMode} />
    </div>
  );
}
