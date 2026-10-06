import "../styles/Navbar.css";
import mylogo from "../assets/my_logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">
        <img src={mylogo} alt="Logo" />
      </h2>

      <ul className="nav-links">
        <li>
          <a href="#hero">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
