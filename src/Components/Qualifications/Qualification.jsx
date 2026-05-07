import { useState } from "react";
import "./Qualification.css";
import { educationTimeline, journeyTimeline } from "../../data/portfolio";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const renderTimeline = (items) => {
    return items.map((item, index) => {
      const isLeft = index % 2 === 0;
      const isLast = index === items.length - 1;

      return (
        <div className="qualification__data" key={item.title}>
          {isLeft ? (
            <>
              <div>
                <h3 className="qualification__title">{item.title}</h3>
                <span className="qualification__subtitle">{item.subtitle}</span>
                <p className="qualification__details">{item.details}</p>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> {item.period}
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span
                  className={isLast ? "qualification__line qualification__line--hidden" : "qualification__line"}
                ></span>
              </div>

              <div></div>
            </>
          ) : (
            <>
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span
                  className={isLast ? "qualification__line qualification__line--hidden" : "qualification__line"}
                ></span>
              </div>

              <div>
                <h3 className="qualification__title">{item.title}</h3>
                <span className="qualification__subtitle">{item.subtitle}</span>
                <p className="qualification__details">{item.details}</p>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> {item.period}
                </div>
              </div>
            </>
          )}
        </div>
      );
    });
  };

  return (
    <section className="qualification section" id="journey">
      <h2 className="section__title">Journey</h2>
      <span className="section__subtitle">Education and hands-on building milestones.</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button button--flex qualification__active"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button button--flex qualification__active"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            {renderTimeline(educationTimeline)}
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            {renderTimeline(journeyTimeline)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
