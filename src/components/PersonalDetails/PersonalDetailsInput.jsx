import React from "react";
import { personalDetailsInput } from "../../utils/personalDetailsUtils";
import FormInput from "../FormInput";
import PropTypes from "prop-types";
import Avatar from "../Avatar/Avatar";
import { useSelector, useDispatch } from "react-redux";
import {
  setFullName,
  setEmail,
  setPhoneNumber,
  setAddress,
  setSmallDescription,
} from "../features/personalDetails/personalDetailSlice";

const PersonalDetailsInput = (props) => {
  const { setPersonalDetails, avatarImage, setAvatarImage } = props;

  const personalDetailState = useSelector((state) => state.personalDetails);
  const dispatch = useDispatch();

  const handleFullNameChange = (e) => {
    dispatch(setFullName(e.target.value));
  };

  const handleEmailChange = (e) => {
    dispatch(setEmail(e.target.value));
  };

  const handlePhoneNumberChange = (e) => {
    dispatch(setPhoneNumber(e.target.value));
  };

  const handleAddressChange = (e) => {
    dispatch(setAddress(e.target.value));
  };

  const handleSmallDescriptionChange = (e) => {
    dispatch(setSmallDescription(e.target.value));
  };


  function onChangeHandler(fieldName) {
    switch (fieldName) {
      case "fullName":
        return handleFullNameChange;
      case "email":
        return handleEmailChange;
      case "phoneNumber":
        return handlePhoneNumberChange;
      case "address":
        return handleAddressChange;
      case "smallDescription":
        return handleSmallDescriptionChange;
      default:
        return () => {}; 
    }
  }

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
            value={personalDetailState[input.name]}
            onChange={onChangeHandler(input.name)}
            setPersonalDetails={setPersonalDetails}
            type={input.type}
            maxLength={input.maxLength}
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
  avatarImage: PropTypes.string.isRequired,
  setAvatarImage: PropTypes.func.isRequired,
};

export default PersonalDetailsInput;
