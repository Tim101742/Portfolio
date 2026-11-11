import "bootstrap-icons/font/bootstrap-icons.css";
import "./Footer.css";

function Footer() {
  return (
    <footer className="glass-nav text-light py-4 mt-auto">
      <div className="container text-center">
        <div className="d-flex justify-content-center gap-4 fs-4">
          <a
            href="https://www.linkedin.com/in/tim-manhave-a5b63039b"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light"
          >
            <i className="bi bi-linkedin"></i>
          </a>

          <a
            href="https://github.com/Tim101742/Portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light"
          >
            <i className="bi bi-github"></i>
          </a>

          <a
            href="mailto:tim.manhave08@gmail.com"
            className="text-light"
          >
            <i className="bi bi-envelope-fill"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;