import PropTypes from "prop-types";

const RenderWorkExperience = (props) => {
  const { workExperience } = props;
  console.log("workExperience: ", workExperience);
  return (
    <>
      {workExperience.length > 0 && (
        <div className="mb-2">
          <span className="font-bold text-xl font-sans">Work Experience:</span>
        </div>
      )}

      {workExperience.length > 0 &&
        workExperience.map((experience, index) => (
          <div key={index} className="mb-2">
            {experience.company && (
              <p className="border rounded p-2 bg-gray-100">
                <span className="font-bold font-sans">Company:</span>{" "}
                {experience.company}
              </p>
            )}
            {experience.jobTitle && (
              <p className="border rounded p-2 bg-gray-100">
                <span className="font-bold font-sans">Job Title:</span>{" "}
                {experience.jobTitle}
              </p>
            )}
            {experience.startDate && (
              <p className="border rounded p-2 bg-gray-100">
                <span className="font-bold font-sans">Start Date:</span>{" "}
                {experience.startDate}
              </p>
            )}
            {experience.endDate && (
              <p className="border rounded p-2 bg-gray-100">
                <span className="font-bold font-sans">End Date:</span>{" "}
                {experience.endDate}
              </p>
            )}
            {!experience.company &&
              !experience.jobTitle &&
              !experience.startDate &&
              !experience.endDate && <p>No work experience available</p>}
          </div>
        ))}
    </>
  );
};

RenderWorkExperience.propTypes = {
  workExperience: PropTypes.arrayOf(
    PropTypes.shape({
      company: PropTypes.string,
      jobTitle: PropTypes.string,
      startDate: PropTypes.string,
      endDate: PropTypes.string,
    })
  ).isRequired,
};

export default RenderWorkExperience;
