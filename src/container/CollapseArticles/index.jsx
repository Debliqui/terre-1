import { useState } from "react"
import Card from "../../component/Card"
import Scroller from "../Scroller"
import ArticlesModal from "../../component/AticlesModal"

import ArticlesContent from "../../assets/data/articles-content.json"

import "./index.scss"
export default function CollapseArticles() {
  const [visible, setVisible] = useState(
    Array(ArticlesContent.length).fill(false)
  )

  const [modalData, setModalData] = useState(null)

  const toggleVisibility = (index) => {
    setVisible((prev) => prev.map((state, i) => (i === index ? !state : state)))
  }

  const openModal = (data) => {
    setModalData(data)
  }

  const closeModal = () => {
    setModalData(null)
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
            <Scroller>
              {item.sources &&
                Object.keys(item.sources).map((key) => (
                  <button
                    key={key}
                    className="modal-open"
                    onClick={() =>
                      openModal({
                        src: item.sources[key].src,
                        alt: item.sources[key].alt,
                        title: item.sources[key].title,
                        subtitle: item.sources[key].subtitle,
                        description: item.sources[key].description,
                      })
                    }
                  >
                    <Card
                      src={item.sources[key].src}
                      alt={item.sources[key].alt}
                      title={item.sources[key].title}
                    />
                  </button>
                ))}
            </Scroller>
          </div>
        ))}
      </div>

      {modalData && <ArticlesModal data={modalData} onClose={closeModal} />}
    </div>
  )
}
