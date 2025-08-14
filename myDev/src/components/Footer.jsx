import "../styles/footerstyles.css";
import github from '../images/github.svg';
import linkedin from '../images/linkedin.svg';

function Footer() {
  return (
    <>
      <div className="footerContainer">
        <h3>Thanks for visiting — I’d love to hear from you.</h3>
        <div className="socialsContainer">
          <a href="https://github.com/cassandrajessica" target="_blank">
            <img src={github} alt="github logo" className="github" />
          </a>
          <a
            href="https://www.linkedin.com/in/cassandra-lehman-vo-77527a338/"
            target="_blank"
          >
            <img src={linkedin} alt="linkedin logo" className="linkedin" />
          </a>
        </div>
        <div className="credits">
            <p>Designed and coded — with love — by yours truly.</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
