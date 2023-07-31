import PropTypes from "prop-types";

const RenderPersonalDetailsInput = (props) => {
  const { personalDetails } = props;

  return (
    <div className="h-1/4 flex flex-col justify-center items-center">
      {/* Centered text in the top div */}
      <div className="flex flex-col items-center justify-center h-1/2">
        <p className="text-center text-4xl font-bold">
          Name: {personalDetails.fullName}
        </p>
      </div>

      {/* Bottom div with 3 paragraphs, wrapped to next line when necessary */}
      <div className="flex flex-wrap justify-evenly h-1/2 w-full">
        <p className="text-center w-full md:w-auto">
          Email: {personalDetails.email}
        </p>
        <p className="text-center w-full md:w-auto">
          Phone Number: {personalDetails.phoneNumber}
        </p>
        <p className="text-center w-full md:w-auto">
          Address: {personalDetails.address}
        </p>
      </div>
    </div>
  );
};

RenderPersonalDetailsInput.propTypes = {
  personalDetails: PropTypes.shape({
    fullName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phoneNumber: PropTypes.number.isRequired,
    address: PropTypes.string.isRequired,
  }).isRequired,
  setPersonalDetails: PropTypes.func.isRequired,
};

export default RenderPersonalDetailsInput;
