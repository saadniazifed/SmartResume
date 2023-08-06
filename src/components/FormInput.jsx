import PropTypes from "prop-types";

const FormInput = (props) => {
  const { label, onChange, value, type, ...input } = props;

  const isTextArea = type === "textarea";

  return (
    <div className="mb-3">
      <label className="block font-medium mb-1" style={{ minWidth: "120px" }}>
        {label}
      </label>
      {isTextArea ? (
        <textarea
          className="w-full px-4 py-5 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-600"
          {...input}
          onChange={onChange}
          value={value}
          maxLength={150}
        />
      ) : (
        <input
          className="w-full px-4 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-600"
          {...input}
          onChange={onChange}
          value={value}
        />
      )}
    </div>
  );
};

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default FormInput;
