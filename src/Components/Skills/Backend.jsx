import {
  SiDocker,
  SiExpress,
  SiGo,
  SiMysql,
  SiPostgresql,
  SiSqlite,
} from "react-icons/si";
import { skillGroups } from "../../data/portfolio";

const iconMap = {
    go: <SiGo className="skills__data-icon" />,
    express: <SiExpress className="skills__data-icon" />,
    postgres: <SiPostgresql className="skills__data-icon" />,
    sqlite: <SiSqlite className="skills__data-icon" />,
    mysql: <SiMysql className="skills__data-icon" />,
    docker: <SiDocker className="skills__data-icon" />,
};

const Backend = () => {
  const group = skillGroups.backend;

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

export default Backend
