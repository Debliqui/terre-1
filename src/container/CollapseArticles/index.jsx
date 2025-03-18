import { useState } from "react"
import Card from "../../component/Card"
import ArticlesContent from "../../assets/data/articles-content.json"

import "./index.scss"
export default function CollapseArticles() {
  const [visible, setVisible] = useState(
    Array(ArticlesContent.length).fill(false)
  )

  const toggleVisibility = (index) => {
    setVisible((prev) => prev.map((state, i) => (i === index ? !state : state)))
  }

  return (
    <div className="collapse">
      <div className="collapse__buttons">
        {ArticlesContent.map((item, index) => (
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
        {ArticlesContent.map((item, index) => (
          <div
            key={item.id}
            className={`collapse__dropdown collapse__dropdown__${item.id} ${
              visible[index] ? "open" : ""
            }`}
          >
            <h2 className="collapse__dropdown__title">{item.title}</h2>
            <span className="separator" />
            {item.sources && (
              <div className="collapse__dropdown__content">
                {Object.keys(item.sources).map((key) => (
                  <Card
                    key={key}
                    src={item.sources[key].src}
                    alt={item.sources[key].alt}
                    title={item.sources[key].title}
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
