import Personal from "./personal";
import Title from "./title";
import Education from "./education";
import Experience from "./experience";
import EducationInput from "./educationInput";
import ExperienceInput from "./experienceInput";
import { useState } from "react";

function Content() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  //Education tab
  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [edLocation, setEdLocation] = useState("");
  //Experience tab
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [exStartDate, setExStartDate] = useState("");
  const [exEndDate, setExEndDate] = useState("");
  const [exLocation, setExLocation] = useState("");
  const [description, setDescription] = useState("");

  return (
    <main>
      <div className="info">
        <Personal
          handleName={(e) => setName(e.target.value)}
          name={name}
          handleEmail={(e) => setEmail(e.target.value)}
          email={email}
          handlePhone={(e) => setPhone(e.target.value)}
          phone={phone}
          handleAddress={(e) => setAddress(e.target.value)}
          address={address}
        />
        <EducationInput
          handleSchool={(e) => setSchool(e.target.value)}
          school={school}
          handleDegree={(e) => setDegree(e.target.value)}
          degree={degree}
          handleStartDate={(e) => setStartDate(e.target.value)}
          startDate={startDate}
          handleEndDate={(e) => setEndDate(e.target.value)}
          endDate={endDate}
          handleEdLocation={(e) => setEdLocation(e.target.value)}
          edLocation={edLocation}
        />
        <ExperienceInput
          handleCompany={(e) => setCompany(e.target.value)}
          company={company}
          handleRole={(e) => setRole(e.target.value)}
          role={role}
          handleExStartDate={(e) => setExStartDate(e.target.value)}
          exStartDate={exStartDate}
          handleExEndDate={(e) => setExEndDate(e.target.value)}
          exEndDate={exEndDate}
          handleExLocation={(e) => setExLocation(e.target.value)}
          exLocation={exLocation}
          handleDescription={(e) => setDescription(e.target.value)}
          description={description}
        />
      </div>
      <div className="cv">
        <Title name={name} email={email} phone={phone} address={address} />
        <div className="cv-body">
          <Education
            school={school}
            degree={degree}
            startDate={startDate}
            endDate={endDate}
            edLocation={edLocation}
          />
          <Experience
            company={company}
            role={role}
            exStartDate={exStartDate}
            exEndDate={exEndDate}
            exLocation={exLocation}
            description={description}
          />
        </div>
      </div>
    </main>
  );
}

export default Content;
