import ChallengeArena from "./components/ChallengeArena"
import { useGameStore } from "./store/useGameStore"

const App = () => {

  const paths = useGameStore((s) => s.paths)
  const currentPath = useGameStore((s) => s.currentPath)
  const selectPath = useGameStore((s) => s.selectPath)
  const xp = useGameStore((s) => s.xp)

  return (
    <div style={{ padding: 20 }} >
      <h1>Dev-Quest</h1>
      <h3>XP: {xp}</h3>
      {
        !currentPath ?
          (
            <>
              <h2>Select PAth</h2>
              {
                paths.map((p) => (
                  <button key={p.id} onClick={() => selectPath(p.id)}>
                    {p.title}
                  </button>
                ))
              }
            </>
          ) : (
            <>
              <h2>{currentPath.title}</h2>
              <p>
                Levels : {currentPath.levels.length}
              </p>
              <ChallengeArena />
            </>
          )
      }
    </div>
  )
}

export default App