import PropTypes from "prop-types";

const FormInput = (props) => {
  const { label, onChange, errorMessage, ...input } = props;
  return (
    <div className="mb-3">
      <label className="block font-medium mb-1" style={{ minWidth: "120px" }}>
        {label}
      </label>
      <input
        className="w-full px-4 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-600"
        {...input}
        onChange={onChange}
      />
      <span className="text-red-500 text-sm">{errorMessage}</span>
    </div>
  );
};

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormInput;
