import { questions } from "@/data/questions";
import { AnalyzedResults } from "@/types/types";

export const analyzeResults = (
  correctAnswers: string[],
  wrongAnswers: string[],
  passedQuestions: string[]
): AnalyzedResults => {
  const groupQuestions = (ids: string[]) => {
    return ids
      .map((id) => questions.find((q) => q.id === id))
      .filter((q): q is NonNullable<typeof q> => q !== undefined)
      .reduce((acc, question) => {
        const key = `${question.category} - ${question.subCategory}`;
        if (!acc[key]) acc[key] = [];
        acc[key].push(question);
        return acc;
      }, {} as Record<string, typeof questions>);
  };

  return {
    correctCount: correctAnswers.length,
    wrongGrouped: groupQuestions(wrongAnswers),
    passedGrouped: groupQuestions(passedQuestions),
  };
};
