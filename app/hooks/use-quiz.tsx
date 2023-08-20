import create from "zustand";

interface QuizState {
  questions: string[]; // Array of quiz questions
  currentQuestionIndex: number;
  currentQuestion: object;
  setCurrentQuestionIndex: (index: number) => void;
  nextQuestion: () => void;
}

const useQuizStore = create<QuizState>((set) => ({
  questions: [], // Array of quiz questions
  currentQuestionIndex: 0,
  currentQuestion: () => set({}),
  setCurrentQuestionIndex: (index) => set({ currentQuestionIndex: index }),
  nextQuestion: () => {
    set((state) => ({
      currentQuestionIndex: Math.min(
        state.currentQuestionIndex + 1,
        state.questions.length - 1
      ),
    }));
  },
}));

export default useQuizStore;
