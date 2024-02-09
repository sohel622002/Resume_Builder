import { useState } from "react";
import { useSelector } from "react-redux";

import "./Intrest.scss";

function SingleIntrest({ intrest, setAddIntrest }) {
  const [name, setName] = useState(intrest);

  function updateName(e) {
    if (e.target.value) {
      setName(e.target.value);
    }
  }

  function openIntrestAddingFunc(){
    setAddIntrest(true)
    window.addEventListener("click", function hideIntrestButton(e) {
      let targetElement = this.document.querySelector(".Intrest-container");
      if (targetElement && !targetElement.contains(e.target)) {
        setAddIntrest(false);
        setTimeout(() => {
          window.removeEventListener("click", hideIntrestButton)
        }, 1000);
      }
    });
  }
  
  return (
    <div
      className="intrest"
      onFocus={openIntrestAddingFunc}
      onBlur={updateName}
      contentEditable
      suppressContentEditableWarning
      spellCheck="false"
    >
      {name}
    </div>
  );
}

function Intrest() {
  const intrests = useSelector((state) => state.resume.intrest);
  const [intrestsMap, setIntrestsMap] = useState([...intrests]);
  const [addIntrest, setAddIntrest] = useState(false);

  function addIntrestListner() {
    setIntrestsMap([...intrestsMap, ""]);
    setAddIntrest(false);
  }

  return (
    <div>
      <h2 className="main_title">Intrest</h2>
      <div className="Intrest-container">
        {intrestsMap.map((intr, index) => (
          <SingleIntrest
            key={index}
            intrest={intr}
            setAddIntrest={setAddIntrest}
          />
        ))}
      </div>
      {addIntrest ? (
        <div className="intrest-add-function">
          <span onClick={addIntrestListner} className="add-intrest-button">
            <i className="fa-solid fa-circle-plus" />
          </span>
          <span className="line"></span>
        </div>
      ) : null}
    </div>
  );
}

export default Intrest;
