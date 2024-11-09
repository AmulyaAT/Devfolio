import React from "react";
import "../Maincomponent/_Main.scss"
import "./_Mediamain.scss"
import Main_image from "./Main_image.png";
const Main=()=>{
    return(
        <div className="main-container">
            <div className="name">
            <h1>Amulya A T</h1>
        </div>
        <div className="para">
            <p>👋I'm Amulya - a curious soul👻 with a passion for creativity 😋🤘, a love for learning 📚, <br/>and a knack for making things happen (even if it means Googling half of what I'm doing😅).<br/> Whether it's building digital experiences or accidentally discovering new hobbies,<br/> I'm always pushing myself to create something meaningful...<br/> or at least entertaining😄!
        </p>
        </div>
        <div className="main-image">
            <img src={Main_image} alt="main image"/>
        </div>
        <div>
        <div className="resume_btn">
        <a href={`${process.env.PUBLIC_URL}/AMULYA_AT_Resume.pdf`} download className="download-resume-button">
            Download Resume
          </a>
            </div>
        </div>
        </div>
    )
}

export default Main;