const RenderWorkExperience = (props) => {
  const { workExperience } = props;
  return (
    <>
      {workExperience.length > 0
        ? workExperience.map((experience, index) => (
            <div key={index}>
              {experience.company && <p>Company: {experience.company}</p>}
              {experience.jobTitle && <p>Job Title: {experience.jobTitle}</p>}
              {experience.startDate && (
                <p>Start Date: {experience.startDate}</p>
              )}
              {experience.endDate && <p>End Date: {experience.endDate}</p>}
              <hr />
            </div>
          ))
        : null}
    </>
  );
};

export default RenderWorkExperience;
