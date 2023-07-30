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

  return (
    <div className="flex justify-evenly min-h-screen">
      <div className="w-2/5 border p-4 bg-gray-100 min-h-screen">
        <PersonalDetailsInput
          personalDetails={personalDetails}
          setPersonalDetails={setPersonalDetails}
        />
      </div>
      <div className="w-2/5 border p-4 bg-gray-200 min-h-screen">
        <RenderPersonalDetailsInput personalDetails={personalDetails} />
      </div>
    </div>
  );
}

export default App;
