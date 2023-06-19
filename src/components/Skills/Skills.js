import React, { useState } from "react";

import "./Skills.scss";
import Skill from "./Skill";

function Skills({ skills }) {
  const [skillset, setskillset] = useState([...skills]);
  const addSkill = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const skillsetdup = [...skillset];
      skillsetdup.push("");
      setskillset(skillsetdup);
    }
    
    if(e.target.textContent === '' && e.key === "Backspace"){
      const div = Array.from(document.querySelectorAll('.skill'));
      div[div.length - 1 ].parentElement.removeChild(div[div.length - 1 ])
    }
  };
  return (
    <div className="skill_section">
      <h2 className="main_title">Skills</h2>
      <div className="skills">
        {skillset.map((skill, index) => (
          <Skill key={index} skill={skill} addSkill={(e) => addSkill(e)} />
        ))}
      </div>
    </div>
  );
}

export default Skills;
