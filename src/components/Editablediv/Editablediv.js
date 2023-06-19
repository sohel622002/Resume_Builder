import React, { useState } from "react";

const EditableDiv = ({ classes, fieldvalue, getDatatoEducation }) => {
  const [text, setText] = useState(fieldvalue);

  return (
    <div
      className={classes}
      spellCheck="false"
      contentEditable
      suppressContentEditableWarning
    >
      {text}
    </div>
  );
};

export default EditableDiv;
