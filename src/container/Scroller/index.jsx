import { useRef } from "react"

import ArrowUp from "../../assets/icon/arrow-up.svg"
import ArrowDown from "../../assets/icon/arrow-down.svg"
import "./index.scss"

export default function Scroller({ children }) {
  const scrollerContent = useRef(null)

  function upScroll() {
    const cardHeight =
      scrollerContent.current.querySelector(".card")?.offsetHeight + 20
    scrollerContent.current.scrollBy({
      top: -cardHeight,
      behavior: "smooth",
    })
  }
  function downScroll() {
    const cardHeight =
      scrollerContent.current.querySelector(".card")?.offsetHeight + 20
    scrollerContent.current.scrollBy({
      top: cardHeight,
      behavior: "smooth",
    })
  }
  return (
    <div className="scroller">
      <button className="scroller__button up" onClick={upScroll}>
        <img className="arrow" src={ArrowUp} alt="Fléche vers le haut" />
      </button>
      <div className="scroller__content" ref={scrollerContent}>
        {children}
      </div>
      <button className="scroller__button down" onClick={downScroll}>
        <img className="arrow" src={ArrowDown} alt="Fléche vers le bas" />
      </button>
    </div>
  )
}
