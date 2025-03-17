import { useContext, useEffect } from "react"
import ThemeContext from "./contexts/ThemeContext"
import Settings from "./component/Settings"
import Collapse from "./container/CollapseArticles"

import "./App.scss"
import Earth from "./assets/PIA18033.svg"

function App() {
  const { theme } = useContext(ThemeContext)

  useEffect(() => {
    // Update the body class to apply the correct theme
    document.body.className = theme
  }, [theme])

  return (
    <main className="main">
      <img src={Earth} alt="" className="main__earth" />
      <header className="main__header">
        <h1>Terre 1</h1>
        <h2>Manuel des nouveaux arrivants</h2>
      </header>
      <section>
        <Collapse />
      </section>
      <Settings />
    </main>
  )
}

export default App
