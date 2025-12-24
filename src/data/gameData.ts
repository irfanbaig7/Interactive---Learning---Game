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
                challenges:

                    [
                        {
                            id: "c1",
                            type: "predict",
                            question: "Is code ka output kya hoga?",
                            code: `
                            var x = 5;
                            function test() {
                                var x = 10;
                                return x;
                            }
                            test();
                            `,
                            options: ["5", "10", "Error"],
                            correctAnswer: "10",
                            hint: "Function ke andar naya x bana hai.",
                            explanation:
                                "Function ke andar var x declare hua hai, jo outer x ko shadow karta hai. Isliye return 10 hota hai.",
                            xp: 10,
                        },

                        {
                            id: "c2",
                            type: "predict",
                            question: "Is code ka output kya hoga?",
                            code: `
                            var a = 3;
                            function add() {
                                a = a + 2;
                            }
                            add();
                            a;
                            `,
                            options: ["3", "5", "undefined"],
                            correctAnswer: "5",
                            hint: "Kya function ke andar naya variable bana hai?",
                            explanation:
                                "Function ke andar a declare nahi hua, isliye outer a update hota hai. 3 + 2 = 5.",
                            xp: 10,
                        },

                        {
                            id: "c3",
                            type: "predict",
                            question: "Is code ka output kya hoga?",
                            code: `
                            var x = 1;
                            if (true) {
                                let x = 2;
                            }
                            x;
                            `,
                            options: ["1", "2", "Error"],
                            correctAnswer: "1",
                            hint: "let ka scope block tak hota hai.",
                            explanation:
                                "let se banaya gaya x sirf if block ke andar exist karta hai. Bahar wala x unchanged rehta hai.",
                            xp: 10,
                        },

                        {
                            id: "c4",
                            type: "predict",
                            question: "Is code ka output kya hoga?",
                            code: `
                            function show() {
                                return value;
                            }
                            var value = 7;
                            show();
                            `,
                            options: ["7", "undefined", "Error"],
                            correctAnswer: "7",
                            hint: "Function call kab ho rahi hai, ye dekho.",
                            explanation:
                                "show() tab call hota hai jab value already 7 assign ho chuki hoti hai, isliye output 7 hai.",
                            xp: 10,
                        },

                        {
                            id: "c5",
                            type: "predict",
                            question: "Is code ka output kya hoga?",
                            code: `
                            var count = 0;
                            function inc() {
                                count = count + 1;
                            }
                            inc();
                            inc();
                            count;
                            `,
                            options: ["0", "1", "2"],
                            correctAnswer: "2",
                            hint: "Function kitni baar call ho rahi hai?",
                            explanation:
                                "inc() function do baar call hui hai aur har baar count ko 1 se badhaya.",
                            xp: 10,
                        },

                        {
                            id: "c6",
                            type: "predict",
                            question: "Is code ka output kya hoga?",
                            code: `
                            var x = 10;
                            function test() {
                                if (true) {
                                var x = 20;
                                }
                                return x;
                            }
                            test();
                            `,
                            options: ["10", "20", "undefined"],
                            correctAnswer: "20",
                            hint: "var block scoped nahi hota.",
                            explanation:
                                "var function scoped hota hai, isliye if block ke andar wala x poore function me apply hota hai.",
                            xp: 10,
                        },

                        {
                            id: "c7",
                            type: "choose",
                            question: "Function 5 kyu return karta hai?",
                            code: `
                            var x = 2;
                            function demo() {
                                x = 5;
                                return x;
                            }
                            demo();
                            `,
                            options: [
                                "Function ne naya local x banaya",
                                "Function ne global x ko update kiya",
                                "Functions bahar ke variables access nahi kar sakte",
                                "var block scoped hota hai"
                            ],
                            correctAnswer: "Function ne global x ko update kiya",
                            hint: "Function ke andar var likha hai ya nahi?",
                            explanation:
                                "x function ke andar declare nahi hua, isliye global x update hua aur value 5 ho gayi.",
                            xp: 10,
                        },

                        {
                            id: "c8",
                            type: "choose",
                            question: "Outer x change kyu nahi hua?",
                            code: `
                            var x = 1;
                            function test() {
                                let x = 3;
                            }
                            test();
                            x;
                            `,
                            options: [
                                "let function scoped hota hai",
                                "let block scoped hota hai",
                                "Functions variable change nahi kar sakte",
                                "x var se declare hua hai"
                            ],
                            correctAnswer: "let block scoped hota hai",
                            hint: "let ka scope yaad karo.",
                            explanation:
                                "let se bana x sirf function ke block tak limited hai, outer x par koi effect nahi padta.",
                            xp: 10,
                        },

                        {
                            id: "c9",
                            type: "true_false",
                            question: "var se function ke andar declare variable function ke bahar access ho sakta hai.",
                            code: null,
                            options: ["True", "False"],
                            correctAnswer: "False",
                            hint: "Function scope ka rule yaad karo.",
                            explanation:
                                "var function scoped hota hai, isliye function ke bahar accessible nahi hota.",
                            xp: 10,
                        },

                        {
                            id: "c10",
                            type: "true_false",
                            question: "JavaScript me function tab execute hota hai jab usse call kiya jata hai.",
                            code: null,
                            options: ["True", "False"],
                            correctAnswer: "True",
                            hint: "Execution order par focus karo.",
                            explanation:
                                "Function sirf define hone se run nahi hota, jab call hota hai tab execute hota hai.",
                            xp: 10,
                        }
                    ]




            },
        ],
    },
]
