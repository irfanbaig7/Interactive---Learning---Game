import { create } from "zustand"
import type { Challenge, Path } from "../types/game"
import { gemePaths } from "../data/gameData"

type Gamestate = {
    paths: Path[],
    currentPath: Path | null,
    xp: number,
    currentChallenge: Challenge | null,

    selectPath: (pathId: string) => void
    addXp: (amount: number) => void
    setCurrentChallenge: (challenge: Challenge) => void
}

export const useGameStore = create<Gamestate>((set) => ({
    paths: gemePaths,
    currentPath: null,
    xp: 0,
    currentChallenge: null,
    selectPath: (pathId) => set((state) => {
        const path = state.paths.find((p) => p.id === pathId) || null;
        const fristChallenge = path?.levels[0]?.challenges[0] || null;

        return {
            currentPath: path,
            currentChallenge: fristChallenge,
        }

    }),
    addXp: (amount) => set((state) => ({
        xp: state.xp + amount,
    })),

    setCurrentChallenge: (challenge) => set({ currentChallenge: challenge })
}))