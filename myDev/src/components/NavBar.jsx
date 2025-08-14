import "../styles/navbarstyles.css";

function NavBar({ scrollTo, refs, activeNav }) {
  const { homeRef, skillsRef, projectsRef, aboutRef, contactRef } = refs;

  return (
    <>
      <div className="navContainer">
        <div className="innerNavContainer">
          <span
            className={`material-symbols-outlined ${
              activeNav === "home" ? "active" : ""
            }`}
            onClick={() => scrollTo(homeRef)}
          >
            home
          </span>
          <span
            className={`material-symbols-outlined ${
              activeNav === "skills" ? "active" : ""
            }`}
            onClick={() => scrollTo(skillsRef)}
          >
            code
          </span>
          <span
            className={`material-symbols-outlined ${
              activeNav === "projects" ? "active" : ""
            }`}
            onClick={() => scrollTo(projectsRef)}
          >
            brush
          </span>
          <span
            className={`material-symbols-outlined ${
              activeNav === "about" ? "active" : ""
            }`}
            onClick={() => scrollTo(aboutRef)}
          >
            person
          </span>
          <span
            className={`material-symbols-outlined ${
              activeNav === "contact" ? "active" : ""
            }`}
            onClick={() => scrollTo(contactRef)}
          >
            mail
          </span>
        </div>
      </div>
    </>
  );
}

export default NavBar;
