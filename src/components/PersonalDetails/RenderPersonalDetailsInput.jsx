import PropTypes from "prop-types";

const RenderPersonalDetailsInput = (props) => {
  const { personalDetails, avatarImage } = props;

  return (
    <div className="h-1/4 flex flex-col">
      {/* Centered text in the top div */}
      <div className="flex justify-between items-center h-1/4">
        <p className="text-4xl font-bold text-white font-alfa">
          {personalDetails.fullName}
        </p>
        <img
          className="rounded-full w-16 h-16 object-cover"
          src={avatarImage}
          alt="Avatar"
        />
      </div>

      {/* Bottom div with labels and rendering vertically aligned */}
      <div className="flex flex-col h-3/4 w-full">
        <div className="text-left text-xl font-sans w-full md:w-auto">
          <p>
            <span className="font-bold font-sans"></span>{" "}
            <span className="text-white rounded p-2 flex w-full justify-between h-8 items-center">
              <span>{personalDetails.email}</span>
            </span>
          </p>
        </div>
        <div className="text-left text-xl w-full md:w-auto">
          <p>
            <span className="font-bold font-sans"></span>{" "}
            <span className="text-white rounded p-2 flex w-full justify-between h-8 items-center">
              <span>{personalDetails.phoneNumber}</span>
            </span>
          </p>
        </div>
        <div className="text-left text-xl w-full md:w-auto">
          <p>
            <span className="font-bold font-sans"></span>{" "}
            <span className="text-white rounded p-2 flex w-full justify-between h-8 items-center">
              <span>{personalDetails.address}</span>
            </span>
          </p>
        </div>

        <div className="text-left text-xl w-full md:w-auto">
          <p>
            <span className="font-bold text-white font-sans"></span>{" "}
            <textarea className="text-white rounded p-2 w-full inline-block break-all bg-transparent">
              {personalDetails.smallDescription}
            </textarea>
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
