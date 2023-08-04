import React from "react";
import { personalDetailsInput } from "../../utils/personalDetailsUtils";
import FormInput from "../FormInput";
import PropTypes from "prop-types";

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
      <h3 className="text-2xl font-semibold mt-6 mb-3 block">
        Personal Details
      </h3>
      {personalDetailsInput.map((input) => (
        <React.Fragment key={input.id}>
          <FormInput
            {...input}
            value={personalDetails[personalDetailsInput.name]}
            onChange={onChange}
            setPersonalDetails={setPersonalDetails}
          />
        </React.Fragment>
      ))}
    </>
  );
};

PersonalDetailsInput.propTypes = {
  personalDetails: PropTypes.shape({
    fullName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phoneNumber: PropTypes.number.isRequired,
    address: PropTypes.string.isRequired,
  }).isRequired,
  setPersonalDetails: PropTypes.func.isRequired,
};

export default PersonalDetailsInput;
