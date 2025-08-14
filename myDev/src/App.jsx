import LandingPage from "./components/LandingPage.jsx";
import NavBar from "./components/NavBar.jsx";
import Skills from "./components/Skills.jsx";
import ProjectsPage from "./components/ProjectsPage.jsx";
import AboutPage from "./components/AboutPage.jsx";
import ContactPage from "./components/ContactPage.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

import React, { useEffect, useRef, useState } from "react";
import ParticlesComponent from "./components/ParticlesComponent.jsx";

function App() {
  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const [activeNav, setActiveNav] = useState("home");

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveNav(entry.target.dataset.section);
        }
      });
    }, options);

    const sections = [
      { ref: homeRef, id: "home" },
      { ref: skillsRef, id: "skills" },
      { ref: projectsRef, id: "projects" },
      { ref: aboutRef, id: "about" },
      { ref: contactRef, id: "contact" },
    ];

    sections.forEach(({ ref }) => {
      if(ref.current) {
        observer.observe(ref.current);
      }
    });
    
    return() => {
      sections.forEach(({ ref }) => {
        if(ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <>
      <div className="portfolioContainer">
        <div className="innerPortfolioContainer">
          <ParticlesComponent id="particles"></ParticlesComponent>
          <NavBar
            scrollTo={scrollTo}
            refs={{ homeRef, skillsRef, projectsRef, aboutRef, contactRef }}  activeNav={activeNav}
          />
          <div className="landingPage" ref={homeRef} data-section="home" >
            <LandingPage scrollTo={scrollTo} refs={{projectsRef}}/>
          </div>
          <div className="skillsPage" ref={skillsRef} data-section="skills">
            <Skills />
          </div>
          <div className="projectsPage" ref={projectsRef} data-section="projects">
            <ProjectsPage />
          </div>
          <div className="aboutPage" ref={aboutRef} data-section="about">
            <AboutPage />
          </div>
          <div className="contactPage" ref={contactRef} data-section="contact">
            <ContactPage />
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
