import { useState } from "react";
import ProjectDetail from "./ProjectDetail";

function Singlepersonalproject({
  singleproject,
  index,
  editPersonalProjectHandler,
  addEducationHandler
}) {
  const [projectDetail, setProjectDetail] = useState([...singleproject.projectDetail])
  const [projectName, setProjectName] = useState(singleproject.projectName);

  const addProjectDetail = () => {
    const projectDetailDup = [...projectDetail]
    projectDetailDup.push('')
    setProjectDetail([...projectDetailDup])
  }

  const deleteOneProjectDetail = (index) => {
    const projectDetailDup = [...projectDetail]
    projectDetailDup.splice(index, 1)
    console.log(projectDetailDup)
    setProjectDetail([...projectDetailDup])
  }

  return (
    <div
      className="personal_project"
      onClick={(e) => editPersonalProjectHandler(e, index)}
    >
      <div className="project_side_function">
        <i
          className="fa-solid fa-circle-plus"
          style={{ color: "#ffffff" }}
          onClick={addEducationHandler}
        />
        <i className="fa-solid fa-trash-can" style={{ color: "#ffffff" }} />
        <div className="error"></div>
      </div>
      <div
        className="project_title"
        spellCheck="false"
        contentEditable
        suppressContentEditableWarning
        onChange={(e) => setProjectName(e.target.textContent)}
      >
        {projectName}
      </div>
      <ul>
        {projectDetail.map((detail, index) => (
          <div key={index}>
            <span className="list_dot" />
            <ProjectDetail detail={detail} />
            <i
              className="fa-solid fa-trash-can trashcan"
              style={{ color: "#1b9c85", cursor: 'pointer' }}
              onClick={() => deleteOneProjectDetail(index)}
            />
          </div>
        ))}
        <div className="add_project_detail">
          <span onClick={addProjectDetail}>
            <i
              className="fa-solid fa-circle-plus"
              style={{ color: "#1b9c85" }}
            />
          </span>
          <span />
        </div>
      </ul>
    </div>
  );
}

export default Singlepersonalproject;
