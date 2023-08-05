import React from "react";
import { educationDetailsInput } from "../../utils/personalDetailsUtils";
import FormInput from "../FormInput";
import PropTypes from "prop-types";

const EducationInputForm = (props) => {
  const { inputValues, handleInputChange } = props;
  return (
    <>
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
    </>
  );
};

EducationInputForm.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  inputValues: PropTypes.shape({
    school: PropTypes.string.isRequired,
    titleOfStudy: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
  }).isRequired,
};

export default EducationInputForm;
