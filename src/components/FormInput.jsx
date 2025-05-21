import PropTypes from 'prop-types';
const FormInput = ({
  label,
  id,
  type = 'text',
  value,
  onChange,
  required = false,
}) => {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full p-2 mt-1 border border-gray-400 rounded-md text-sm focus:outline-none bg-gray-100"
      />
    </div>
  );
};

export default FormInput;

FormInput.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
};
