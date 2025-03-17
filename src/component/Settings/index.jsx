import { useContext } from "react"
import ThemeContext from "../../contexts/ThemeContext"

import "./index.scss"

export default function Settings() {
  const { toggleTheme } = useContext(ThemeContext)
  return (
    <section className="settings">
      <button className="themeBtn light" onClick={() => toggleTheme("light")} />
      <button className="themeBtn dark" onClick={() => toggleTheme("dark")} />
      <button className="themeBtn blue" onClick={() => toggleTheme("blue")} />
    </section>
  )
}
