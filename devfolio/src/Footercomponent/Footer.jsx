import React from "react";
import "./_Footer.scss"
import "./_Mediafooter.scss";
import email  from "./Icons/email.svg";
import linkedin from "./Icons/linkedin.svg"
import instagram from "./Icons/instagram.svg"
const Footer=()=>{
    return(
        <div className="footer-container">
           <div className="logos">
           <a href="">
                <img src=""/>
                Amulya A T
            </a>
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
           <div className="mail">
           <a href="mailto:amulya.a.t007@gmail.com">amulya.a.t007@gmail.com</a>
           </div>
           <div className="copy">
           <p> Copywrite &copy; 2024 Amulya.AT</p>
           </div>
        </div>
    )
}
export default Footer;