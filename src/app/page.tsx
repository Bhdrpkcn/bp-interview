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
    <div className="flex items-center justify-center w-[100vw] h-[calc(100vh-5rem)] ">
      <div className="text-center w-[90%] sm:w-[70%] md:w-[50%] max-w-xl h-[95%] overflow-auto">
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
