import "./Footer.css";
import { personalInfo } from "../../data/portfolio";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">{personalInfo.name}</h1>

        <p className="footer__tagline">
          Building practical software with curiosity, consistency, and a growing
          backend toolkit.
        </p>

        <div className="footer__links">
          <a
            href={personalInfo.githubUrl}
            className="footer__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href={personalInfo.blogUrl}
            className="footer__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blog
          </a>
          <a href={`mailto:${personalInfo.email}`} className="footer__link">
            Email
          </a>
        </div>

        <span className="footer__copy">&#169; {currentYear} {personalInfo.name}</span>
      </div>
    </footer>
  );
};

export default Footer;
