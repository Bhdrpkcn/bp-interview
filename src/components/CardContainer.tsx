import React from "react";
import Card from "./Card";
import { questions } from "@/data/questions";

const CardContainer: React.FC = () => {
  return (
    <div className="grid gap-6 max-w-3xl mx-auto">
      {questions.map((q) => (
        <Card key={q.id} {...q} />
      ))}
    </div>
  );
};

export default CardContainer;
