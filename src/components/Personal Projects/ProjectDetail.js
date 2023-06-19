import { useState } from "react";

function ProjectDetail({ detail }) {
  const [projectDetail, setProjectDetail] = useState(detail);

  return (
    <div
      className="project_Detail"
      spellCheck="false"
      contentEditable
      suppressContentEditableWarning
      onChange={(e) => setProjectDetail(e.target.textContent)}
    >
      {projectDetail}
    </div>
  );
}

export default ProjectDetail;
