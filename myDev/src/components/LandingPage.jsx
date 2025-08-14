import pixarPortrait from "../images/pixarPortrait.png";
import "../styles/landingpagestyles.css";
import ProjectsPage from "./ProjectsPage";

function LandingPage({scrollTo, refs}) {
  const { projectsRef } = refs;

  return (
    <>
      <div className="landingPageContainer">
        <div className="pixarPortrait">
          <img src={pixarPortrait} alt="pixar portrait " />
          <div className="gradientOverlay"></div>
        </div>

        <ul className="categories">
          <li>Web Dev</li>
          <li>|</li>
          <li>Software Dev</li>
          <li>|</li>
          <li>Design</li>
        </ul>

        <h1 className="name">Hi, I'm Cassandra</h1>
        <h2 className="occupation">Frontend Developer</h2>

        <div className="landingPageBtns">
          <div className="resumeBtn">
            <a href="/clv_resume.pdf"
            target='_blank'
            rel="noopener noreferrer">
              <button>Resume</button>
            </a>
          </div>
          <div className="projectsBtn">
            <button onClick={() => {
              scrollTo(projectsRef)}}>Projects</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
