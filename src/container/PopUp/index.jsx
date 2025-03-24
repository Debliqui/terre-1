import { useState, useRef } from "react"
import "./index.scss"

function PopUpContent({ title, children, toggleVisibility }) {
  return (
    <div className="popUp__content">
      <button className="popUp__closeBtn" onClick={toggleVisibility}>
        <i className="fa-solid fa-xmark" />
      </button>
      <div className="info">
        <h2 className="info__title">{title}</h2>
        <span className="separator" />
        {children}
      </div>
    </div>
  )
}

function PopUpButton({ label, title, children, isVisible, toggleVisibility }) {
  return (
    <div className="popUp">
      <button className="popUp__openBtn" onClick={toggleVisibility}>
        {label}
      </button>
      {isVisible && (
        <PopUpContent title={title} toggleVisibility={toggleVisibility}>
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

  function toggleVisibility(popUp) {
    setVisiblePopUp(visiblePopUp === popUp ? null : popUp)
  }

  function handleSubmit(event) {
    event.preventDefault()
    btnTextRef.current.innerHTML = "Merci"
    submitBtnRef.current.classList.add("send")
  }
  return (
    <>
      <PopUpButton
        label="Contact"
        title="Contact"
        isVisible={visiblePopUp === "contact"}
        toggleVisibility={() => toggleVisibility("contact")}
      >
        <form className="contactForm" onSubmit={handleSubmit}>
          <h3 className="contactForm__title">Vous avez des questions ?</h3>
          <p className="contactForm__description">Laissez moi un message!</p>
          <label htmlFor="nom">Nom</label>
          <input type="text" id="nom" required />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" maxLength={500} required />
          <label htmlFor="message">Message</label>
          <textarea id="message" required />
          <button className="submitBtn" ref={submitBtnRef}>
            <p className="submitBtn__text" ref={btnTextRef}>
              Envoyer
            </p>
            <div className="check-box">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                <path fill="transparent" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
              </svg>
            </div>
          </button>
        </form>
      </PopUpButton>
      <PopUpButton
        label="À propos"
        title="À propos"
        isVisible={visiblePopUp === "about"}
        toggleVisibility={() => toggleVisibility("about")}
      >
        <p>
          Se manuel est conçu pour guider les nouveaux arrivants dans la
          découverte de Terre 1, de ses merveilles, et de ses habitants. Que
          vous exploriez les cieux, les abysses ou les cultures humaines, ce
          manuel est là pour éclairer votre voyage. Bonne exploration!
        </p>
      </PopUpButton>
    </>
  )
}
