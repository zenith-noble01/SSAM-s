import { useState } from "react";
import "./nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  const [nav, setNav] = useState(false);
  const [annim, setAnnim] = useState("open");

  return (
    <div className="nav">
      <div className="navLeft">SSAM's</div>
      <div className="navCenter">
        <ul className="CenterLinks">
          <li className="centerLinkItems">
            <a href="#home" className="link">
              Home
            </a>
          </li>
          <li className="centerLinkItems">
            <a href="#about" className="link">
              About
            </a>
          </li>
          <li className="centerLinkItems">
            <a href="#members" className="link">
              Members
            </a>
          </li>
          <li className="centerLinkItems">
            <a href="#contact" className="link">
              Contact us
            </a>
          </li>
        </ul>
      </div>
      <div className="navRight">
        <ul className="rightItems">
          <Link to="/auth" className="link">
            <li>Register</li>
          </Link>
        </ul>
      </div>
      <div className="menu">
        <div className="hamburger" onClick={() => setNav(!nav)}>
          <span
            className={annim}
            onClick={() => setAnnim(annim === "close" ? "open" : "close")}
          ></span>
          <span
            className={annim}
            onClick={() => setAnnim(annim === "close" ? "open" : "close")}
          ></span>
          <span
            className={annim}
            onClick={() => setAnnim(annim === "close" ? "open" : "close")}
          ></span>
        </div>
        <div className="menuRoutes" style={{ right: nav ? "0px" : "-50vw" }}>
          <ul onClick={() => setNav(false)}>
            <li className="centerLinkItems__mobile">
              <a href="#home" className="link">
                Home
              </a>
            </li>
            <li className="centerLinkItems__mobile">
              <a href="#about" className="link">
                About
              </a>
            </li>
            <li className="centerLinkItems__mobile">
              <a href="#members" className="link">
                Members
              </a>
            </li>
            <li className="centerLinkItems__mobile">
              <a href="#contact" className="link">
                Contact us
              </a>
            </li>
            <Link to="/auth" className="link">
              <li className="centerLinkItems__mobile">Register</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;

// films to be downloaded
// 12 strong, southpaw

// onClick={() => setNav(false)}
