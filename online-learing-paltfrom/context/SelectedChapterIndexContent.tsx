import { createContext, Dispatch, SetStateAction } from "react";

export interface SelectedChapterIndexContentProps {
  selectedChapterIndex: number;
  setSelectedChapterIndex: Dispatch<SetStateAction<number>>;
}

export const SelectedChapterIndexContent = createContext<SelectedChapterIndexContentProps | null>(null);
