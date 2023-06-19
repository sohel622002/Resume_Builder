import { useState } from "react";
import "./LinkModel.scss";

function LinkModel(props) {
  const preveousData = props.resume.contactDetail;
  const [name, setName] = useState(props.resume.resumerName);
  const [role, setrole] = useState(props.resume.rollForApply);
  const [line, setLine] = useState(props.resume.tageLine);
  const [email, setEmail] = useState(preveousData.envelope);
  const [phone, setPhone] = useState(preveousData["mobile-screen-button"]);
  const [country, setCountry] = useState(preveousData.country);
  const [city, setCity] = useState(preveousData["location-dot"]);
  const [address, setAddress] = useState(preveousData.address);

  const mainLinks = { name, role, line, email, phone, country, city, address };

  const passMainLinks = () => {
    props.reciveMainLinks(mainLinks);
  };

  return (
    <div className="backDrop" onClick={props.openModelCloserHandler}>
      <div className="model">
        <div className="navigation">
          <button className="discard" onClick={props.onDiscardClick}>
            Discard
          </button>
          <button className="save" onClick={passMainLinks}>
            Save
          </button>
        </div>
        <div className="personal_Detail">
          <div className="main_contect_inputs">
            <i className="fa-solid fa-user" style={{ color: "#ffffff" }}></i>
            <div>
              <label>Name</label>
              <input
                name="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="main_contect_inputs">
            <i className="fa-solid fa-laptop" style={{ color: "#ffffff" }}></i>
            <div>
              <label>Role</label>
              <input
                name="role"
                type="text"
                value={role}
                onChange={(e) => setrole(e.target.value)}
              />
            </div>
          </div>
          <div className="main_contect_inputs">
            <i className="fa-solid fa-pen" style={{ color: "#ffffff" }}></i>
            <div>
              <label>Role</label>
              <input
                name="role"
                type="text"
                value={line}
                onChange={(e) => setLine(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="secondary_navigation">
          <div className="sociallink_container">
            <div
              className="socialLinks main_contact"
              onClick={props.showMainLinks}
            >
              Main Contact
            </div>
            <div className="socialLinks social" onClick={props.showSocialLinks}>
              Social
            </div>
          </div>
        </div>
        <div className="main_Link_Container">
          <div className="main_contect_inputs">
            <i
              className="fa-solid fa-envelope"
              style={{ color: "#ffffff" }}
            ></i>
            <div>
              <label>Email</label>
              <input
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="main_contect_inputs">
            <i
              className="fa-solid fa-mobile-button"
              style={{ color: "#ffffff" }}
            />
            <div>
              <label>Phone</label>
              <input
                name="phone"
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
          <div className="main_contect_inputs">
            <i className="fa-solid fa-globe" style={{ color: "#ffffff" }} />
            <div>
              <label>Country</label>
              <input
                name="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
          </div>
          <div className="main_contect_inputs">
            <i className="fa-solid fa-city" style={{ color: "#ffffff" }} />
            <div>
              <label>City</label>
              <input
                name="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
          </div>
          <div className="main_contect_inputs">
            <i
              className="fa-solid fa-location-dot"
              style={{ color: "#ffffff" }}
            />
            <div>
              <label>Address</label>
              <input
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LinkModel;
