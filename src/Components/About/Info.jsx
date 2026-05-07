import { LiaAwardSolid } from "react-icons/lia";
import { LuBriefcase } from "react-icons/lu";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { aboutStats } from "../../data/portfolio";

const iconMap = {
    repos: <LuBriefcase className="about__icon" />,
    certificates: <LiaAwardSolid className="about__icon" />,
    education: <HiOutlineAcademicCap className="about__icon" />,
};

const Info = () => {
  return (
    <div className="about__info grid">
        {aboutStats.map((stat) => {
            return (
                <div className="about__box" key={stat.title}>
                    {iconMap[stat.type]}
                    <h3 className="about__title">{stat.title}</h3>
                    <span className="about__subtitle">{stat.subtitle}</span>
                </div>
            );
        })}
    </div>
  )
}

export default Info
