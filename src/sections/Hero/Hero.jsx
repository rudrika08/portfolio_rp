import React from 'react';
import './style/Hero.css';
import Social from '../../components/Social/Social.jsx';
import HeroData from '../../components/HeroData/HeroData.jsx';
import ScrollDown from '../../layout/ScrollDown/ScrollDown.jsx';
const Home = () => {
    return (
        <section className="home section" id="home">
        <div className="home__container container grid">
        <div className="home__content grid">
            <Social/>
            <div className="home__img">

            </div>
            <HeroData/>

        </div>
        <ScrollDown/>
        </div>
        </section>
    );
};
export default Home;