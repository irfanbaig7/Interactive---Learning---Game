import { create } from "zustand"
import type { Path } from "../types/game"
import { gemePaths } from "../data/gameData"

type Gamestate = {
    paths: Path[],
    currentPath: Path | null,
    xp: number,

    selectPath: (pathId: string) => void
    addXp: (amount: number) => void
}

export const useGameStore = create<Gamestate>((set) => ({
    paths: gemePaths,
    currentPath: null,
    xp: 0,
    selectPath: (pathId) => set((state) => ({        
        currentPath: state.paths.find((p) => p.id === pathId) || null,
    })),
    addXp: (amount) => set((state) => ({
        xp: state.xp + amount,
    }))
}))