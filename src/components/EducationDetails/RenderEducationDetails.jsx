import PropTypes from "prop-types";

const RenderEducationDetails = (props) => {
  const { educationInfo } = props;

  return (
    <>
      {educationInfo.length > 0
        ? educationInfo.map((info) => (
            <div key={info.id}>
              {info.school && <p>School: {info.school}</p>}
              {info.titleOfStudy && <p>Title of Study: {info.titleOfStudy}</p>}
              {info.startDate && <p>Start Date: {info.startDate}</p>}
              {info.endDate && <p>End Date: {info.endDate}</p>}
              <hr />
            </div>
          ))
        : null}
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
