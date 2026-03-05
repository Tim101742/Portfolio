import "./about.css";
import profileImg from './images/image.png';

function About() {
  return (
    <div className="container" id="about">
      <div className="row align-items-start">

        <div className="col-md-6 ">
          <h1>Over mij</h1>
          <p>
            Welkom op mijn portfolio! Ik ben een gedreven en nieuwsgierige professional met een passie voor het creëren van doordachte en impactvolle oplossingen. 
            Of het nu gaat om design, ontwikkeling of strategie — ik werk graag aan projecten waarin creativiteit en functionaliteit samenkomen.
          </p>

          <p>
            Ik hou ervan om ideeën om te zetten in tastbare resultaten. Daarbij combineer ik analytisch denken met oog voor detail en een sterke focus op gebruikservaring. 
            Samenwerken vind ik belangrijk: de beste resultaten ontstaan wanneer verschillende perspectieven samenkomen.
          </p>

          <p>
            In mijn werk streef ik naar kwaliteit, helderheid en continu leren. Elk project zie ik als een kans om te groeien en mijn vaardigheden verder te ontwikkelen.
          </p>

          <p>
            Benieuwd naar mijn werk of wil je samenwerken? Neem gerust contact met me op!
          </p>
        </div>

            <div className="col-md-6 ">
        <img src={profileImg} alt="Foto van mij" className="img-fluid rounded about-img" />
        </div>

      </div>
    </div>
  );
}

export default About;
