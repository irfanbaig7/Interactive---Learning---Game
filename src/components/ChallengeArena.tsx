import { useState } from "react"
import { useGameStore } from "../store/useGameStore"

const ChallengeArena = () => {

    const challenge = useGameStore((s) => s.currentChallenge)
    const addXP = useGameStore((s) => s.addXp)
    const nextChallenge = useGameStore((s) => s.nextChallenge);
    const recordAttempt = useGameStore((s) => s.recordAttempt);

    const totalAttempts = useGameStore((s) => s.totalAttempts);
    const correctAttempts = useGameStore((s) => s.correctAttempts);

    const resetStats = useGameStore((s) => s.resetStats);

    const [selected, setSelected] = useState<string | null>(null)
    const [submitted, setSubmitted] = useState(false)

    const [hintUsed, setHintUsed] = useState(false);
    const [showHint, setShowHint] = useState(false);

    const accuracy =
        totalAttempts === 0
            ? 0
            : Math.round((correctAttempts / totalAttempts) * 100);

    if (!challenge) {
        return (
            <div style={{ marginTop: 30 }}>
                <h2>🎉 Level Completed!</h2>

                <p>
                    Accuracy: <strong>{accuracy}%</strong>
                </p>

                <p>
                    Correct: {correctAttempts} / {totalAttempts}
                </p>

                <button
                    style={{ marginTop: 10 }}
                    onClick={() => {
                        resetStats();
                    }}
                >
                    Continue →
                </button>
            </div>
        );
    }

    const isCorrect = selected === challenge.correctAnswer;

    const BONUS_XP = 2;

    const handleSubmit = () => {
        if (!selected) return;
        setSubmitted(true)
        recordAttempt(isCorrect);
        if (isCorrect) {
            let totalXP = challenge.xp;
            if (!hintUsed) {
                totalXP += BONUS_XP;
            }
            addXP(totalXP);
        }
    }

    return (
        <div style={{ marginTop: 30 }}>
            <h2>Challenges</h2>
            <p>{challenge.question}</p>
            {challenge.code && (
                <pre style={{
                    background: "#111",
                    color: "#0f0",
                    padding: 10,
                    borderRadius: 6,
                }} > {challenge.code} </pre>
            )}

            <div>
                {challenge.options?.map((opt) => (
                    <div key={opt}>
                        <label>
                            <input type="radio" name="option" value={opt} disabled={submitted} onChange={() => setSelected(opt)} />
                            {opt}
                        </label>
                    </div>
                ))}
            </div>

            {/* for hint */}
            {challenge.hint && !submitted && (
                <div style={{ marginTop: 10 }}>
                    <button
                        onClick={() => {
                            setHintUsed(true);
                            setShowHint(true);
                        }}
                    >
                        💡 Show Hint
                    </button>

                    {showHint && (
                        <p style={{ marginTop: 6, color: "#dfdfdfff" }}>
                            Hint: {challenge.hint}
                        </p>
                    )}
                </div>
            )}


            {!submitted ?
                (
                    <button onClick={handleSubmit} style={{ marginTop: 10 }}>
                        Submit
                    </button>
                ) : (
                    <div style={{ marginTop: 10 }}>
                        {isCorrect ? (
                            <p style={{ color: "green" }}>✅ Correct!</p>
                        ) : (
                            <p style={{ color: "red" }}>❌ Wrong</p>
                        )}

                        {isCorrect && !hintUsed && (
                            <p style={{ color: "yellow" }}>
                                ⭐ Bonus XP earned!
                            </p>
                        )}

                        <p>
                            <strong>Explanation:</strong>{" "}
                            {challenge.explanation}
                        </p>

                        <button
                            style={{ marginTop: 10 }}
                            onClick={() => {
                                setSelected(null);
                                setSubmitted(false);
                                setHintUsed(false);     // 👈 reset
                                setShowHint(false);
                                nextChallenge();
                            }}
                        >
                            Next Challenge →
                        </button>


                    </div>
                )
            }

        </div>
    )
}

export default ChallengeArena