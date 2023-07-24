import { useEffect, useRef, useState } from "react";
import Singleeducation from "./Singleeducation";

import { useSelector, useDispatch } from "react-redux";
import {
  changeEducationDetail,
  changeProjectDetail,
} from "../../Redux/Resumeslice";

function Education() {
  const educationRef = useRef();
  const [error, setError] = useState("");

  const resumeStoreData = useSelector((state) => state.resume);
  const dispatch = useDispatch();

  let dummyDetail = {
    degreeName: "",
    collageName: "",
    startingMonth: "",
    startingYear: "",
    endingMonth: "",
    endingYear: "",
    at: "",
  };

  const [educationDetail, setEducationDetail] = useState([
    ...resumeStoreData.Education,
  ]);

  const editEducationHandler = (index) => {
    const educationDivs = document.querySelectorAll(".education");
    Array.from(educationDivs).map((educationDiv) =>
      educationDiv.classList.remove("openEditMode")
    );
    const sidefunctions = document.querySelectorAll(".side_function");
    Array.from(sidefunctions).map((div) => (div.style.display = "none"));
    const selectedEducation = document.querySelectorAll(".education")[index];
    selectedEducation.classList.add("openEditMode");
    const sidefunction = document.querySelectorAll(".side_function")[index];
    sidefunction.style.display = "flex";
  };

  const addEducationHandler = () => {
    const educationDetailDup = [...educationDetail];
    setEducationDetail([...educationDetailDup, dummyDetail]);
  };

  const deleteEducationHandler = (index) => {
    const educationDetailDup = [...educationDetail];
    if (educationDetailDup.length === 1) {
      const errorDiv = document.querySelector(".error");
      errorDiv.style.display = "block";
      setTimeout(() => {
        errorDiv.style.display = "none";
      }, 2000);
      return setError("You Should Add Education!");
    }
    const degreeName = document.querySelectorAll(".degreeName")[index];
    const resultDetail = educationDetailDup.filter(
      (element) => element.degreeName !== degreeName.textContent
    );
    setEducationDetail([...resultDetail]);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        educationRef.current &&
        !educationRef.current.contains(event.target)
      ) {
        const educationDivs = document.querySelectorAll(".education");
        Array.from(educationDivs).map((educationDiv) =>
          educationDiv.classList.remove("openEditMode")
        );
        const sidefunction = document.querySelectorAll(".side_function");
        Array.from(sidefunction).map(
          (educationDiv) => (educationDiv.style.display = "none")
        );
        const educations = Array.from(document.querySelectorAll(".education"));
        const educationDetail = [];
        educations.forEach((education) => {
          educationDetail.push({
            degreeName: education.querySelector(".degreeName").innerText,
            collageName: education.querySelector(".collageName").innerText,
            startingMonth: education.querySelector(".startingMonth").value,
            startingYear: education.querySelector(".startingYear").value,
            endingMonth: education.querySelector(".endingMonth").value,
            endingYear: education.querySelector(".endingYear").value,
            at: education.querySelector(".cityOfProgram").value,
          });
        });
        dispatch(changeEducationDetail(educationDetail));
        console.log("Updated Education...");
      }

      const projects = Array.from(
        document.querySelectorAll(".personal_project")
      );
      const projectDetail = [];
      projects.forEach((project) => {
        const projectDetailList = [];
        const projectDetailListDivs = Array.from(
          project.querySelectorAll(".project_Detail")
        );
        projectDetailListDivs.forEach((list) => {
          projectDetailList.push(list.innerText);
        });
        projectDetail.push({
          id: Math.floor(Math.random() * 1000),
          projectName: project.querySelector(".project_title").innerText,
          projectDetail: projectDetailList,
        });
      });
      dispatch(changeProjectDetail(projectDetail));
      console.log("Updated Project Detail...");
    };
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [educationDetail, dispatch]);

  return (
    <div className="education_Container" ref={educationRef}>
      <h2 className="main_title">EDUCATION</h2>

      {educationDetail.map((singleEducation, index) => (
        <Singleeducation
          key={index}
          index={index}
          error={error}
          singleEducation={singleEducation}
          editEducationHandler={editEducationHandler}
          addEducationHandler={addEducationHandler}
          deleteEducationHandler={deleteEducationHandler}
        />
      ))}
    </div>
  );
}

export default Education;
