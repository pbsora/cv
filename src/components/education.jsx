export default function Education({
  school,
  degree,
  startDate,
  endDate,
  edLocation,
}) {
  return (
    <div className="education">
      <h2>Education</h2>
      <br />
      <div className="ed-info">
        <div className="education-date">
          <p className="ed-duration">
            {startDate == "" ? "2018" : startDate} -{" "}
            {endDate == "" ? "Present" : endDate}
          </p>
          <p className="ed-location">
            {edLocation == "" ? "Belo Horizonte - MG" : edLocation}
          </p>
        </div>

        <div className="education-school">
          <p className="school">{school == "" ? "Cotemig" : school}</p>
          <p className="type">{degree == "" ? "Tech school" : degree}</p>
        </div>
      </div>
    </div>
  );
}
