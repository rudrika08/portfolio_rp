import React from "react";
import "./style/Project.css";
import ProjectCard from "../../components/ProjectCards/ProjectCards";
import ProjectData from '../../../public/data/projectcard.json';

const Project = () => {
    
    return (
        <section className="project section" id="projects">
            <h2 className="section__title">Projects</h2>
            <span className="section__subtitle">What I've built</span>
            <div className="project__container container grid">
                {ProjectData.map((item, index) => (
                    <ProjectCard
                        key={index}
                        title={item.title}
                        description={item.description}
                        link={item.link}
                    />
                ))}
            </div>
        </section>
    );
};

export default Project;