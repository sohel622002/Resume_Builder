import React from "react";

const EditableDiv = ({ classes, fieldvalue, getDatatoEducation }) => { 
  // const [text, setText] = useState(fieldvalue);

  return (
    <div
      className={classes}
      spellCheck="false"
      contentEditable
      suppressContentEditableWarning
    >
      {fieldvalue}
    </div>
  );
};

export default EditableDiv;
