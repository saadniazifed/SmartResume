import PropTypes from "prop-types";

const RenderPersonalDetailsInput = (props) => {
  const { personalDetails } = props;

  return (
    <div className="h-1/4 flex flex-col">
      {/* Centered text in the top div */}
      <div className="flex flex-col h-1/4">
        <p className="text-2xl font-bold">Name: {personalDetails.fullName}</p>
      </div>

      {/* Bottom div with labels and rendering vertically aligned */}
      <div className="flex flex-col h-3/4 w-full">
        <div className="text-left text-xl font-sans w-full md:w-auto">
          <p>
            <span className="font-bold font-sans">Email:</span>{" "}
            <span className="border rounded p-2 bg-gray-100 flex w-full justify-between h-8 items-center">
              <span>{personalDetails.email}</span>
            </span>
          </p>
        </div>
        <div className="text-left text-xl w-full md:w-auto">
          <p>
            <span className="font-bold font-sans">Phone Number:</span>{" "}
            <span className="border rounded p-2 bg-gray-100 flex w-full justify-between h-8 items-center">
              <span>{personalDetails.phoneNumber}</span>
            </span>
          </p>
        </div>
        <div className="text-left text-xl w-full md:w-auto">
          <p>
            <span className="font-bold font-sans">Address:</span>{" "}
            <span className="border rounded p-2 bg-gray-100 flex w-full justify-between h-8 items-center">
              <span>{personalDetails.address}</span>
            </span>
          </p>
        </div>
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
