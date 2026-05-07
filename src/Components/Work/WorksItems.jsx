/* eslint-disable react/prop-types */
import { LuSquareArrowOutUpRight } from "react-icons/lu";

const WorksItems = ({ item }) => {
  return (
    <article className="work__card" key={item.id}>
      <div className="work__hero">
        <span className="work__hero-label">{item.highlight}</span>
        <span className="work__hero-language">{item.language}</span>
      </div>

      <div className="work__meta">
        <span className="work__chip">{item.category}</span>
        {item.stack.slice(0, 2).map((tech) => {
          return (
            <span className="work__chip work__chip--muted" key={tech}>
              {tech}
            </span>
          );
        })}
      </div>

      <h3 className="work__title">{item.title}</h3>
      <p className="work__details">{item.description}</p>

      <div className="work__stack">
        {item.stack.map((tech) => {
          return (
            <span className="work__stack-tag" key={tech}>
              {tech}
            </span>
          );
        })}
      </div>

      <div className="work__links">
        <a
          href={item.codeUrl}
          className="work__button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Code <LuSquareArrowOutUpRight className="work__button-icon" />
        </a>

        {item.liveUrl ? (
          <a
            href={item.liveUrl}
            className="work__button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live <LuSquareArrowOutUpRight className="work__button-icon" />
          </a>
        ) : null}
      </div>
    </article>
  )
}

export default WorksItems
