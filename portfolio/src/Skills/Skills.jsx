import "./skills.css";

function Skills() {
  return (
    <>

    <div className="container-fluid px-5 mt-5" id="skills">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="row g-3 justify-content-center">
    <h1>Skills</h1>
            <div className="col-6 col-md-4">
              <div className="card fixed-card bg-dark text-white text-center">
                <img 
                  src="/src/Skills/images/HTML.png" 
                  className="card-img-top" 
                  alt="HTML Skill" 
                />
                <div className="card-body">
                  <h5 className="card-title">HTML</h5>
                  <p className="card-text">Markup language for web pages</p>
                </div>
              </div>
            </div>

            <div className="col-6 col-md-4">
              <div className="card fixed-card bg-dark text-white text-center">
                <img 
                  src="/src/Skills/images/css.png" 
                  className="card-img-top" 
                  alt="CSS Skill" 
                />
                <div className="card-body">
                  <h5 className="card-title">CSS</h5>
                  <p className="card-text">Stylesheet language for visual formatting</p>
                </div>
              </div>
            </div>

            <div className="col-6 col-md-4">
              <div className="card fixed-card bg-dark text-white text-center">
                <img 
                  src="/src/Skills/images/javascript.webp" 
                  className="card-img-top" 
                  alt="JavaScript Skill" 
                />
                <div className="card-body">
                  <h5 className="card-title">JavaScript</h5>
                  <p className="card-text">Programming language for web interactivity</p>
                </div>
              </div>
            </div>

             <div className="col-6 col-md-4">
              <div className="card fixed-card bg-dark text-white text-center">
                <img 
                  src="/src/Skills/images/PHP.png" 
                  className="card-img-top" 
                  alt="PHP Skill" 
                />
                <div className="card-body">
                  <h5 className="card-title">PHP</h5>
                  <p className="card-text">Server-side scripting</p>
                </div>
              </div>
            </div>

             <div className="col-6 col-md-4">
              <div className="card fixed-card bg-dark text-white text-center">
                <img 
                  src="/src/Skills/images/SQL.webp" 
                  className="card-img-top" 
                  alt="SQL Skill" 
                />
                <div className="card-body">
                  <h5 className="card-title">SQL</h5>
                  <p className="card-text">Database query language</p>
                </div>
              </div>
            </div>

             <div className="col-6 col-md-4">
              <div className="card fixed-card bg-dark text-white text-center">
                <img 
                  src="/src/Skills/images/React.png" 
                  className="card-img-top" 
                  alt="React Skill" 
                />
                <div className="card-body">
                  <h5 className="card-title">React</h5>
                  <p className="card-text">JavaScript UI library</p>
                </div>
              </div>
            </div>

             <div className="col-6 col-md-4">
              <div className="card fixed-card bg-dark text-white text-center">
                <img 
                  src="/src/Skills/images/node.webp" 
                  className="card-img-top" 
                  alt="Node.js Skill" 
                />
                <div className="card-body">
                  <h5 className="card-title">Node.js</h5>
                  <p className="card-text">JavaScript runtime environment</p>
                </div>
              </div>
            </div>

             <div className="col-6 col-md-4">
              <div className="card fixed-card bg-dark text-white text-center">
                <img 
                  src="/src/Skills/images/Unity.png" 
                  className="card-img-top" 
                  alt="Unity Skill" 
                />
                <div className="card-body">
                  <h5 className="card-title">Unity</h5>
                  <p className="card-text">Game engine</p>
                </div>
              </div>
            </div>

             <div className="col-6 col-md-4">
              <div className="card fixed-card bg-dark text-white text-center">
                <img 
                  src="/src/Skills/images/C.png" 
                  className="card-img-top" 
                  alt="C# Skill" 
                />
                <div className="card-body">
                  <h5 className="card-title">C#</h5>
                  <p className="card-text">General-purpose programming language</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    </>
  );

}

export default Skills;