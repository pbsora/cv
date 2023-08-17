import { useState } from "react";
import Arrow from "../assets/arrow.svg";

export default function ExperienceInput({
  handleCompany,
  company,
  handleRole,
  role,
  handleExStartDate,
  handleExEndDate,
  exStartDate,
  exEndDate,
  handleExLocation,
  exLocation,
  handleDescription,
  description,
}) {
  const [tab, setTab] = useState(false);

  return (
    <div className="education-input">
      <div onClick={() => setTab(!tab)}>
        <h1>Experience</h1>
        <img src={Arrow} className="arrow" />
      </div>

      {tab && (
        <div className="ed-input">
          <label htmlFor="company">Company Name</label>
          <input
            type="text"
            name="company"
            id="company"
            placeholder="Company Name"
            onChange={handleCompany}
            value={company}
          />
          <label htmlFor="position">Position</label>
          <input
            type="text"
            name="position"
            id="position"
            placeholder="Position"
            onChange={handleRole}
            value={role}
          />
          <div className="date">
            <div>
              <label htmlFor="start-date">Start date</label>
              <input
                type="text"
                name="start-date"
                id="start-date"
                placeholder="Enter start date"
                onChange={handleExStartDate}
                value={exStartDate}
              />
            </div>
            <div>
              <label htmlFor="end-date">End Date</label>
              <input
                type="text"
                name="end-date"
                id="end-date"
                placeholder="Enter end date"
                onChange={handleExEndDate}
                value={exEndDate}
              />
            </div>
          </div>
          <label htmlFor="location">Location</label>
          <input
            type="text"
            name="location"
            id="location"
            placeholder="Location"
            onChange={handleExLocation}
            value={exLocation}
          />
          <label htmlFor="description">Description</label>
          <input
            type="textarea"
            name="description"
            id="description"
            placeholder="Description"
            onChange={handleDescription}
            value={description}
          />
        </div>
      )}
    </div>
  );
}
