import React from "react";
import "../Experience/style/Experience.css";
import ExpCard from "../../components/ExpCard/ExpCard"; 
import ExpData from "../../../public/data/experience.json";
const Experience = () => {
    return (
        <section className="experience section" id="experience">
            {/* <h2 className="section__title">Experience</h2>
            <span className="section__subtitle">My professional journey</span>
            <div className="experience__container container grid">
                <ExpCard
                    title="Technical Executive"
                    organization="Front-End Developers (FED), KIIT University"
                    duration="November 2024 - Present"
                    description="Contributed to front-end development projects, collaborated with a team to build innovative web solutions, and actively contributed to open-source projects."
                />
            </div> */}
            <h2 className="section__title">Experience</h2>
            <span className="section__subtitle">My professional journey</span>
            <div className="experience__container container grid">
                {ExpData.map((item, index) => (
                    <ExpCard
                        key={index}
                        title={item.title}
                        organization={item.organization}
                        duration={item.duration}
                        description={item.description}
                    />
                ))}
            </div>     
        </section>
    );
};

export default Experience;
