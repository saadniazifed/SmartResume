import { useState } from "react";
import PersonalDetailsInput from "./components/PersonalDetails/PersonalDetailsInput";
import RenderPersonalDetailsInput from "./components/PersonalDetails/RenderPersonalDetailsInput";
import EducationDetailsInput from "./components/EducationDetails/EducationDetailsInput";
import WorkExperienceInput from "./components/WorkExperience/WorkExperienceInput";
import HobbiesInput from "./components/Hobbies/HobbiesInput";
import RenderDetails from "./components/RenderDetails/RenderDetails";
import "./assets/style.css";
import { useSelector } from "react-redux";

function App() {
  const educationInfo = useSelector((state) => state.educationDetails);
  const workExperience = useSelector((state) => state.workDetails);
  const hobbies = useSelector((state) => state.hobbyDetails);
  const [avatarImage, setAvatarImage] = useState(
    "https://placekitten.com/250/250"
  );

  return (
    <div className="flex justify-evenly min-h-screen bg-black">
      <div className="w-full md:w-1/2 lg:w-1/3  p-4 min-h-screen">
        <>
          <PersonalDetailsInput
            setAvatarImage={setAvatarImage}
            avatarImage={avatarImage}
          />
          <EducationDetailsInput />
          <WorkExperienceInput />
          <HobbiesInput />
        </>
      </div>
      <div
        className="w-full relative mt-5 rounded-[45px]  mb-5 md:w-1/2 lg:w-2/3 custom-gradient box-shadow  mx-5  p-4 custom-gradient  min-h-screen shadow-md"
        style={{
          boxShadow: "0 5px 15px #5c360d,0 -5px 30px #5c360d",
        }}
      >
        <RenderPersonalDetailsInput avatarImage={avatarImage} />
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
