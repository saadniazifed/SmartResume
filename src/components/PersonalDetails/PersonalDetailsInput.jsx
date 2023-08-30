import React, { useState } from "react";
import { personalDetailsInput } from "../../utils/personalDetailsUtils";
import FormInput from "../FormInput";
import PropTypes from "prop-types";
import Avatar from "../Avatar/Avatar";

const PersonalDetailsInput = (props) => {
  const { setPersonalDetails, personalDetails, avatarImage, setAvatarImage } =
    props;
  const onChange = (e) => {
    setPersonalDetails({
      ...personalDetails,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className="border bg-[#1c1c1c] rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-semibold mt-6 mb-3 block text-white px-5">
          Personal Details
        </h3>
        <Avatar setAvatarImage={setAvatarImage} avatarImage={avatarImage} />
      </div>

      {personalDetailsInput.map((input) => (
        <React.Fragment key={input.id}>
          <FormInput
            {...input}
            value={personalDetails[personalDetailsInput.name]}
            onChange={onChange}
            setPersonalDetails={setPersonalDetails}
            type={input.type}
          />
        </React.Fragment>
      ))}

    </form>
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
