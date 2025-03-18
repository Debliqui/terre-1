import "./index.scss"

export default function Card({ src, alt, title }) {
  return (
    <figure className="card">
      <img className="card__img" src={src} alt={alt} />
      <figcaption className="card__caption">
        <h3 className="card__caption__title">{title}</h3>
      </figcaption>
    </figure>
  )
}
