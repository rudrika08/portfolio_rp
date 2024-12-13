import React from "react";
import "../SkillCards/style/SkillCards.css";

const SkillCard = ({ name, level, icon }) => {
    return (
        <div className="skill-card">
            <div className="skill-card__icon">
                <i className={icon}></i>
            </div>
            <div className="skill-card__info">
                <h3 className="skill-card__name">{name}</h3>
                <span className="skill-card__level">{level}</span>
            </div>
        </div>
    );
};

export default SkillCard;
