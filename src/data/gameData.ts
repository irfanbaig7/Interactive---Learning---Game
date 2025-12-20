import type { Path } from "../types/game";

export const gemePaths: Path[] = [
    {
        id: "js",
        title: "javascript basics",
        levels: [
            {
                id: "js-level-1",
                title: "Scope basics",
                requiredXP: 0,
                challenges: [
                    {
                        id: "c1",
                        type: "predict",
                        question: "Is code ka output kay hoga",
                        code: ` 
                            let x = 1;
                            function test() {
                            console.log(x);
                            }
                            test();
                        `,
                        options: ["1", "undefined", "Error"],
                        correctAnswer: "1",
                        explanation:
                            "Function apne outer scope se x ko access karta hai.",
                        xp: 10,
                    },
                ],
            },
        ],
    },
]
