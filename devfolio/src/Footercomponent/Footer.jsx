import React from "react";
import "./_Footer.scss"
import "./_Mediafooter.scss"
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
            <a href="">
                icons
            </a>
            <a href="">
                icons
            </a>
            <a href="">
                icons
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