import { useState } from "react";
import PropTypes from "prop-types";

function Practical_Experience({
  sendCompanyName,
  sendTitleOfPosition,
  sendResponsibilities,
  sendStartDate,
  sendEndDate,
}) {
  const [companyName, setCompanyName] = useState("");
  const [titleOfPosition, setTitleOfPosition] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [showEditButton, setShowEditButton] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    sendCompanyName(companyName);
    sendTitleOfPosition(titleOfPosition);
    sendResponsibilities(responsibilities);
    sendStartDate(startDate);
    sendEndDate(endDate);
    setShowEditButton(!showEditButton);
  };

  return showEditButton ? (
    <div className="setShowEditButton">
      <h2>Edit Experience</h2>
      <button onClick={() => setShowEditButton(!showEditButton)}>Edit</button>
    </div>
  ) : (
    <div className="takeInfo">
      <form onSubmit={handleFormSubmit}>
        <h2>Experience</h2>

        <label className="label">
          Company Name:{" "}
          <input
            className="inputArea"
            value={companyName}
            onChange={(e) => {
              setCompanyName(e.target.value);
            }}
          ></input>
        </label>

        <label className="label">
          Title Of Position:{" "}
          <input
            className="inputArea"
            value={titleOfPosition}
            onChange={(e) => {
              setTitleOfPosition(e.target.value);
            }}
          ></input>
        </label>

        <label className="label">
          Responsibilities:{" "}
          <input
            className="inputArea"
            value={responsibilities}
            onChange={(e) => {
              setResponsibilities(e.target.value);
            }}
          ></input>
        </label>

        <label className="label">
          Start Date:{" "}
          <input
            className="inputArea"
            type="date"
            value={startDate}
            onChange={(e) => {
              setStartDate(e.target.value);
            }}
          ></input>
        </label>

        <label className="label">
          End Date:{" "}
          <input
            className="inputArea"
            type="date"
            value={endDate}
            onChange={(e) => {
              setEndDate(e.target.value);
            }}
          ></input>
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Practical_Experience;

Practical_Experience.propTypes = {
  sendCompanyName: PropTypes.func.isRequired,
  sendTitleOfPosition: PropTypes.func.isRequired,
  sendResponsibilities: PropTypes.func.isRequired,
  sendStartDate: PropTypes.func.isRequired,
  sendEndDate: PropTypes.func.isRequired,
};
