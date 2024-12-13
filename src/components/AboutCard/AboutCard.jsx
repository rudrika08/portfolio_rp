import React from "react";
import infoData  from "../../../public/data/about.json";
import "./style/AboutCard.css";
const Info = () => {
    return (
        <div className="about__info">
           {infoData.map((item,index)=>(
            <div className="about__box" key={index}>
                <i className={item.icon}></i>
                <h3 className="about__title">{item.title}</h3>
                <span className="about__subtitle">{item.subtitle}</span>
            </div>
           )
           )}
        </div>
    );
}
export default  Info;