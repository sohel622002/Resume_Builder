import { useState } from "react";
import EditableDiv from "../Editablediv/Editablediv";

function Singleeducation({
  index,
  error,
  singleEducation,
  editEducationHandler,
  addEducationHandler,
  deleteEducationHandler,
  sendData,
}) {
  const [startingMonth, setStartingMonth] = useState(
    singleEducation.startingMonth
  );
  const [startingYear, setStartingYear] = useState(
    singleEducation.startingYear
  );
  const [endingMonth, setEndingMonth] = useState(singleEducation.endingMonth);
  const [endingYear, setEndingYear] = useState(singleEducation.endingYear);
  const [cityProgram, setCityProgram] = useState(singleEducation.at);

  return (
    <div className="education" onClick={() => editEducationHandler(index)}>
      <div className="side_function">
        <i
          className="fa-solid fa-circle-plus"
          style={{ color: "#ffffff" }}
          onClick={addEducationHandler}
        />
        <i
          className="fa-solid fa-trash-can"
          style={{ color: "#ffffff" }}
          onClick={() => deleteEducationHandler(index)}
        />
        <div className="error">{error}</div>
      </div>
      
      <EditableDiv
        classes="studyProgram degreeName"
        fieldName="Study Program"
        fieldvalue={singleEducation.degreeName}
      />
      <EditableDiv
        classes="collageName placeOfEducation"
        fieldName="Place Of Education"
        fieldvalue={singleEducation.collageName}
      />

      <div className="dates">
        <div className="education_dates">
          <input
            placeholder="mm"
            className="programDate day startingMonth"
            maxLength="2"
            value={startingMonth}
            onChange={(e) => setStartingMonth(e.target.value)}
          />

          <span className="date_span">/</span>

          <input
            placeholder="yyyy"
            className="programDate startingYear"
            maxLength="4"
            value={startingYear}
            onChange={(e) => setStartingYear(e.target.value)}
          />

          <span className="date_span">-</span>

          <input
            placeholder="mm"
            className="programDate day endingMonth"
            maxLength="2"
            value={endingMonth}
            onChange={(e) => setEndingMonth(e.target.value)}
          />

          <span className="date_span">/</span>

          <input
            placeholder="yyyy"
            className="programDate endingYear"
            maxLength="4"
            value={endingYear}
            onChange={(e) => setEndingYear(e.target.value)}
          />
        </div>
        <div className="cityOfProgram">
          <input
            placeholder="City Or Country"
            className="at"
            value={cityProgram}
            onChange={(e) => setCityProgram(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default Singleeducation;
