import React from "react";
import { workExperienceDetailsInput } from "../../utils/personalDetailsUtils";
import FormInput from "../FormInput";

const WorkExperienceInputMap = (props) => {
  const { workInput, handleWorkInput } = props;
  return (
    <>
      {workExperienceDetailsInput.map((input) => (
        <React.Fragment key={input.id}>
          <FormInput
            label={input.label}
            type={input.type}
            placeholder={input.placeholder}
            value={workInput[input.name]}
            onChange={(e) => handleWorkInput(input.name, e.target.value)}
          />
        </React.Fragment>
      ))}
    </>
  );
};

export default WorkExperienceInputMap;
