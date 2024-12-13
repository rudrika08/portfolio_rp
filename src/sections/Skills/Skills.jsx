import React from "react";
import skillData from "../../../public/data/skilldata.json";
import SkillCard from "../../components/SkillCards/SkillCards";
import "./style/Skills.css";

const Skill = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My technical level</span>
            <div className="skills__container container grid">
                {skillData.map((group, index) => (
                    <div className="skills__group" key={index}>
                        {group.map((skill, idx) => (
                            <SkillCard
                                key={idx}
                                name={skill.name}
                                level={skill.level}
                                icon={skill.icon}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skill;
