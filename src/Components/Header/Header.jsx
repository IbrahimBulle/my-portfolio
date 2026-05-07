import { useEffect, useState } from "react";
import "./Header.css";
import { navLinks, personalInfo } from "../../data/portfolio";

const Header = () => {
  const [toggle, setShowMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY >= 80);

      let currentSection = "#home";

      navLinks.forEach((item) => {
        const section = document.querySelector(item.href);

        if (!section) {
          return;
        }

        const sectionTop = section.offsetTop - 140;

        if (window.scrollY >= sectionTop) {
          currentSection = item.href;
        }
      });

      setActiveNav(currentSection);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={scrolled ? "header scroll-header" : "header"}>
      <nav className="nav container">
        <a href="#home" className="nav__logo">
          {personalInfo.shortName}
        </a>

        <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            {navLinks.map((item) => {
              return (
                <li className="nav__item" key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => {
                      setActiveNav(item.href);
                      setShowMenu(false);
                    }}
                    className={
                      activeNav === item.href ? "nav__link active-link" : "nav__link"
                    }
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => setShowMenu(false)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => setShowMenu(!toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
