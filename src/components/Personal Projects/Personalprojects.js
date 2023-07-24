import { useEffect, useRef, useState } from "react";
import "./Personalprojects.scss";
import Singlepersonalproject from "./Singlepersonalproject";

function Personalprojects({ personalprojects }) {
  
  const ProjectRef = useRef();
  const [projectDetail, setProjectdetail] = useState([...personalprojects]);

  const editPersonalProjectHandler = (e, index) => {
    const personalprojectdiv =
      document.querySelectorAll(".personal_project");
    Array.from(personalprojectdiv).forEach((projectDiv) =>
    projectDiv.classList.remove("openedit_personal_project")
    );
    const sidefunction = document.querySelectorAll(".project_side_function");
    Array.from(sidefunction).forEach((sidefunc)=> sidefunc.style.display = 'none')

    personalprojectdiv[index].classList.add("openedit_personal_project");
    sidefunction[index].style.display = "flex";
  };

  const addEducationHandler = () => {
    const projectDetailDup = [...projectDetail];
    projectDetailDup.push({
      id: Math.floor(Math.random() * 10000),
      projectName: "",
      projectDetail: [""],
    });
    setProjectdetail(projectDetailDup);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (ProjectRef.current && !ProjectRef.current.contains(event.target)) {
        const projectDivs = document.querySelectorAll(".personal_project");
        Array.from(projectDivs).forEach((projectDiv) =>
          projectDiv.classList.remove("openedit_personal_project")
        );
        const sidefunction = document.querySelectorAll(
          ".project_side_function"
        );
        Array.from(sidefunction).forEach(
          (projectDiv) => (projectDiv.style.display = "none")
        );
      }
    };
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="personal-projects-container" ref={ProjectRef}>
      <h2 className="main_title">PERSONAL PROJECTS</h2>

      {projectDetail.map((singleproject, index) => (
        <Singlepersonalproject 
          key={singleproject.id}
          singleproject={singleproject}
          index={index}
          editPersonalProjectHandler={editPersonalProjectHandler}
          addEducationHandler={addEducationHandler}/>
      ))}
    </div>
  );
}

export default Personalprojects;
