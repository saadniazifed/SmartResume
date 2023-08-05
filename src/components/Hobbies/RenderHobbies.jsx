import PropTypes from "prop-types";

const RenderHobbies = (props) => {
  const { hobbies } = props;
  return (
    <div>
      <ul className="flex flex-wrap justify-start list-none p-0">
        {hobbies?.map((hobby, index) => (
          <li
            key={index}
            className="flex-grow flex-basis-0 flex-shrink break-words"
          >
            <div className="align-top">{hobby.hobby}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

RenderHobbies.propTypes = {
  hobbies: PropTypes.arrayOf(
    PropTypes.shape({
      hobby: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default RenderHobbies;
