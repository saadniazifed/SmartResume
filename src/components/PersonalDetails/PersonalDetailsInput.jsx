import React from "react";
import { personalDetailsInput } from "../../utils/personalDetailsUtils";
import FormInput from "../FormInput";

const PersonalDetailsInput = (props) => {
  const { setPersonalDetails, personalDetails } = props;

  const onChange = (e) => {
    setPersonalDetails({
      ...personalDetails,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h3 className="font-sans">Personal Details</h3>
      <form className="mt-3">
        {personalDetailsInput.map((input) => (
          <React.Fragment key={input.id}>
            <FormInput
              {...input}
              value={personalDetails[personalDetailsInput.name]}
              onChange={onChange}
              errorMessage={input.errorMessage}
              pattern={input.pattern}
              setPersonalDetails={setPersonalDetails}
            />
          </React.Fragment>
        ))}
      </form>
    </>
  );
};

export default PersonalDetailsInput;
