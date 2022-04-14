import React from "react";
import "./skills.css";
import SkillSet from "./skillSet";

function Skills(props) {
  const skills_list = SkillSet;
  const user_skill = skills_list.map((skill) => (
    <div className="skill my-2" key={skill} id={skill}>
      <span className="title h6 text-white">{skill.toUpperCase()}</span>
      <div className="skill-bar">
        <div className="progress"></div>
      </div>
    </div>
  ));

  return (
    <section className="skill-section">
      <div className="container p-5">
        <h1 className="text-center text-white text-underline">
          <u>{props.title}</u>
        </h1>
        <div className="skills p-4">{user_skill}</div>
      </div>
    </section>
  );
}

export default Skills;
