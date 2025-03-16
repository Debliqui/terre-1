import "./App.css"
import { useContext } from "react"
import ThemeContext from "./contexts/ThemeContext"

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <div style={{ background: theme.background, color: theme.color }}>
      <h1>Welcome</h1>
      <button onClick={() => toggleTheme("dark")}>Dark</button>
      <button onClick={() => toggleTheme("blue")}>Blue</button>
      <button onClick={() => toggleTheme("light")}>light</button>
    </div>
  )
}

export default App
