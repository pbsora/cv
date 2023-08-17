export default function Experience({
  company,
  role,
  exStartDate,
  exEndDate,
  exLocation,
  description,
}) {
  return (
    <div className="experience">
      <h2>Experience</h2>
      <br />
      <div className="ex-info">
        <div className="experience-date">
          <p className="ex-duration">
            {exStartDate == "" ? "2018" : exStartDate} -{" "}
            {exEndDate == "" ? "Present" : exEndDate}
          </p>
          <p className="ex-location">
            {exLocation == "" ? "New York - NY" : exLocation}
          </p>
        </div>

        <div className="experience-school">
          <p className="company">{company == "" ? "Twitter" : company}</p>
          <p className="role">{role == "" ? "Fullstack Developer" : role}</p>
        </div>
      </div>
      <p className="role-description">
        {description == ""
          ? "Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android"
          : description}
      </p>
    </div>
  );
}
