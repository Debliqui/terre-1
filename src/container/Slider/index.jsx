import { useState, useEffect } from "react"

import "./index.scss"
import ArticlesContent from "../../assets/data/articles-content.json"
import ArrowPrev from "../../assets/icon/arrow-prev.svg"
import ArrowNext from "../../assets/icon/arrow-next.svg"

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

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
    if (!isPaused) {
      const timer = setTimeout(() => {
        next()
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [currentSlide, isPaused])

  const togglePause = () => {
    setIsPaused(!isPaused)
  }

  return (
    <div className="slider" aria-label="Carrousel">
      <div className="slider__content" aria-live="polite" aria-label="Images">
        {ArticlesContent.map((article, index) => (
          <img
            className={`slider__content__slide ${
              index === currentSlide ? "display" : "hide"
            }`}
            key={index}
            src={article.sources.src1.src}
            alt={article.sources.src1.alt}
            aria-hidden={index !== currentSlide}
          />
        ))}
      </div>
      <button
        className="slider__button prev"
        onClick={previous}
        aria-label="Image précédente"
      >
        <img className="arrow-svg" src={ArrowPrev} alt="Précédent" />
      </button>
      <button
        className="slider__button next"
        onClick={next}
        aria-label="Image suivante"
      >
        <img className="arrow-svg" src={ArrowNext} alt="Suivant" />
      </button>
      <button
        className="slider__button pause"
        onClick={togglePause}
        aria-label={
          isPaused ? "Reprendre le carrousel" : "Mettre le carrousel en pause"
        }
      >
        {isPaused ? (
          <>
            <span className="play-pause">Reprendre</span>
            <i className="fa-solid fa-play" />
          </>
        ) : (
          <>
            <span className="play-pause">Pause</span>
            <i className="fa-solid fa-pause" />
          </>
        )}
      </button>
    </div>
  )
}
