import PropTypes from "prop-types";

const RenderHobbies = (props) => {
  const { hobbies } = props;
  return (
    <div>
      <ul className="flex flex-wrap justify-center list-none p-0 space-y-2 space-x-2">
        {hobbies?.map((hobby, index) => (
          <li
            key={index}
            className="flex-grow flex-basis-0 flex-shrink w-1/3 p-2 rounded-lg bg-gray-100 text-center"
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
