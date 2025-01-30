import React from "react";
import Card from "./Card";
import CardContainer from "./CardContainer";
import { questions } from "@/data/questions";

interface BodyProps {
  selectedMode: string;
}

const Body: React.FC<BodyProps> = ({ selectedMode }) => {
  if (selectedMode === "all") {
    return <CardContainer />;
  }

  if (selectedMode === "ordered") {
    return <Card {...questions[0]} />;
  }

  if (selectedMode === "random") {
    const randomIndex = Math.floor(Math.random() * questions.length);
    return <Card {...questions[randomIndex]} />;
  }

  return null;
};

export default Body;
