import "./Home.css";
import Social from './Social';
import Data from './Data';
import ScrollDown from './ScrollDown';
import { personalInfo } from "../../data/portfolio";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container">
        <div className="home__content">
          <Social />
          <Data />

          <div className="home__visual">
            <div className="home__image-shell">
              <img
                src={personalInfo.avatarUrl}
                alt={personalInfo.name}
                className="home__img"
              />
            </div>

            <div className="home__badge home__badge--top">Go + APIs</div>
            <div className="home__badge home__badge--middle">Public Repos: 55</div>
            <div className="home__badge home__badge--bottom">CS Student</div>
          </div>
        </div>

        <ScrollDown />
      </div>
    </section>
  )
}

export default Home
