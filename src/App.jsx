import FormInput from "./components/FormInput";
import React, { useState } from "react";

function App() {
  const [personalDetails, setPersonalDetails] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
  });

  const personalDetailsInput = [
    {
      label: "Full Name",
      name: "fullName",
      placeholder: "Enter your full name",
      type: "text",
      id: 1,
      errorMessage:
        "Full Name Should Not Contain Any Numbers Or Special Characters. Max Limit is 25 words.",
    },
    {
      label: "Email",
      name: "email",
      placeholder: "Enter your email",
      type: "email",
      id: 2,
      errorMessage: "It Should Be A Valid Email Address. Please Try Again.",
    },
    {
      label: "Phone Number",
      name: "phoneNumber",
      placeholder: "Enter your phone number",
      type: "tel",
      id: 3,
    },
    {
      label: "Address",
      name: "address",
      placeholder: "Enter your address",
      type: "text",
      id: 4,
    },
  ];

  const onChange = (e) => {
    setPersonalDetails({ ...personalDetails, [e.target.name]: e.target.value });
  };

  console.log(personalDetails);

  return (
    <div className="flex justify-evenly min-h-screen">
      <div className="w-2/5 border p-4 bg-gray-100 min-h-screen">
        <h3 className="font-sans">Personal Details</h3>
        <form className="mt-3">
          {personalDetailsInput.map((input) => (
            <React.Fragment key={input.id}>
              <FormInput
                {...input}
                value={personalDetails[personalDetailsInput.name]}
                onChange={onChange}
                errorMessage={input.errorMessage}
              />
            </React.Fragment>
          ))}
        </form>
      </div>
      <div className="w-2/5 border p-4 bg-gray-200 min-h-screen">
        Right Side (Live Updates)
      </div>
    </div>
  );
}

export default App;
