import IndividualLinks from "../IndividualLinks/IndividualLinks";
import "./Resume.scss";
import Education from "../Education/Education";
import Personalprojects from "../Personal Projects/Personalprojects";
import Skills from "../Skills/Skills";

import { useSelector } from "react-redux";
import Languages from "../Languages/Languages";

const Resume = ({ linksUpdaterHandler }) => {
  const resumeStoreData = useSelector((state) => state.resume);

  return (
    <div className="Resume">
      <div className="Resume_Header">
        <div className="Personal_Detail">
          <h1>{resumeStoreData.resumerName}</h1>
          <h3>{resumeStoreData.rollForApply}</h3>
          <h4>{resumeStoreData.tageLine}</h4>
        </div>
        <div className="Image"></div>
      </div>

      {/* Personal Links */}

      <div className="Personal_Links" onClick={linksUpdaterHandler}>
        {Object.entries(resumeStoreData.contactDetail).map(([key, value]) => {
          if (value && key !== "address" && key !== "country") {
            return (
              <IndividualLinks
                info={
                  ["github", "linkedin", "instagram", "facebook"].includes(key)
                    ? "brands"
                    : "solid"
                }
                type={key}
                link={
                  ["github", "linkedin", "instagram", "facebook"].includes(key)
                    ? value.replace("https://www.", "")
                    : value
                }
                key={key}
              />
            );
          }
        })}
      </div>

      {/* <div className="Personal_Links" onClick={linksUpdaterHandler}>
        {Object.entries(resumeStoreData.contactDetail).map(
          ([key, value]) =>
            value &&
            !((key === "address") | (key === "country")) &&
            ((key === "github") |
            (key === "linkedin") |
            (key === "instagram") |
            (key === "facebook") ? (
              <IndividualLinks
                info="brands"
                type={key}
                link={value.replace("https://www.", "")}
                key={key}
              />
            ) : (
              <IndividualLinks info="solid" type={key} link={value} key={key} />
            ))
        )}
      </div> */}

      <div className="main_section">
        <div>
          <Education />
          <Personalprojects
            personalprojects={resumeStoreData.PersonalProjects}
          />
        </div>
        <div>
          <Skills skills={resumeStoreData.skills} />
          <Languages />
        </div>
      </div>
    </div>
  );
};

export default Resume;
