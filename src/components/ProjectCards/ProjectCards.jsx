import React from "react";
import "./style/ProjectCards.css";
const ProjectCard = ({ title, description, link }) => {
    return (
        <div className="project__card">
            <h3 className="project__title">{title}</h3>
            <p className="project__description">{description}</p>
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="project__button"
            >
                View Project
            </a>
        </div>
    );
};

export default ProjectCard;