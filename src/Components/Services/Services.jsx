import "./Services.css";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { LuLayers3, LuServerCog } from "react-icons/lu";
import { focusAreas } from "../../data/portfolio";

const iconMap = [LuServerCog, LuLayers3, HiOutlineAcademicCap];

const Services = () => {
  return (
    <section className="services section" id="focus">
      <h2 className="section__title">Focus Areas</h2>
      <span className="section__subtitle">
        The kind of work I enjoy building and getting better at.
      </span>

      <div className="services__container container grid">
        {focusAreas.map((area, index) => {
          const Icon = iconMap[index];

          return (
            <article className="services__content" key={area.title}>
              <div className="services__icon">
                <Icon />
              </div>
              <h3 className="services__title">{area.title}</h3>
              <p className="services__description">{area.description}</p>

              <div className="services__points">
                {area.points.map((point) => {
                  return (
                    <span className="services__point" key={point}>
                      {point}
                    </span>
                  );
                })}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
