import React from "react";
import "./_Header.scss";
import "./_Mediaheader.scss";
import email  from "./Icon/email.svg";
import linkedin from "./Icon/linkedin.svg"
import instagram from "./Icon/instagram.svg"
const Header = () => {
  return (
    <div>
      <header className="header-container">
        <div className="logo">
          <a href="">Logo</a>
        </div>
        <div className="header">
          <a href="">Skills</a>
          <a href="">Projects</a>
          <a href="">Certificates</a>
          <a href="">Contact</a>
        </div>
        <div className="icons">
          <a href="mailto:amulya.a.t007@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src={email} alt="Email" />
          </a>
          <a href="https://www.linkedin.com/in/amulya-a-t-5b522a222?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAADfrINkBbt02YZuQVfqMPWv9BVaqPks5cOw&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_people%3BQBgSfjvBS1GlyAZ2CwhZoA%3D%3D" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt= "Linked in"/>
          </a>
          <a href="https://www.instagram.com/amulya_at/profilecard/?igsh=YnZxeTUxdm9iaGky" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="Instagram"/>
          </a>
        </div>
      </header>
      <hr style={{ border: "0.001rem solid #e03400" }} />
    </div>
  );
};
export default Header;
