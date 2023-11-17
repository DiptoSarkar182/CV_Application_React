import { useState } from "react";
import PropTypes from "prop-types";

function Educational_Experience({
  sendSchoolName,
  sendTitleOfStudy,
  sendStartDate,
  sendEndDate,
}) {
  const [schoolName, setSchoolName] = useState("");
  const [titleOfStudy, setTitleOfStudy] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [showEditButton, setShowEditButton] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    sendSchoolName(schoolName);
    sendTitleOfStudy(titleOfStudy);
    sendStartDate(startDate);
    sendEndDate(endDate);
    setShowEditButton(!showEditButton);
  };

  return showEditButton ? (
    <div className="setShowEditButton">
      <h2>Edit Education Info</h2>
      <button onClick={() => setShowEditButton(!showEditButton)}>Edit</button>
    </div>
  ) : (
    <div className="takeInfo">
      <form onSubmit={handleFormSubmit}>
        <h2>Education Info</h2>

        <label className="label">
          School Name:{" "}
          <input
            className="inputArea"
            value={schoolName}
            onChange={(e) => {
              setSchoolName(e.target.value);
            }}
          ></input>
        </label>

        <label className="label">
          Title Of Study:{" "}
          <input
            className="inputArea"
            value={titleOfStudy}
            onChange={(e) => {
              setTitleOfStudy(e.target.value);
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
export default Educational_Experience;

Educational_Experience.propTypes = {
  sendSchoolName: PropTypes.func.isRequired,
  sendTitleOfStudy: PropTypes.func.isRequired,
  sendStartDate: PropTypes.func.isRequired,
  sendEndDate: PropTypes.func.isRequired,
};
