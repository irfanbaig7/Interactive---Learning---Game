import { useState } from "react"
import { useGameStore } from "../store/useGameStore"

const ChallengeArena = () => {

    const challenge = useGameStore((s) => s.currentChallenge)
    const addXP = useGameStore((s) => s.addXp)

    const [selected, setSelected] = useState<string | null>(null)
    const [submitted, setSubmitted] = useState(false)

    if (!challenge) {
        return <p>No challenge available</p>
    }

    const isCorrect = selected === challenge.correctAnswer;

    const handleSubmit = () => {
        if (!selected) return;
        setSubmitted(true)
        if (isCorrect) {
            addXP(challenge.xp)
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

                        <p>
                            <strong>Explanation:</strong>{" "}
                            {challenge.explanation}
                        </p>
                    </div>
                )
            }

        </div>
    )
}

export default ChallengeArena