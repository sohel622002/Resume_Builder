import "./App.scss";
import Header from "./components/Header/header";
import LinkModel from "./components/Model For Links/LinkModel";
import Resume from "./components/Resume/Resume";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import {
  changeContactDetail,
  changeName,
  changeRole,
  changeTagline,
} from "./Redux/Resumeslice";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const [openModel, setOpenModel] = useState(false);
  const [addModel, setAddModel] = useState(false);

  const resumeStoreData = useSelector((state) => state.resume);
  const dispatch = useDispatch();

  // const [resumeDate, setResumeData] = useState({
  //   resumerName: "sohel Shaikh",
  //   rollForApply: "FrontEnd Devloper",
  //   tageLine: "Self Taught Devloper",
  //   profileImageUrl: "",
  //   contactDetail: {
  //     envelope: "sohelshaikh01231@gmail.com",
  //     "mobile-screen-button": 8488821801,
  //     "location-dot": "Ahmedabad",
  //     linkedin: "https://www.linkedin.com/in/sohel-shaikh-0a520b191",
  //     github: "https://www.github.com/sohel622002",
  //     instagram: "",
  //     facebook: "",
  //     country: "",
  //     address: "",
  //   },
  //   Education: [
  //     {
  //       degreeName: "BSC",
  //       collageName: "Bhavans R A Collage Of Science",
  //       startingMonth: "05",
  //       startingYear: "2018",
  //       endingMonth: "05",
  //       endingYear: "2019",
  //       at: "Ahmedabad",
  //     },
  //   ],
  //   skills: ["HTML", "css", "JS"],
  //   languages: [
  //     {
  //       lang: "English",
  //       Proficiency: "Professional working Proficiency",
  //     },
  //     {
  //       lang: "Hindi",
  //       Proficiency: "Full Professional Proficiency",
  //     },
  //   ],
  //   PersonalProjects: [
  //     {
  //       id: 123,
  //       projectName: "Zylo",
  //       projectDetail: ["link for github", "teach Used", "web App"],
  //     },
  //   ],
  //   workExp: [
  //     {
  //       TilePosition: "",
  //       company: "",
  //       at: "",
  //       startingDate: "",
  //       LastDate: "",
  //       smallDisc: "",
  //     },
  //   ],
  //   achievements: [
  //     {
  //       achievementName: "",
  //       description: "",
  //     },
  //   ],
  // });

  const linksUpdaterHandler = () => {
    setOpenModel(true);
  };

  const openModelCloserHandler = (e) => {
    const backDrop = document.querySelector(".backDrop");
    if (e.target === backDrop) {
      setOpenModel(false);
      setAddModel(false);
    }
  };

  const showSocialLinks = () => {
    const element = document.querySelector(".sociallink_container");
    element.style.setProperty("--before-left", `50%`);
  };

  const showMainLinks = () => {
    const element = document.querySelector(".sociallink_container");
    element.style.setProperty("--before-left", `0%`);
  };

  const opneEditModel = () => {
    setAddModel(true);
  };

  const reciveMainLinks = (mainLinksState) => {
    dispatch(changeContactDetail(mainLinksState));
    dispatch(changeName(mainLinksState.name));
    dispatch(changeRole(mainLinksState.role));
    dispatch(changeTagline(mainLinksState.line));
    setOpenModel(false);
  };

  const openAddLinkModel = (e) => {
    e.preventDefault();
    const selObj = window.getSelection().toString();

    console.log(selObj);
  };

  const printResume = () => {
    html2canvas(document.querySelector(".Resume")).then((canvas) => {
      let base64image = canvas.toDataURL("image/png");
      let pdf = new jsPDF("p", "px", [980, 1387]);
      pdf.addImage(base64image, "PNG", 0, 0, 980, 1387);
      pdf.save("My Resume.pdf");
    });
  };

  return (
    <div className="App">
      {openModel && (
        <LinkModel
          openModelCloserHandler={(e) => openModelCloserHandler(e)}
          onDiscardClick={() => setOpenModel(!openModel)}
          showSocialLinks={showSocialLinks}
          showMainLinks={showMainLinks}
          reciveMainLinks={reciveMainLinks}
          resume={resumeStoreData}
        />
      )}
      {addModel && (
        <div className="backDrop" onClick={(e) => openModelCloserHandler(e)}>
          <div className="model">
            <div className="btn_container">
              <button className="cancel_btn">Cancel</button>
            </div>
            <div className="component_container">
              <div className="resume_components">
                <i className="fa-solid fa-plus" style={{ color: "#ffffff" }} />
                <h2 className="resume_component_title">Eucation</h2>
              </div>
            </div>
          </div>
        </div>
      )}
      <Header
        opneEditModel={opneEditModel}
        printResume={printResume}
        openAddLinkModel={openAddLinkModel}
      />
      <div className="main">
        <Resume
          linksUpdaterHandler={linksUpdaterHandler}
        />
      </div>
    </div>
  );
}

export default App;
