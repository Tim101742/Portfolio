import './Projecten.css'
import ontkoking from './images/ontkoking.png'
import Yume from './images/Yume.png'
import Japan from './images/Japan.png'
import Quizzie from './images/Quizzie.png'
function Projecten() {
  return (
    <>
    <div className="row-5" id='project'>
      <div className="col-11 mx-auto">
<div id="carouselExampleCaptions" className="carousel slide carousel-fade">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={ontkoking} className="carousel-img" alt="ontkoking.png"></img>  
      <div className="carousel-caption d-none d-md-block ">
        <h5>Stop de ontkoking</h5>
        <p>Recepten website waar gebruikers zelf hun eigen recepten konden uploaden aanpassen en verwijderen en delen met andere gebruikers</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={Yume} className="carousel-img" alt="/test.jpg"></img>
      <div className="carousel-caption d-none d-md-block">
        <h5>Yume Ramen</h5>
        <p>Een gerechten website.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={Japan} className="carousel-img" alt="/test.jpg"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Camera Japan festival</h5>
        <p>Een website om een evenement te promoten.</p>
      </div>
    </div>
        <div className="carousel-item">
      <img src={Quizzie} className="carousel-img" alt="/test.jpg"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Quizzie</h5>
        <p>Een Quiz website om mensen te informeren over .</p>
      </div>
    </div>

  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
      </div>
    </div>
    
    </>
  );
}

export default Projecten;
