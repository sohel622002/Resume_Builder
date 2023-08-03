import "./header.scss";

function Header(props) {
  return (
    <div className="header">
      <h2>ResumeBuilder</h2>
      <div className="headerFunc">
        <div className="font">Font</div>
        <div className="addBtn" onClick={props.opneEditModel}>
          Add
        </div>
        <div className="linkBtn" onClick={props.openAddLinkModel}>
          Link
        </div>
      </div>
      <button className="download_btn" onClick={props.printResume}>
        Download
      </button>
    </div>
  );
}

export default Header;
