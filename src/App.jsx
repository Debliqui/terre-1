import { useContext, useEffect } from "react"
import ThemeContext from "./contexts/ThemeContext"
import Settings from "./component/Settings"
import CollapseArticles from "./container/CollapseArticles"

import "./App.scss"
import Earth from "./assets/PIA18033.svg"
import Slider from "./container/Slider"
import PopUp from "./container/PopUp"

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
        <div className="main__header__content">
          <h1>Terre 1</h1>
          <h2>Manuel des nouveaux arrivants</h2>
        </div>
      </header>
      <section className="main__navigation">
        <nav className="nav">
          <PopUp />
        </nav>
        <CollapseArticles />
      </section>
      <section className="main__bottom">
        <div className="main__bottom__content">
          <Slider />
          <Settings />
        </div>
      </section>
    </main>
  )
}

export default App
