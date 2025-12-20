export type ChallengeType = "predict" | "trace" | "fix" | "choose";

export type Challenge = {
    id: string;
    type: ChallengeType;
    question: string;
    code?: string;
    options?: string[];
    correctAnswer: string;
    explanation: string;
    xp: number;
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
