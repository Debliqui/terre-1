import { useState } from "react"
import ThemeContext from "../ThemeContext"

const themes = {
  light: {
    background: "#ffffff",
    color: "#000000",
  },
  dark: {
    background: "#000000",
    color: "#ffffff",
  },
  blue: {
    background: "#001f3f",
    color: "#ffffff",
  },
}

// const getTheme = () => {
//   const theme = localStorage.getItem("theme")
//   if (!theme) {
//     //Default theme is taken as light-theme
//     localStorage.setItem("theme", "light")
//     return "light"
//   } else {
//     return theme
//   }
// }

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light")

  const toggleTheme = (newTheme) => {
    setTheme(newTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme: themes[theme], toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
