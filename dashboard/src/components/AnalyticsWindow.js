import React, { useContext } from "react";
import { Link } from "react-router-dom";
import GeneralContext from "./GeneralContext";
import { fundamentals } from "../data/fundamentals"; // ✅ import your fundamentals data
import "./BuyActionWindow.css"; // same styling as Buy window

const AnalyticsWindow = ({ uid }) => {
  const { closeAnalyticsWindow } = useContext(GeneralContext);

  // Find company data from fundamentals list
  const company = fundamentals.find((item) => item.name === uid);

  if (!company) {
    return (
      <div className="container" id="analytics-window" draggable="true">
        <h3>No analytics data found for {uid}</h3>
        <Link to="" className="btn btn-grey" onClick={closeAnalyticsWindow}>
          Close
        </Link>
      </div>
    );
  }

  return (
    <div className="container" id="analytics-window" draggable="true">
      <h2>{company.name} –</h2>
      <h5 style={{ textAlign: "center" }}>Company Analytics</h5>


      <div className="regular-order">
        <div className="inputs">
          {Object.entries(company.fundamentals).map(([key, value]) => (
            <fieldset key={key}>
              <legend>{key}</legend>
              <input type="text" value={value} readOnly />
            </fieldset>
          ))}
        </div>
      </div>

      <div className="buttons">
        <span> Showing all key financial ratios</span>
        <div>
          <Link to="" className="btn btn-grey" onClick={closeAnalyticsWindow}>
            Close
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsWindow;
