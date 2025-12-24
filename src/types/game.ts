export type ChallengeType = "predict" | "trace" | "fix" | "choose" | "true_false";

export type Challenge = {
    id: string;
    type: ChallengeType;
    question: string;
    code?: string | null;
    options?: string[];
    correctAnswer: string;
    explanation: string;
    xp: number;
    hint?: string;
};

export type Level = {
    id: string;
    title: string;
    requiredXP: number;
    challenges: Challenge[];
};

export type Path = {
    id: string;
    title: string;
    levels: Level[];
};
