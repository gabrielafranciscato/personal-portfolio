import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="navbar-logo">Gabriela Costa</h2>

      <ul className="navbar-links">
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Experience</li>
        <li>Education</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;