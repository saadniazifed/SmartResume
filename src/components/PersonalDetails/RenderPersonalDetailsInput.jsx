import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faAlignLeft,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const RenderPersonalDetailsInput = (props) => {
  const { personalDetails, avatarImage } = props;

  return (
    <div className="h-1/4 flex justify-between">
      {/* Centered text in the top div */}
      <div className="flex p-5 flex-col items-center justify-between h-1/4">
        <div className="flex items-center  flex-[0.65]">
          <FontAwesomeIcon icon={faUser} color="white" />
          <p className="text-4xl font-bold ms-3 text-white font-alfa">
            {personalDetails.fullName}
          </p>
        </div>

        <div className="flex flex-col h-3/4 w-full">
          <div className="text-left text-lg font-sans w-full md:w-auto">
            <p className="flex items-center">
              <span className="font-bold font-sans">
                <FontAwesomeIcon icon={faEnvelope} color="white" />
              </span>
              <span className="text-white text-lg font-rubik rounded ms-3 flex w-full justify-between h-8 items-center">
                <span>{personalDetails.email}</span>
              </span>
            </p>
          </div>
          <div className="text-left text-lg w-full md:w-auto">
            <p className="flex items-center">
              <span className="font-bold font-sans">
                <FontAwesomeIcon icon={faPhone} color="white" />
              </span>
              <span className="text-white rounded p-2 flex w-full justify-between h-8 items-center">
                <span>{personalDetails.phoneNumber}</span>
              </span>
            </p>
          </div>
          <div className="text-left text-lg w-full md:w-auto">
            <p className="flex items-center">
              <span className="font-bold font-sans">
                <FontAwesomeIcon icon={faMapMarkerAlt} color="white" />
              </span>
              <span className="text-white rounded p-2 flex w-full justify-between h-8 items-center">
                <span>{personalDetails.address}</span>
              </span>
            </p>
          </div>

          <div className="text-left text-md italic w-full md:w-auto">
            <p className="flex items-center">
              <span className="font-bold text-white font-sans">
                <FontAwesomeIcon icon={faAlignLeft} color="white" />
              </span>
              <span className="text-white rounded ms-2 w-full inline-block break-all bg-transparent">
                {personalDetails.smallDescription}
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom div with labels and rendering vertically aligned */}

      <div>
        <img
          className="rounded-full w-15 h-25 object-cover"
          src={avatarImage}
          alt="Avatar"
        />
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
    smallDescription: PropTypes.string.isRequired,
  }).isRequired,
  setPersonalDetails: PropTypes.func.isRequired,
};

export default RenderPersonalDetailsInput;
