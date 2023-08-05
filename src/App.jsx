import { useState } from "react";
import PersonalDetailsInput from "./components/PersonalDetails/PersonalDetailsInput";
import RenderPersonalDetailsInput from "./components/PersonalDetails/RenderPersonalDetailsInput";
import EducationDetailsInput from "./components/EducationDetails/EducationDetailsInput";
import RenderEducationDetails from "./components/EducationDetails/RenderEducationDetails";
import WorkExperienceInput from "./components/WorkExperience/WorkExperienceInput";
import RenderWorkExperience from "./components/WorkExperience/RenderWorkExperience";

function App() {
  const [personalDetails, setPersonalDetails] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
  });

  const [educationInfo, setEducationInfo] = useState([
    {
      school: "",
      titleOfStudy: "",
      startDate: "",
      endDate: "",
    },
  ]);

  const [inputValues, setInputValues] = useState({
    school: "",
    titleOfStudy: "",
    startDate: "",
    endDate: "",
  });

  const [workExperience, setWorkExperience] = useState([
    {
      company: "",
      jobTitle: "",
      startDate: "",
      endDate: "",
    },
  ]);

  const [workInput, setWorkInput] = useState({
    company: "",
    jobTitle: "",
    startDate: "",
    endDate: "",
  });

  const [hobbies, setHobbies] = useState([
    {
      hobbies: "",
    },
  ]);

  const [hobbiesInput, setHobbiesInput] = useState({
    hobbies: "",
  });

  const handleHobbiesInputChange = (e) => {
    setHobbiesInput({ ...hobbiesInput, [e.target.name]: e.target.value });
  };

  const handleAddHobby = () => {
    setHobbies([...hobbies, hobbiesInput]);
    setHobbiesInput({ hobby: "" });
  };

  return (
    <div className="flex justify-evenly min-h-screen">
      <div className="w-2/5 border p-4 bg-gray-100 min-h-screen">
        <form>
          <PersonalDetailsInput
            personalDetails={personalDetails}
            setPersonalDetails={setPersonalDetails}
          />
          <EducationDetailsInput
            setInputValues={setInputValues}
            setEducationInfo={setEducationInfo}
            inputValues={inputValues}
            educationInfo={educationInfo}
          />
          <WorkExperienceInput
            workInput={workInput}
            setWorkInput={setWorkInput}
            setWorkExperience={setWorkExperience}
          />
          <br />
          <span>Enter Hobbies</span>
          <input
            type="text"
            name="hobby"
            value={hobbiesInput.hobby}
            onChange={handleHobbiesInputChange}
            placeholder="Enter a hobby"
          />
          <button onClick={handleAddHobby}>Add</button>{" "}
        </form>
      </div>
      <div className="w-2/5 border p-4 bg-gray-200 min-h-screen">
        <RenderPersonalDetailsInput personalDetails={personalDetails} />
        <RenderEducationDetails educationInfo={educationInfo} />
        <RenderWorkExperience workExperience={workExperience} />
        <span>Hobbies:</span>
        <ul>
          {hobbies?.map((hobby, index) => (
            <li key={index}>{hobby.hobby}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
