import {
  SiCss3,
  SiHtml5,
  SiHtmx,
  SiJavascript,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import { skillGroups } from "../../data/portfolio";

const iconMap = {
  html: <SiHtml5 className="skills__data-icon" />,
  css: <SiCss3 className="skills__data-icon" />,
  javascript: <SiJavascript className="skills__data-icon" />,
  typescript: <SiTypescript className="skills__data-icon" />,
  react: <SiReact className="skills__data-icon" />,
  htmx: <SiHtmx className="skills__data-icon" />,
};

const Frontend = () => {
  const group = skillGroups.frontend;

  return (
    <div className="skills__content">
        <h3 className="skills__title">{group.title}</h3>

        <div className="skills__box">
            {group.skills.map((skill) => {
                return (
                    <div className="skills__data" key={skill.name}>
                        {iconMap[skill.icon]}

                        <div>
                            <h3 className="skills__name">{skill.name}</h3>
                            <span className="skills__level">{skill.level}</span>
                        </div>
                    </div>
                );
            })}
        </div>
    </div>
  )
}

export default Frontend
