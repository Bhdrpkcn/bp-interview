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
