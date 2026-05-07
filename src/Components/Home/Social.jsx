import { FiGithub } from "react-icons/fi";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { RiArticleLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { socialLinks } from "../../data/portfolio";

const iconMap = {
  github: <FiGithub />,
  email: <HiOutlineEnvelope />,
  blog: <RiArticleLine />,
  whatsapp: <FaWhatsapp />,
};

const Social = () => {
  return (
    <div className="home__social">
      {socialLinks.map((link) => {
        return (
          <a
            href={link.url}
            className="home__social-icon"
            target="_blank"
            rel="noreferrer"
            aria-label={link.label}
            key={link.label}
          >
            {iconMap[link.type]}
          </a>
        );
      })}
    </div>
  );
};

export default Social;
