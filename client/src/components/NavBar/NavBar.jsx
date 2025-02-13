import { useState } from "react";
import { Link } from "react-scroll";
import "./NavBar.css";

const navLinks = [
  { id: 1, name: "Home", link: "home" },
  { id: 2, name: "Events", link: "events" },
  { id: 3, name: "Coordinators", link: "coordinators" },
  { id: 4, name: "Team", link: "team" },
  { id: 5, name: "FAQ", link: "faq" },
  { id: 6, name: "Contact", link: "footer" },
];

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
        {navLinks.map((item) =>
          item.link === "team" ? (
            <span key={item.id} className="nav-link">
              {item.name}
            </span>
          ) : (
            <Link
              key={item.id}
              to={item.link}
              smooth={true}
              duration={500}
              className="nav-link"
            >
              {item.name}
            </Link>
          )
        )}
      </div>

      <button
        className={`navbar-toggle ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
    </nav>
  );
};

export default NavBar;
