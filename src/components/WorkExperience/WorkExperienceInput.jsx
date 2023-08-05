import WorkExperienceInputMap from "./WorkExperienceInputMap";

const WorkExperienceInput = (props) => {
  const { workInput, setWorkInput, setWorkExperience } = props;

  const handleWorkInput = (field, value) => {
    setWorkInput((prevValues) => ({ ...prevValues, [field]: value }));
  };

  const handleWorkExperience = (e) => {
    e.preventDefault();
    setWorkExperience((prevInfo) => [...prevInfo, { ...workInput }]);
    setWorkInput({
      company: "",
      jobTitle: "",
      startDate: "",
      endDate: "",
    });
  };

  return (
    <>
      <span className="text-2xl font-semibold mt-6  block">Work Details</span>
      <br />
      <WorkExperienceInputMap
        workInput={workInput}
        handleWorkInput={handleWorkInput}
      />
      <button
        onClick={handleWorkExperience}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Add Details
      </button>
    </>
  );
};

export default WorkExperienceInput;
