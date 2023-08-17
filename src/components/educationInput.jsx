import { useState } from "react";
import Arrow from "../assets/arrow.svg";

export default function EducationInput({
  handleSchool,
  school,
  handleDegree,
  degree,
  handleStartDate,
  handleEndDate,
  startDate,
  endDate,
  handleEdLocation,
  edLocation,
}) {
  const [tab, setTab] = useState(false);

  return (
    <div className="education-input">
      <div onClick={() => setTab(!tab)}>
        <h1>Education</h1>
        <img src={Arrow} className="arrow" />
      </div>

      {tab && (
        <div className="ed-input">
          <label htmlFor="school">School</label>
          <input
            type="text"
            name="school"
            id="school"
            placeholder="School"
            onChange={handleSchool}
            value={school}
          />
          <label htmlFor="degree">Degree</label>
          <input
            type="text"
            name="degree"
            id="degree"
            placeholder="Degree"
            onChange={handleDegree}
            value={degree}
          />
          <div className="date">
            <div>
              <label htmlFor="start-date">Start date</label>
              <input
                type="text"
                name="start-date"
                id="start-date"
                placeholder="Enter start date"
                onChange={handleStartDate}
                value={startDate}
              />
            </div>
            <div>
              <label htmlFor="end-date">End Date</label>
              <input
                type="text"
                name="end-date"
                id="end-date"
                placeholder="Enter end date"
                onChange={handleEndDate}
                value={endDate}
              />
            </div>
          </div>
          <label htmlFor="location">Location</label>
          <input
            type="text"
            name="location"
            id="location"
            placeholder="Location"
            onChange={handleEdLocation}
            value={edLocation}
          />
        </div>
      )}
    </div>
  );
}
