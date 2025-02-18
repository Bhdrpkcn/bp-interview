"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { resetGame } from "@/store/questionSlice";
import AnalyzeContainer from "@/components/AnalyzeContainer";
import { generatePDF } from "@/utils/generatePDF"; // ✅ Import helper
import { analyzeResults } from "@/utils/analyzeResults";

const Result: React.FC = () => {
  const dispatch = useDispatch();
  const { correctAnswers, wrongAnswers, passedQuestions } = useSelector(
    (state: RootState) => state.questions
  );

  const { correctCount, wrongGrouped, passedGrouped } = analyzeResults(
    correctAnswers,
    wrongAnswers,
    passedQuestions
  );

  // Function to share the PDF via WhatsApp
  const shareViaWhatsApp = async () => {
    try {
      const pdfBlob = await generatePDF(
        correctCount,
        wrongGrouped,
        passedGrouped
      );
      const file = new File([pdfBlob], "quiz-sonuclari.pdf", {
        type: "application/pdf",
      });

      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: "Quiz Sonuçları",
          text: "Quiz sonucumu paylaşmak istiyorum!",
        });
      } else {
        alert("Bu cihaz dosya paylaşımını desteklemiyor.");
      }
    } catch (error) {
      console.error("WhatsApp paylaşımı başarısız:", error);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-md rounded-md">
      <div>
        <h1 className="text-2xl font-bold mb-4">📊 Quiz Results</h1>

        <div className="mb-6">
          <h2 className="text-xl font-semibold">
            Correct Answers: {correctCount}
          </h2>
        </div>

        <AnalyzeContainer
          title="❌ Incorrect Answers"
          groupedQuestions={wrongGrouped}
        />

        <AnalyzeContainer
          title="🚩 Passed Questions"
          groupedQuestions={passedGrouped}
        />
      </div>

      <div className="flex space-x-4 mt-4">
        <button
          onClick={() => dispatch(resetGame())}
          className="px-6 py-2 bg-blue-500 text-white rounded"
        >
          🔄 Restart Quiz
        </button>

        <button
          onClick={() => generatePDF(correctCount, wrongGrouped, passedGrouped)}
          className="px-6 py-2 bg-green-500 text-white rounded"
        >
          📄 Download PDF
        </button>

        <button
          onClick={shareViaWhatsApp}
          className="px-6 py-2 bg-gray-500 text-white rounded"
        >
          📲 WhatsApp ile Paylaş
        </button>
      </div>
    </div>
  );
};

export default Result;
