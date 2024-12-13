import React from 'react';
import './App.css';
import Navbar from './layout/Navbar/Navbar';
import About from './sections/About/About';
import Hero from './sections/Hero/Hero';
import Experience from './sections/Experience/Experience';
import Project from './sections/Project/Project';
import Skill from './sections/Skills/Skills';
import Footer from './layout/Footer/Footer';
import Contact from './sections/Contact/Contact';

function App() {

  return (
    <>
     <Navbar />
     <Hero />
     <About />
     <Experience />
     <Project />
     <Skill />
     <Contact />
     <Footer />
      {/* <main className='main'>
      </main> */}
    </>

  );
  
}
export default App;