import '../styles/aboutpagestyles.css';
import pixarPortrait2 from '../images/pixarPortrait2.png';

function AboutPage() {
    return(
        <>
        <div className="aboutPageContainer">
            <h1>About Me</h1>

            <div className="aboutImg">
                <img src={pixarPortrait2} alt="pixar portrait" />
                <div className="gradientOverlay"></div>
            </div>
            
            <div className="aboutMeBox1 card">
                <div className="text1">
                    <h3>Where I'm From: </h3>
                    <p>Chicago</p>
                </div>
                <div className="text2">
                    <h3>Where I Currently Reside: </h3>
                    <p>Dallas, Texas</p>
                </div>
            </div>

            <div className="aboutMeBox2 card">
                <div className="text3">
                    <h3>College: </h3>
                    <p>Collin College</p>
                </div>
                <div className="text4">
                    <h3>What I studied: </h3>
                    <p>I studied and recieved an A.A.S in Web Development, the Web Development Fundamentals Certificate, and Software Development Programming Certificate.</p>
                </div>
            </div>

            <div className="aboutMeBox3 card">
                <div className="text5">
                    <h3>My career goals: </h3>
                    <p>My career goal is to become a frontend developer who seamlessly blends design and logic to create engaging user experiences. Im also eager to deepen my understanding of backend development and begin exploring the integration of AI into web applications.</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default AboutPage;