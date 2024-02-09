import { useState } from "react";
import "./Languages.scss";
import { useSelector } from "react-redux";

//Language Prof Box >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function LanguageProf({ lang, level, profLevel, clickListner }) {
  return (
    <span
      language={lang}
      className={level == profLevel ? "selectedProf" : undefined}
      profvalue={profLevel}
      onClick={clickListner}
    >
      {profLevel}/5
    </span>
  );
}

//Single Education Function >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function SingleLanguage({ lang, prof, levelValue }) {
  const languageProfeciency = [
    "Elementary Proficiency",
    "Limited Working Proficiency",
    "Professional Working Proficiency",
    "Full Professional Proficiency",
    "Native or Bilingual Proficiency",
  ];
  const [language, setLanguage] = useState(lang);
  const [languageProf, setLanguageProf] = useState(prof);
  const [openLangBox, setOpenLangBox] = useState(false);
  const [level, setLevel] = useState(levelValue);

  function contentBlur(e) {
    console.log("Blur");
    if (!e.target.value === "") {
      setLanguage(e.target.value);
    }
  }

  function selectLanguage(e) {
    let target = e.target;
    let language = target.getAttribute("language");
    let level = target.getAttribute("profvalue");
    setLevel(level);
    setLanguageProf(language);
    setOpenLangBox(false);
  }

  function openLangBoxHandler() {
    setOpenLangBox(true);

    setTimeout(() => window.addEventListener("click", opneLangHandler));
    function opneLangHandler(e) {
      let targetElement = document.querySelector(".language-prof-box");
      if (!targetElement?.contains(e.target)) {
        setOpenLangBox(false);
        window.removeEventListener("click", opneLangHandler);
      }
    }
  }

  return (
    <div className="language-container">
      <h4
        className="language"
        contentEditable
        suppressContentEditableWarning
        spellCheck="false"
        onBlur={contentBlur}
      >
        {language}
      </h4>
      <h4 className="language-prof" onClick={openLangBoxHandler}>
        {languageProf}
      </h4>
      {openLangBox ? (
        <div className="language-prof-box">
          {languageProfeciency.map((lang, index) => (
            <LanguageProf
              lang={lang}
              level={level}
              profLevel={index + 1}
              clickListner={selectLanguage}
              key={index}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}

//Main Languages container >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function Languages() {
  const languagesData = useSelector((state) => state.resume.languages);

  return (
    <div className="language-div">
      <h2 className="main_title">Languages</h2>
      <div className="all-languages">
        {languagesData.map((lan) => (
          <SingleLanguage
            lang={lan.lang}
            prof={lan.Proficiency}
            levelValue={lan.level}
            key={lan.lang}
          />
        ))}
      </div>
    </div>
  );
}

export default Languages;
