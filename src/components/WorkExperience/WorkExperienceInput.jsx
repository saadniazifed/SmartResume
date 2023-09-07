import WorkExperienceInputMap from "./WorkExperienceInputMap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addWorkDetails } from "../features/workDetailSlice/workDetailSlice";

const WorkExperienceInput = () => {
  const dispatch = useDispatch();

  const [workInput, setWorkInput] = useState({
    company: "",
    jobTitle: "",
    startDate: "",
    endDate: "",
  });

  const handleWorkInput = (field, value) => {
    setWorkInput((prevValues) => ({ ...prevValues, [field]: value }));
  };

  const handleWorkExperience = (e) => {
    e.preventDefault();
    if (
      workInput.company === "" ||
      workInput.jobTitle === "" ||
      workInput.startDate === "" ||
      workInput.endDate === ""
    ) {
      alert("Please fill all the fields");
      return;
    } else {
      dispatch(addWorkDetails({ ...workInput }));
      setWorkInput({
        company: "",
        jobTitle: "",
        startDate: "",
        endDate: "",
      });
    }
  };

  return (
    <form className="border bg-[#1c1c1c] rounded-xl mt-3">
      <span className="text-2xl font-semibold mt-6  block font-alfa text-white mx-4">
        Work Details
      </span>
      <br />
      <WorkExperienceInputMap
        workInput={workInput}
        handleWorkInput={handleWorkInput}
      />
      <button
        onClick={handleWorkExperience}
        className="mx-4 mb-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Add Details
      </button>
    </form>
  );
};

export default WorkExperienceInput;
