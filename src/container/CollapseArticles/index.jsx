import { useState } from "react"

import "./index.scss"

export default function CollapseArticles() {
  const collapseItems = [
    {
      id: 1,
      title: "Comprendre votre nouvel environnement",
      content: "Contenu du Collapse 1",
    },
    {
      id: 2,
      title: "Comment se fondre parmi les humains ?",
      content: "Contenu du Collapse 2",
    },
    {
      id: 3,
      title: "Explorer les nations de la Terre",
      content: "Contenu du Collapse 3",
    },
  ]

  const [visible, setVisible] = useState(
    Array(collapseItems.length).fill(false)
  )

  const toggleVisibility = (index) => {
    setVisible((prev) => prev.map((state, i) => (i === index ? !state : state)))
  }

  return (
    <div className="collapse">
      <div className="collapse__buttons">
        {collapseItems.map((item, index) => (
          <button
            key={item.id}
            className={`collapse__button collapse__button__${item.id} ${
              visible[index] ? "active" : ""
            }`}
            onClick={() => toggleVisibility(index)}
          >
            {!visible[index] ? (
              <span className="collapse__button__title">{item.title}</span>
            ) : null}
          </button>
        ))}
      </div>
      <div className="collapse__dropdowns">
        {collapseItems.map((item, index) => (
          <div
            key={item.id}
            className={`collapse__dropdown collapse__dropdown__${item.id} ${
              visible[index] ? "open" : ""
            }`}
          >
            <h2 className="collapse__dropdown__title">{item.title}</h2>
            <span className="separator" />
          </div>
        ))}
      </div>
    </div>
  )
}
