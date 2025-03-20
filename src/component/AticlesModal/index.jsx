import { useRef, useEffect } from "react"
import "./index.scss"

export default function ArticlesModal({ data, onClose }) {
  const dialog = useRef(null)
  useEffect(() => {
    const dialogRef = dialog.current
    if (data && dialogRef) {
      dialogRef.showModal()
      dialogRef.focus()
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose()
      }
    }

    const handleBackdropClick = (event) => {
      if (event.target === dialogRef) {
        onClose()
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    dialogRef.addEventListener("click", handleBackdropClick)

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      dialogRef.removeEventListener("click", handleBackdropClick)
      if (dialogRef) {
        dialogRef.close()
      }
    }
  }, [data, onClose])

  return (
    <dialog
      className="articles-modal"
      ref={dialog}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <button
        aria-label="Fermer la modale"
        className="articles-modal__close"
        onClick={onClose}
      >
        <i className="fa-solid fa-xmark" />
      </button>
      {data && (
        <>
          <div className="articles-modal__image-container">
            <img
              className="articles-modal__image"
              src={data.src}
              alt={data.alt}
            />
          </div>
          <div className="articles-modal__content">
            <h2 className="articles-modal__content__title">{data.title}</h2>
            <span className="separator" />
            <div className="articles-modal__content__text">
              <h3 className="articles-modal__content__text__subtitle">
                {data.subtitle}
              </h3>
              <p className="articles-modal__content__text__description">
                {data.description}
              </p>
            </div>
          </div>
        </>
      )}
    </dialog>
  )
}
