import { useState } from "react";
import PersonalDetailsInput from "./components/PersonalDetails/PersonalDetailsInput";
import RenderPersonalDetailsInput from "./components/PersonalDetails/RenderPersonalDetailsInput";
import EducationDetailsInput from "./components/EducationDetails/EducationDetailsInput";

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
        </form>
      </div>
      <div className="w-2/5 border p-4 bg-gray-200 min-h-screen">
        <RenderPersonalDetailsInput personalDetails={personalDetails} />

        {educationInfo.length > 0
          ? educationInfo.map((info, index) => (
              <div key={index}>
                {info.school && <p>School: {info.school}</p>}
                {info.titleOfStudy && (
                  <p>Title of Study: {info.titleOfStudy}</p>
                )}
                {info.startDate && <p>Start Date: {info.startDate}</p>}
                {info.endDate && <p>End Date: {info.endDate}</p>}
                <hr />
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default App;
