import "./about.css";
import profileImg from './images/image.png';

function About() {
  return (
    <div className="container" id="about">
      <div className="row align-items-start">

<div className="col-md-6 "id="text">
          <h1>Over mij</h1>
          <p>
 Ik ben Tim Manhave, een ontwikkelaar die graag bezig is met programmeren en het bouwen van digitale projecten. Ik vind het interessant om ideeën uit te werken tot iets dat niet alleen werkt, maar ook prettig is om te gebruiken.
          </p>

          <p>
Ik houd me bezig met zowel de frontend als de backend van applicaties. Aan de frontend werk ik voornamelijk met HTML, CSS, JavaScript en React aan de backend gebruik ik onder andere Node.js, PHP, Laravel en SQL-databases voor het verwerken en opslaan van data.
          </p>

          <p>
            Wat mij aanspreekt aan software development is voornamelijk het probleemoplossende gedeelte en ook het leren van nieuwe talen of andere frameworks.
          </p>

          <p>
            Ik heb hieronder ook nog een gedeelte over mijn programeer vaardigheden en een paar projecten die ik heb gemaakt.
          </p>
        </div>

            <div className="col-md-4">
        <img src={profileImg} alt="Persoon" className="img-fluid rounded about-img" id="foto"/>
        </div>

      </div>
    </div>
  );
}

export default About;
