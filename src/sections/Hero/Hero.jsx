import React from 'react';
import './style/Hero.css';
import Social from '../../components/Social/Social.jsx';
import HeroData from '../../components/HeroData/HeroData.jsx';
import ScrollDown from '../../layout/ScrollDown/ScrollDown.jsx';
const Home = () => {
    return (
        <section className="home section" id="home">
        <div className="home__container container grid">
        <div className="home__content">
           
            <div className="hero_mobile">
            <Social/>
            <div className="home__img">
            </div>
            </div>
            <HeroData/>
            

            

        </div>
      
      
        </div>
        <ScrollDown/>
        </section>
    );
};
export default Home;