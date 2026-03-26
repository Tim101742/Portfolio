import './welcome.css'
function Welcome() {
  return (
    <>
<div className="container mt-5 pt-5" id="over">
  <div className="row justify-content-center align-items-center">
    <div className="col-md-8 col-lg-8">
      <div className="p-5 text-center">

        <h1 className="title" id='title'>
          Welkom op mijn portfolio
        </h1>

        <h2 className="fs-3 fw-semibold mb-3">
          Alle tekst op deze pagina is op het moment placeholder tekst
        </h2>

        <p className="fs-5 mb-0">
  Hallo! Mijn naam is Tim en ik ben een enthousiaste ontwikkelaar
  met een passie voor het bouwen van moderne en gebruiksvriendelijke
  applicaties. Op deze pagina vind je een selectie van mijn projecten,
  vaardigheden en ervaringen. Neem gerust een kijkje en ontdek wat ik
  voor jou kan betekenen.
        </p>

      </div>
    </div>
  </div>
</div> 
</>
  );
}
export default Welcome;