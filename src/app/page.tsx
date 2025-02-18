"use client";

import React from "react";
import { useSelector } from "react-redux";

import { RootState } from "@/store/store";

import Welcome from "@/components/Welcome";
import Navbar from "@/components/Navbar";
import CardContainer from "@/components/CardContainer";
import Result from "@/components/Result";

export default function Home() {
  const showWelcome = useSelector(
    (state: RootState) => state.questions.showWelcome
  );
  const showResults = useSelector(
    (state: RootState) => state.questions.showResults
  );

  return (
    <div className="flex items-center justify-center w-[100vw] h-[100vh] ">
      <div className="text-center w-[90%] sm:w-[80%] max-w-6xl h-[95%] overflow-auto">
        {showWelcome ? (
          <Welcome />
        ) : (
          <>
            {showResults ? (
              <Result />
            ) : (
              <>
                <Navbar />
                <CardContainer />
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}
