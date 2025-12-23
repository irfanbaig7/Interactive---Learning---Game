import { create } from "zustand"
import type { Challenge, Path } from "../types/game"
import { gemePaths } from "../data/gameData"

type Gamestate = {
    paths: Path[],
    currentPath: Path | null,
    xp: number,
    currentChallenge: Challenge | null,
    currentChallengeIndex: number,


    selectPath: (pathId: string) => void
    addXp: (amount: number) => void
    nextChallenge: () => void;
    // setCurrentChallenge: (challenge: Challenge) => void
}

export const useGameStore = create<Gamestate>((set) => ({
    paths: gemePaths,
    currentPath: null,
    xp: 0,
    currentChallenge: null,
    currentChallengeIndex: 0,
    selectPath: (pathId) => set((state) => {
        const path = state.paths.find((p) => p.id === pathId) || null;
        const fristChallenge = path?.levels[0]?.challenges[0] || null;

        return {
            currentPath: path,
            currentChallenge: fristChallenge,
            currentChallengeIndex: 0,
        }

    }),
    addXp: (amount) => set((state) => ({
        xp: state.xp + amount,
    })),

    nextChallenge: () =>
        set((state) => {
            if (!state.currentPath) return state;

            const challenges = state.currentPath.levels[0].challenges;
            const nextIndex = state.currentChallengeIndex + 1;

            if (nextIndex >= challenges.length) {
                return {
                    currentChallenge: null,
                };
            }

            return {
                currentChallengeIndex: nextIndex,
                currentChallenge: challenges[nextIndex],
            };
        })

    // setCurrentChallenge: (challenge) => set({ currentChallenge: challenge })
}))