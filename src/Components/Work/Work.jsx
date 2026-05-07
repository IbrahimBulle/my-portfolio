import "./Work.css"
import Works from './Works'

const Work = () => {
  return (
    <div>
      <section className="work section" id="portfolio">
        <h2 className="section__title">Projects</h2>
        <span className="section__subtitle">
          Selected work pulled from GitHub and live product experiments.
        </span>

        <Works />
      </section>
    </div>
  )
}

export default Work
