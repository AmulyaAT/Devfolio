import React from "react";
import "./_Skills.scss";
import "./_Mediaskill.scss";
import html from "./Icons/html.svg";
import css from "./Icons/css.svg";
import javascript from "./Icons/javascript.svg";
import antd from "./Icons/antd.svg";
import react from "./Icons/react.svg";
import typescript from "./Icons/typescript.svg";
import tailwind from "./Icons/tailwind.svg";
import redux from "./Icons/redux.svg";
import figma from "./Icons/figma.svg";
import github from "./Icons/github.svg";

const Skills = () => {
  return (
    <div className="Skill-container">
      <div className="Skill__heading">
        <h3>Skills</h3>
      </div>
      <div className="Skill-grid">
        <div className="Skill__icon">
          <img src={html} alt="HTML" />
        </div>
        <div className="Skill__icon">
          <img src={css} alt="CSS" />
        </div>
        <div className="Skill__icon">
          <img src={javascript} alt="JavaScript" />
        </div>
        <div className="Skill__icon">
          <img src={typescript} alt="TypeScript" />
        </div>
        <div className="Skill__icon">
          <img src={react} alt="React" />
        </div>
        <div className="Skill__icon">
          <img src={redux} alt="Redux" />
        </div>
        <div className="Skill__icon">
          <img src={antd} alt="Ant Design" />
        </div>
        <div className="Skill__icon">
          <img src={tailwind} alt="Tailwind" />
        </div>
        <div className="Skill__icon">
          <img src={figma} alt="Figma" />
        </div>
        <div className="Skill__icon">
          <img src={github} alt="GitHub" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
