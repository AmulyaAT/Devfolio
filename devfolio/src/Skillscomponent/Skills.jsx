import React from "react";
import "./_Skills.scss"
import { Html5TwoTone } from "@ant-design/icons"
const Skills=()=>{
    return(
        <div className="Skill-container">
            <div className="Skill__heading">
            <h3>Skills</h3>
            </div>
           <div className="Grid">
           <div className="Skill__one">
                {/* <Html5TwoTone/> */}
                <img src="" alt="HTML"/>
                <img src="" alt="HTML"/>
                <img src="" alt="CSS"/>
                <img src="" alt="JS"/>
            </div>
            <div className="Skill__two">
                <img src="" alt="TS"/>
                <img src="" alt="REACT"/>
                <img src="" alt="REDUX"/>
            </div>
            <div className="Skill__three">
            <img src="" alt="TAILWIND"/>
            <img src="" alt="ANTD"/>
            </div>
            <div className="Skill__four">
            <img src="" alt="---"/>
            </div>
           </div>
        </div>
    )
}

export default Skills;