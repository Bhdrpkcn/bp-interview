export interface questionProps {
  id: string;
  category: string;
  subCategory: string;
  question: string;
  qCode?: string;
  answer?: string;
  answerLi?: string[];
  answerCode?: string;
  hint?: string;
}

// export interface AnalyzedResults {
//   correctCount: number;
//   wrongGrouped: Record<string, typeof questions>;
//   passedGrouped: Record<string, typeof questions>;
// }
