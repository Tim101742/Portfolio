import { useEffect } from "react";
import ScrollSpy from "bootstrap/js/dist/scrollspy";
import "./header.css";

function Header() {
  useEffect(() => {
    const scrollSpy = new ScrollSpy(document.body, {
      target: "#navbar-example2",
      offset: 100,
    });

    return () => scrollSpy.dispose();
  }, []);

  return (
    <>
      <nav
        id="navbar-example2"
        className="navbar sticky-top navbar-dark glass-nav py-3"
      >
        <div className="container">
          <a className="navbar-brand fs-4 fw-semibold text-white" href="#">
            Tim
          </a>

          <ul className="nav nav-pills gap-3">
            <li className="nav-item">
              <a className="nav-link text-white" href="#over">
                Over mij
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#project">
                Projecten
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-white"
                href="https://101742.stu.sd-lab.nl/CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                CV
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;