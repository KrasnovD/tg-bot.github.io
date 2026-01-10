export interface Question {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation?: string;
}

export interface TestResult {
    score: number;
    correctAnswers: number;
    totalQuestions: number;
    userAnswers: (number | null)[];
    timeSpent: number;
}

export type TestStatus = 'config' | 'inProgress' | 'completed';