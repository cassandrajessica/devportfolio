import "../styles/projectsstyles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import jsWeather from "../images/jsWeather.png";
import burgerPage from "../images/burgerPage.png";

function ProjectsPage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="projectsPageContainer">
        <h1 className="title">Projects</h1>
        <div className="projectCardsContainer">
          <Slider {...settings}>
            <div className="projectsCard">
              <img src={jsWeather} alt="javascript weather app" />
              <div className="innerProjectsCard">
                <h3>Weather App</h3>
                <div className="projectBtns">
                  <a href="https://jsweatherapp.onrender.com/" target="_blank">
                    <button className="view">View</button>
                  </a>
                  <a
                    href="https://github.com/cassandrajessica/jsweatherapp"
                    target="_blank"
                  >
                    <button className="viewGithub">GitHub</button>
                  </a>
                </div>
              </div>
            </div>
            <div className="projectsCard">
              <img src={burgerPage} alt="burger page" />
              <div className="innerProjectsCard">
                <h3>Restaraunt Concept Design</h3>
                <div className="projectBtns">
                  <a
                    href="https://www.figma.com/community/file/1530312077170719675/burger-restaurant-concept-site"
                    target="_blank"
                  >
                    <button className="view">View</button>
                  </a>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}

export default ProjectsPage;
