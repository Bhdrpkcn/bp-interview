import { analyzeResults } from "@/utils/analyzeResults";

const messages = [
  "Mimarlık ?",
  "Olmadı",
  "Güzel abi 😐",
  "Abiii, güzel 🏆",
  "Orhun? 🤔🔥",
];

export const GetAnalysisMessage = (
  correctAnswers: string[],
  wrongAnswers: string[],
  passedQuestions: string[],
  totalQuestions: number
) => {
  if (totalQuestions === 0) return "Soru bulunamadı.";

  const analyzedResults = analyzeResults(
    correctAnswers,
    wrongAnswers,
    passedQuestions
  );

  const percentage = (analyzedResults.correctCount / totalQuestions) * 100;

  let messageIndex = 0;
  if (percentage > 90) messageIndex = 4;
  else if (percentage > 75) messageIndex = 3;
  else if (percentage > 50) messageIndex = 2;
  else if (percentage > 20) messageIndex = 1;

  return messages[messageIndex];
};
