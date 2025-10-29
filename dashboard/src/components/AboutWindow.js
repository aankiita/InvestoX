import React, { useContext } from "react";
import { Link } from "react-router-dom";
import GeneralContext from "./GeneralContext";
import { about } from "../data/about";
import "./BuyActionWindow.css"; 

const AboutWindow = ({ uid }) => {
  const { closeAboutWindow } = useContext(GeneralContext);

  const company = about.find((item) => item.name === uid);


  if (!company) {
    return (
      <div className="container" id="about-window" draggable="true">
        <h3>No about information found for {uid}</h3>
        <Link to="" className="btn btn-grey" onClick={closeAboutWindow}>
          Close
        </Link>
      </div>
    );
  }

  return (
    <div
      className="container"
      id="about-window"
      draggable="true">
      <h2>{company.name}</h2>
      <h5>Company Overview</h5>

      <div className="regular-order">
        <div className="inputs">
          {Object.entries(company.about).map(([key, value]) =>
            key !== "Description" ? (
              <fieldset key={key}>
                <legend>{key}</legend>
                <input type="text" value={value} readOnly />
              </fieldset>
            ) : null
          )}
        </div>
         <div className="description">
            <p>{company.about.Description}</p>
        </div>
      </div>

      <div className="buttons">
        <Link
          to=""
          className="btn btn-grey"
          onClick={closeAboutWindow}>
          Close
        </Link>
      </div>
    </div>
  );
};

export default AboutWindow;
