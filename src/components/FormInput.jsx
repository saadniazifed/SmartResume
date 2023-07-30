import PropTypes from "prop-types";

const FormInput = (props) => {
  const { placeholder } = props;
  return (
    <div className="flex justify-between mb-2">
      {/* <label className="text-left mr-3">Username</label> */}
      <input
        className="flex-grow font-sans px-4 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-600"
        placeholder={placeholder}
      />
    </div>
  );
};

FormInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

export default FormInput;
