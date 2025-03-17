import { useState, useEffect } from "react"
import ThemeContext from "../ThemeContext"

const getTheme = () => {
  const theme = localStorage.getItem("theme")
  if (!theme) {
    // Par défaut, le thème "light" est utilisé
    localStorage.setItem("theme", "light")
    return "light"
  }
  return theme
}

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getTheme)

  function toggleTheme(themeValue) {
    setTheme(themeValue)
  }

  useEffect(() => {
    localStorage.setItem("theme", theme)
    // Appliquer le thème sur l'élément `body` via une classe CSS
    document.body.className = theme
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
