import React, { useState } from "react";
import PersonalDetailsInput from "./components/PersonalDetails/PersonalDetailsInput";
import RenderPersonalDetailsInput from "./components/PersonalDetails/RenderPersonalDetailsInput";
import EducationDetailsInput from "./components/EducationDetails/EducationDetailsInput";
import RenderEducationDetails from "./components/EducationDetails/RenderEducationDetails";
import WorkExperienceInput from "./components/WorkExperience/WorkExperienceInput";
import RenderWorkExperience from "./components/WorkExperience/RenderWorkExperience";
import HobbiesInput from "./components/Hobbies/HobbiesInput";
import RenderHobbies from "./components/Hobbies/RenderHobbies";

function App() {
  const [personalDetails, setPersonalDetails] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
    smallDescription: "",
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

  const [avatarImage, setAvatarImage] = useState(
    "https://placekitten.com/250/250"
  );

  return (
    <div className="flex justify-evenly min-h-screen">
      <div className="w-2/5 border p-4 bg-gray-100 min-h-screen">
        <form>
          <PersonalDetailsInput
            personalDetails={personalDetails}
            setPersonalDetails={setPersonalDetails}
            setAvatarImage={setAvatarImage}
            avatarImage={avatarImage}
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

          <HobbiesInput
            setHobbiesInput={setHobbiesInput}
            hobbiesInput={hobbiesInput}
            setHobbies={setHobbies}
            hobbies={hobbies}
          />
        </form>
      </div>
      <div className="w-2/5 border p-4 bg-gray-200 min-h-screen">
        <RenderPersonalDetailsInput
          personalDetails={personalDetails}
          avatarImage={avatarImage}
        />
        <RenderEducationDetails educationInfo={educationInfo} />
        <RenderWorkExperience workExperience={workExperience} />
        <RenderHobbies hobbies={hobbies} />
      </div>
    </div>
  );
}

export default App;
