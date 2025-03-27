import { useState, useEffect } from "react"

import "./index.scss"
import ArticlesContent from "../../assets/data/articles-content.json"
import ArrowPrev from "../../assets/icon/arrow-prev.svg"
import ArrowNext from "../../assets/icon/arrow-next.svg"

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const previous = () => {
    setCurrentSlide(
      currentSlide === 0 ? ArticlesContent.length - 1 : currentSlide - 1
    )
  }

  const next = () => {
    setCurrentSlide(
      currentSlide === ArticlesContent.length - 1 ? 0 : currentSlide + 1
    )
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      next()
    }, 5000)

    return () => clearTimeout(timer)
  }, [currentSlide])

  return (
    <div className="slider">
      <div className="slider__content">
        {ArticlesContent.map((article, index) => (
          <img
            className={`slider__content__slide ${
              index === currentSlide ? "display" : "hide"
            }`}
            key={index}
            src={article.sources.src1.src}
            alt={article.sources.src1.alt}
          />
        ))}
      </div>
      <button className="slider__button left" onClick={previous}>
        <img className="arrow-svg" src={ArrowPrev} alt="Précédent" />
      </button>
      <button className="slider__button right" onClick={next}>
        <img className="arrow-svg" src={ArrowNext} alt="Suivant" />
      </button>
    </div>
  )
}
