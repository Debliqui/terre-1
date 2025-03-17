import "./App.scss"
import { useContext, useEffect } from "react"
import ThemeContext from "./contexts/ThemeContext"
import Settings from "./component/Settings"

function App() {
  const { theme } = useContext(ThemeContext)

  useEffect(() => {
    // Update the body class to apply the correct theme
    document.body.className = theme
  }, [theme])

  return (
    <main className="main">
      <h1>Bienvenue</h1>
      <Settings />
    </main>
  )
}

export default App
