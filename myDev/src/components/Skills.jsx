import "../styles/skillsstyles.css";


import Marquee from "react-fast-marquee";

function Skills() {
  return (
    <>
      <div className="skillsContainer">
        <h1 className="title">My Current Skills</h1>

        <div className="scroller">
          <Marquee className="innerScroller" pauseOnHover>
            <p>MongoDB</p>
            <p>Express</p>
            <p>React</p>
            <p>Node</p>
            <p>Javascript</p>
            <p>Html</p>
            <p>Css</p>
            <p>Figma</p>
          </Marquee>
        </div>
        <div className="skillsCard card1">
          <span class="material-symbols-outlined">brush</span>
          <h3>Website Design</h3>
          <p>
            Design and create visually appealing websites with tools such as
            figma and procreate for custom art.
          </p>
        </div>
        <div className="skillsCard card2">
          <span class="material-symbols-outlined">code</span>
          <h3>Coding & Programming</h3>
          <p>
            Utilize coding language such as Javascript and use React frontend
            framework to handle the U.I.
          </p>
        </div>
        <div className="skillsCard card3">
          <span class="material-symbols-outlined">database</span>
          <h3>Backend Integrations</h3>
          <p>Working knowledge of MongoDB and the mongoose library.</p>
        </div>

        <div className="skillsCard card4">
          <span class="material-symbols-outlined">groups</span>
          <h3>Agile Methodology</h3>
          <p>Worked in a group that operated through agile methodologies.</p>
        </div>
      </div>
    </>
  );
}

export default Skills;
