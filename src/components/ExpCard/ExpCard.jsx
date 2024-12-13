import React from "react";

const ExperienceCard = ({ title, organization, duration, description }) => {
    return (
        <div className="experience__card">
            <h3 className="experience__title">{title}</h3>
            <p className="experience__organization">{organization}</p>
            <p className="experience__duration">{duration}</p>
            <p className="experience__description">{description}</p>
        </div>
    );
};

export default ExperienceCard;