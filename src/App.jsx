import { useState } from "react";
import PersonalDetailsInput from "./components/PersonalDetails/PersonalDetailsInput";
import RenderPersonalDetailsInput from "./components/PersonalDetails/RenderPersonalDetailsInput";
import EducationDetailsInput from "./components/EducationDetails/EducationDetailsInput";
import WorkExperienceInput from "./components/WorkExperience/WorkExperienceInput";
import HobbiesInput from "./components/Hobbies/HobbiesInput";
import RenderDetails from "./components/RenderDetails/RenderDetails";
import "./assets/style.css";

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
    <div className="flex justify-evenly min-h-screen bg-black">
      <div className="w-full md:w-1/2 lg:w-1/3  p-4 min-h-screen">
        <>
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
        </>
      </div>
      <div
        className="w-full relative mt-5 rounded-[45px]  mb-5 md:w-1/2 lg:w-2/3 custom-gradient box-shadow  mx-5  p-4 custom-gradient  min-h-screen shadow-md"
        style={{
          boxShadow: "0 5px 15px #5c360d,0 -5px 30px #5c360d",
        }}
      >
        <RenderPersonalDetailsInput
          personalDetails={personalDetails}
          avatarImage={avatarImage}
        />
        <hr className="mb-5" />
        <RenderDetails details={educationInfo} title="Education Details" />
        <hr className="mb-5 mt-5" />
        <RenderDetails details={workExperience} title="Work Experience" />
        <hr className="mb-5 mt-5" />
        <RenderDetails details={hobbies} title="Hobbies" />
      </div>
    </div>
  );
}

export default App;
