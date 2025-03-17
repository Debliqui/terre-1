import "./App.scss"
import { useContext, useEffect } from "react"
import ThemeContext from "./contexts/ThemeContext"

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  useEffect(() => {
    // Update the body class to apply the correct theme
    document.body.className = theme
  }, [theme])

  return (
    <main className="main">
      <h1>Bienvenue</h1>
      <section className="settings">
        <button
          className="themeBtn light"
          onClick={() => toggleTheme("light")}
        />
        <button className="themeBtn dark" onClick={() => toggleTheme("dark")} />
        <button className="themeBtn blue" onClick={() => toggleTheme("blue")} />
      </section>
    </main>
  )
}

export default App
