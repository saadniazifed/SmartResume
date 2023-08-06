import React from "react";
import { educationDetailsInput } from "../../utils/personalDetailsUtils";
import FormInput from "../FormInput";
import PropTypes from "prop-types";

const EducationDetailsInput = (props) => {
  const { setInputValues, setEducationInfo, inputValues } = props;

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
    <>
      <span className="text-2xl font-semibold mt-6 block">
        Educational Details
      </span>

      <br />
      {educationDetailsInput.map((input) => (
        <React.Fragment key={input.id}>
          <FormInput
            label={input.label}
            type={input.type}
            placeholder={input.placeholder}
            value={inputValues[input.name]}
            onChange={(e) => handleInputChange(input.name, e.target.value)}
          />
        </React.Fragment>
      ))}
      <button
        onClick={handleEducationDetails}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Add Details
      </button>
    </>
  );
};

EducationDetailsInput.propTypes = {
  setInputValues: PropTypes.func.isRequired,
  setEducationInfo: PropTypes.func.isRequired,
  inputValues: PropTypes.shape({
    school: PropTypes.string.isRequired,
    titleOfStudy: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
  }).isRequired,
};

export default EducationDetailsInput;
