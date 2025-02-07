import { questions } from "@/data/questions";

export interface AnalyzedResults {
  correctCount: number;
  wrongGrouped: Record<string, typeof questions>;
  passedGrouped: Record<string, typeof questions>;
}

export const analyzeResults = (
  correctAnswers: string[],
  wrongAnswers: string[],
  passedQuestions: string[]
): AnalyzedResults => {
  const groupQuestions = (ids: string[]) => {
    return ids
      .map((id) => questions.find((q) => q.id === id))
      .filter((q): q is NonNullable<typeof q> => q !== undefined) // Ensure no undefined values
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
