import React, { useState } from "react";
import { educationDetailsInput } from "../../utils/personalDetailsUtils";
import FormInput from "../FormInput";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addEducationDetail } from "../features/educationDetails/educationDetailSlice";

const EducationDetailsInput = () => {
  const dispatch = useDispatch();

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
    if (
      inputValues.school === "" ||
      inputValues.titleOfStudy === "" ||
      inputValues.startDate === "" ||
      inputValues.endDate === ""
    ) {
      alert("Please fill all the fields");
      return;
    } else {
      dispatch(addEducationDetail({ ...inputValues }));
      setInputValues({
        school: "",
        titleOfStudy: "",
        startDate: "",
        endDate: "",
      });
    }
  };

  return (
    <form className="border bg-[#1c1c1c] rounded-xl mt-3">
      <span className="text-2xl font-semibold mt-6 mx-4 block text-white font-alfa">
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
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 mx-5 mb-5 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Add Details
      </button>
    </form>
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
