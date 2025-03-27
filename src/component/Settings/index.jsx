import { useContext } from "react"
import ThemeContext from "../../contexts/ThemeContext"

import "./index.scss"

export default function Settings() {
  const { toggleTheme } = useContext(ThemeContext)
  return (
    <div className="settings">
      <button
        className="themeBtn light"
        onClick={() => toggleTheme("light")}
        aria-label="Activer le thème lumineux"
      />
      <button
        className="themeBtn dark"
        onClick={() => toggleTheme("dark")}
        aria-label="Activer le thème sombre"
      />
      <button
        className="themeBtn blue"
        onClick={() => toggleTheme("blue")}
        aria-label="Activer le thème bleu"
      />
    </div>
  )
}
