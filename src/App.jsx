import { useState } from "react";
import PersonalDetailsInput from "./components/PersonalDetails/PersonalDetailsInput";
import RenderPersonalDetailsInput from "./components/PersonalDetails/RenderPersonalDetailsInput";

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

  const handleInputChange = (field, value) => {
    setInputValues((prevValues) => ({ ...prevValues, [field]: value }));
  };

  const handleEducationDetails = (e) => {
    e.preventDefault();
    setEducationInfo((prevInfo) => [...prevInfo, { ...inputValues }]);
    setInputValues({
      school: "",
      titleOfStudy: "",
      startDate: "",
      endDate: "",
    });
  };

  return (
    <div className="flex justify-evenly min-h-screen">
      <div className="w-2/5 border p-4 bg-gray-100 min-h-screen">
        <form>
          <PersonalDetailsInput
            personalDetails={personalDetails}
            setPersonalDetails={setPersonalDetails}
          />
          <span>Educational Details</span>
          <br />
          <label>School</label>
          <input
            type="text"
            placeholder="school"
            value={inputValues.school}
            onChange={(e) => handleInputChange("school", e.target.value)}
          />
          <br />
          <label>Title of Study</label>
          <input
            type="text"
            placeholder="Title of Study"
            value={inputValues.titleOfStudy}
            onChange={(e) => handleInputChange("titleOfStudy", e.target.value)}
          />
          <br />
          <label>Start Date</label>
          <input
            type="date"
            placeholder="Start Date"
            value={inputValues.startDate}
            onChange={(e) => handleInputChange("startDate", e.target.value)}
          />
          <br />
          <label>End Date</label>
          <input
            type="date"
            placeholder="End Date"
            value={inputValues.endDate}
            onChange={(e) => handleInputChange("endDate", e.target.value)}
          />
          <button onClick={handleEducationDetails}>Add Details</button>
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
