import "./Contact.css"
import { FiGithub, FiMail, FiPhone, FiExternalLink } from "react-icons/fi";
import { RiArticleLine } from "react-icons/ri";
import { personalInfo } from "../../data/portfolio";

const contactCards = [
  {
    title: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    icon: <FiMail className="contact__card-icon" />,
  },
  {
    title: "Phone / WhatsApp",
    value: personalInfo.phone,
    href: personalInfo.whatsappUrl,
    icon: <FiPhone className="contact__card-icon" />,
  },
  {
    title: "GitHub",
    value: "@IbrahimBulle",
    href: personalInfo.githubUrl,
    icon: <FiGithub className="contact__card-icon" />,
  },
  {
    title: "Blog",
    value: "Tech blog and learning notes",
    href: personalInfo.blogUrl,
    icon: <RiArticleLine className="contact__card-icon" />,
  },
];

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in Touch</h2>
      <span className="section__subtitle">Let&apos;s connect around code, learning, or internships.</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Reach Me Directly</h3>

          <div className="contact__info">
            {contactCards.map((card) => {
              return (
                <article className="contact__card" key={card.title}>
                  {card.icon}
                  <h3 className="contact__card-title">{card.title}</h3>
                  <span className="contact__card-data">{card.value}</span>

                  <a
                    href={card.href}
                    className="contact__button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open link
                    <FiExternalLink className="contact__button-icon" />
                  </a>
                </article>
              );
            })}
          </div>
        </div>

        <article className="contact__content contact__content--accent">
          <span className="contact__eyebrow">Open to internships</span>
          <h3 className="contact__title">Ready to keep building with a strong team</h3>
          <p className="contact__summary">{personalInfo.contactBlurb}</p>

          <ul className="contact__list">
            <li>Go and backend API work</li>
            <li>Full-stack student projects</li>
            <li>Collaborative engineering teams</li>
          </ul>

          <div className="contact__actions">
            <a href={`mailto:${personalInfo.email}`} className="button button--flex">
              Email me
            </a>
            <a
              href={personalInfo.githubUrl}
              className="button button--ghost"
              target="_blank"
              rel="noopener noreferrer"
            >
              View GitHub
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Contact;
