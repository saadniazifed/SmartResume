import PropTypes from "prop-types";

const RenderHobbies = (props) => {
  const { hobbies } = props;
  return (
    <>
      <div className="mb-2">
        {hobbies.length > 0 && (
          <span className="font-bold text-xl font-sans">Hobbies:</span>
        )}
      </div>

      {console.log("hobbies.length : ", hobbies.length)}

      {hobbies.length > 0 && (
        <ul className="flex flex-wrap justify-center list-none p-0 space-y-2 space-x-2">
          {hobbies.map(
            (hobby, index) =>
              hobby.hobby && (
                <li
                  key={index}
                  className="flex-grow flex-basis-0 flex-shrink w-1/3 p-2 rounded-lg bg-gray-100 text-center border border-gray-300"
                >
                  <div className="align-top">{hobby.hobby}</div>
                </li>
              )
          )}
        </ul>
      )}
    </>
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
