import React from "react";
import "./_Skills.scss"
import html from "./Icons/html.svg"
import css from "./Icons/css.svg"
import javascript from "./Icons/javascript.svg"
import antd from "./Icons/antd.svg"
import react from "./Icons/react.svg"
import typescript from "./Icons/typescript.svg"
import tailwind from "./Icons/tailwind.svg"
import redux from "./Icons/redux.svg"
import figma from "./Icons/figma.svg"
import github from "./Icons/github.svg"

const Skills=()=>{
    return(
        <div className="Skill-container">
            <div className="Skill__heading">
            <h3>Skills</h3>
            </div>
           <div className="Grid">
           <div className="Skill__one">
                <img src={html} alt="HTML"/>
                <img src={css} alt="HTML"/>
                <img src={javascript} alt="CSS"/>
                <img src={typescript} alt="JS"/>
            </div>
            <div className="Skill__two">
                <img src={react} alt="TS"/>
                <img src={redux} alt="REACT"/>
                <img src={antd} alt="REDUX"/>
            </div>
            <div className="Skill__three">
            <img src={tailwind} alt="TAILWIND"/>
            <img src={figma} alt="FIGMA"/>
            </div>
            <div className="Skill__four">
            <img src={github} alt="GITHUB"/>
            </div>
           </div>
        </div>
    )
}

export default Skills;