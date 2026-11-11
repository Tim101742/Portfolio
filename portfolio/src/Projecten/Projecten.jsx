import './Projecten.css'
import ontkoking from './images/ontkoking.png'
import Yume from './images/Yume.png'
import Japan from './images/Japan.png'
import Quizzie from './images/Quizzie.png'
import vis from './images/vis.png'

function Projecten() {
  return (
    <>
      <div className="row-5" id="project">
        <div className="col-11 mx-auto">
          <div className="carousel-wrapper">
            <h1>Projecten</h1>

            <div id="carouselExampleCaptions" className="carousel slide carousel-fade">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4"></button>
              </div>
              <div className="carousel-inner">

                <div className="carousel-item active">
                  <a href="https://101742.stu.sd-lab.nl/index.php?classId=95b9b87a-68f3-44d8-924f-54e626d0f35c&assignmentId=60a96aaa-b0e1-445f-b0fc-7e14dbd2a605&submissionId=6c7196be-1fee-35e8-fcb8-a316cf100a9b" target="_blank" rel="noopener noreferrer">
                    <img src={ontkoking} className="carousel-img" alt="ontkoking" />
                  </a>
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Stop de ontkoking</h5>
                    <p>Recepten website waar gebruikers zelf hun eigen recepten konden uploaden, aanpassen, verwijderen en delen.</p>
                  </div>
                </div>

                <div className="carousel-item active">
                  <a href="https://101742.stu.sd-lab.nl/index.php?classId=95b9b87a-68f3-44d8-924f-54e626d0f35c&assignmentId=60a96aaa-b0e1-445f-b0fc-7e14dbd2a605&submissionId=6c7196be-1fee-35e8-fcb8-a316cf100a9b" target="_blank" rel="noopener noreferrer">
                    <img src={ontkoking} className="carousel-img" alt="ontkoking" />
                  </a>
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Stop de ontkoking</h5>
                    <p>Recepten website waar gebruikers zelf hun eigen recepten konden uploaden, aanpassen, verwijderen en delen.</p>
                  </div>
                </div>

                <div className="carousel-item">
                  <a href="https://101742.stu.sd-lab.nl/YumeRamen/YumeRamen.php" target="_blank" rel="noopener noreferrer">
                    <img src={Yume} className="carousel-img" alt="Yume" />
                  </a>
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Yume Ramen</h5>
                    <p>Een gerechten website.</p>
                  </div>
                </div>

                <div className="carousel-item">
                  <a href="https://101742.stu.sd-lab.nl//CameraJapanFestival/PromoteITBjo%CC%88rnv3/index.html" target="_blank" rel="noopener noreferrer">
                    <img src={Japan} className="carousel-img" alt="Japan" />
                  </a>
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Camera Japan festival</h5>
                    <p>Een website om een evenement te promoten.</p>
                  </div>
                </div>

                <div className="carousel-item">
                  <a href="https://101742.stu.sd-lab.nl/Quizzie-main/Quizzie/Deniz/quizzies/homepage/homepage.html" target="_blank" rel="noopener noreferrer">
                    <img src={Quizzie} className="carousel-img" alt="Quizzie" />
                  </a>
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Quizzie</h5>
                    <p>Een quiz website om mensen te informeren.</p>
                  </div>
                </div>

                <div className="carousel-item">
                  <a href="https://101742.stu.sd-lab.nl/Dive_detect/inlog/inlog.php" target="_blank" rel="noopener noreferrer">
                    <img src={vis} className="carousel-img" alt="Dive detect" />
                  </a>
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Dive detect</h5>
                    <p>Een interactieve website waarmee je per user een paar vissen kan vangen die in een database worden opgeslagen.</p>
                  </div>
                </div>

              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
              </button>

              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
              </button>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projecten;