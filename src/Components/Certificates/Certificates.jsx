import "./Certificates.css";
import { certificates } from "../../data/portfolio";

const Certificates = () => {
  return (
    <section className="certificates section" id="certificates">
      <h2 className="section__title">Certificates</h2>
      <span className="section__subtitle">
        Verified learning milestones from Boot.dev and HackerRank.
      </span>

      <div className="certificates__container container grid">
        {certificates.map((certificate) => {
          return (
            <article className="certificates__card" key={certificate.credentialId}>
              <a
                href={certificate.image}
                className="certificates__image-wrap"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={certificate.image}
                  alt={`${certificate.title} certificate`}
                  className="certificates__image"
                />
              </a>

              <div className="certificates__content">
                <div className="certificates__meta">
                  <span>{certificate.issuer}</span>
                  <span>{certificate.date}</span>
                </div>

                <h3 className="certificates__title">{certificate.title}</h3>
                <p className="certificates__id">Credential ID: {certificate.credentialId}</p>

                <a
                  href={certificate.image}
                  className="certificates__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View certificate
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Certificates;
