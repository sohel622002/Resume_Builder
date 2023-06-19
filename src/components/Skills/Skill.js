import React, { useState } from "react";

function Skill({ skill, addSkill }) {
  const [value, setValue] = useState(skill);
  return (
    <div
      className="skill"
      contentEditable
      suppressContentEditableWarning
      onKeyDown={addSkill}
      onChange={(event) => setValue(event.target.textContent)}
    >
      {value}
    </div>
  );
}

export default Skill;
