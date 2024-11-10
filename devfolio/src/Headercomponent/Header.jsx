import React from "react";
import "./_Header.scss";
import "./_Mediaheader.scss";
import email from "./Icon/email.svg";
import linkedin from "./Icon/linkedin.svg";
import instagram from "./Icon/instagram.svg";
import Logo from "./Icon/Logo.png";

const Header = () => {
  return (
    <div>
      <header className="header-container">
        <div className="logo">
          <a href="#main">
            <img src={Logo} alt="Logo" />
          </a>
        </div>
        <div className="header">
          <a href="#skills">Skills</a>
          <a href="#Journey">Journey</a>
          <a href="#project">Projects</a>
          <a href="#certificate">Certificates</a>
          <a href="#contactme">Contact</a>
        </div>
        <div className="icons">
          <a href="mailto:amulya.a.t007@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src={email} alt="Email" />
          </a>
          <a href="https://www.linkedin.com/in/amulya-a-t-5b522a222" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" />
          </a>
          <a href="https://www.instagram.com/amulya_at/" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="Instagram" />
          </a>
        </div>
      </header>
      <hr className="header-line" />
    </div>
  );
};

export default Header;
