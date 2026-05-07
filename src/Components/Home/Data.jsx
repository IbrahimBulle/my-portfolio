import { personalInfo } from "../../data/portfolio";

const Data = () => {
  return (
    <div className="home__data">
      <span className="home__eyebrow">{personalInfo.location}</span>

      <h1 className="home__title">{personalInfo.name}</h1>

      <h3 className="home__subtitle">{personalInfo.title}</h3>

      <p className="home__description">{personalInfo.heroDescription}</p>

      <div className="home__actions">
        <a href="#contact" className="button button--flex">
          Let&apos;s connect
        </a>

        <a
          href={personalInfo.resumeUrl}
          className="button button--ghost"
          target="_blank"
          rel="noopener noreferrer"
        >
          View CV
        </a>
      </div>

      <div className="home__taglist">
        {personalInfo.heroTags.map((tag) => {
          return (
            <span className="home__tag" key={tag}>
              {tag}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Data;
