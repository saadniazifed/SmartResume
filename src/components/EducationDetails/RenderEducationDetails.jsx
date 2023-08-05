import PropTypes from "prop-types";

const RenderEducationDetails = (props) => {
  const { educationInfo } = props;

  return (
    <>
      <div className="flex flex-col h-3/4 w-full">
        {educationInfo.length > 0 && (
          <div className="mb-2">
            <span className="font-bold text-xl font-sans">
              Education Details:
            </span>
          </div>
        )}

        {educationInfo.length > 0 &&
          educationInfo.map((info) => (
            <div key={info.id} className="mb-2">
              {info.school && (
                <p className="border rounded p-2 bg-gray-100">
                  <span className="font-bold font-sans">School:</span>{" "}
                  {info.school}
                </p>
              )}
              {info.titleOfStudy && (
                <p className="border rounded p-2 bg-gray-100">
                  <span className="font-bold font-sans">Title of Study:</span>{" "}
                  {info.titleOfStudy}
                </p>
              )}
              {info.startDate && (
                <p className="border rounded p-2 bg-gray-100">
                  <span className="font-bold font-sans">Start Date:</span>{" "}
                  {info.startDate}
                </p>
              )}
              {info.endDate && (
                <p className="border rounded p-2 bg-gray-100">
                  <span className="font-bold font-sans">End Date:</span>{" "}
                  {info.endDate}
                </p>
              )}
            </div>
          ))}
      </div>
    </>
  );
};

RenderEducationDetails.propTypes = {
  educationInfo: PropTypes.arrayOf(
    PropTypes.shape({
      school: PropTypes.string,
      titleOfStudy: PropTypes.string,
      startDate: PropTypes.string,
      endDate: PropTypes.string,
    })
  ).isRequired,
};

export default RenderEducationDetails;
