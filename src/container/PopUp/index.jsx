import { useState, useRef, useEffect } from "react"
import "./index.scss"

function PopUpContent({ title, children, toggleVisibility }) {
  const contentRef = useRef(null)

  useEffect(() => {
    contentRef.current?.focus()
  }, [])

  return (
    <div
      className="popUp__content"
      aria-label={`Fenêtre ${title}`}
      aria-modal="true"
      ref={contentRef}
      tabIndex="-1"
    >
      <button
        className="popUp__closeBtn"
        onClick={toggleVisibility}
        aria-label="Fermer la fenêtre"
      >
        <i className="fa-solid fa-xmark" />
      </button>
      <div className="info">
        <h2 id={`popup-title-${title}`} className="info__title">
          {title}
        </h2>
        <hr className="separator" />
        {children}
      </div>
    </div>
  )
}

function PopUpButton({ label, title, children, isVisible, toggleVisibility }) {
  return (
    <div className="popUp" aria-label={`Information ${title}`}>
      <button
        className="popUp__openBtn"
        onClick={toggleVisibility}
        aria-label={`Ouvrir la fenêtre ${title}`}
        aria-expanded={isVisible}
        aria-controls={`popup-content-${title}`}
      >
        {label}
      </button>
      {isVisible && (
        <PopUpContent
          title={title}
          toggleVisibility={toggleVisibility}
          id={`popup-content-${title}`}
        >
          <div className="info__content">{children}</div>
        </PopUpContent>
      )}
    </div>
  )
}

export default function PopUp() {
  const [visiblePopUp, setVisiblePopUp] = useState(null)

  const submitBtnRef = useRef(null)
  const btnTextRef = useRef(null)
  const messageBoxRef = useRef(null)

  function toggleVisibility(popUp) {
    setVisiblePopUp(visiblePopUp === popUp ? null : popUp)
  }

  function handleSubmit(event) {
    event.preventDefault()
    messageBoxRef.current.innerHTML = "Votre message a bien été envoyé !"
  }

  return (
    <>
      <PopUpButton
        label="Contact"
        title="Contact"
        isVisible={visiblePopUp === "contact"}
        toggleVisibility={() => toggleVisibility("contact")}
      >
        <form
          className="contactForm"
          onSubmit={handleSubmit}
          aria-label="Formulaire de contact"
        >
          <h3 className="contactForm__title">Vous avez des questions ?</h3>
          <p className="contactForm__description">Laissez moi un message!</p>
          <span className="contactForm__message" ref={messageBoxRef} />
          <label htmlFor="nom">Nom</label>
          <input type="text" id="nom" required aria-required="true" />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            maxLength={500}
            required
            aria-required="true"
          />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            required
            rows="5"
            cols="33"
            maxLength={500}
            aria-required="true"
          />
          <button
            className="submitBtn"
            ref={submitBtnRef}
            aria-label="Envoyer le formulaire"
          >
            <p className="submitBtn__text" ref={btnTextRef}>
              Envoyer
            </p>
          </button>
        </form>
      </PopUpButton>
      <PopUpButton
        label="À propos"
        title="À propos"
        isVisible={visiblePopUp === "about"}
        toggleVisibility={() => toggleVisibility("about")}
      >
        <h3 className="info__content__title">Bienvenue sur Terre 1!</h3>
        <p className="info__content__texte">
          Ce guide est conçu pour les nouveaux arrivants découvrant notre belle
          planète. <br />
          <br />
          Ce site est votre manuel d'accompagnement pour comprendre les
          merveilles de la Terre, apprendre à interagir avec ses habitants et
          explorer ses nombreuses nations fascinantes.
          <br />
          <br />
          Que vous soyez curieux des cieux au-dessus de nous, des mystères des
          abysses ou des cultures humaines, Terre 1 est là pour illuminer votre
          voyage. <br />
          <br />
          C'est une invitation à observer, apprendre et embrasser la diversité
          de notre monde.
          <br />
          <br />
          Laissez-nous être votre compagnon pour naviguer dans cette nouvelle
          aventure!
        </p>
      </PopUpButton>
    </>
  )
}
