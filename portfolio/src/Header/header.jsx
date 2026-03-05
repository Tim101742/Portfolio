import './header.css'
function Header() {
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
        <a className="nav-link text-white" href="#over">Over mij</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white" href="#skills">Skills</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white" href="#project">Projecten</a>
      </li>
    </ul>
  </div>
</nav>
</>
  );
}
export default Header;