import PropTypes from 'prop-types';
import classNames from 'classnames';

const FormInput = ({
  label,
  id,
  type = 'text',
  value,
  onChange,
  required = false,
  placeholder = '',
  disabled = false,
  error = false,
  className = '',
}) => {
  const baseInputStyles =
    'w-full p-2 mt-1 border rounded-md text-sm focus:outline-none transition-colors';

  const inputClasses = classNames(baseInputStyles, className, {
    'bg-gray-100 border-gray-400': !error && !disabled,
    'border-red-500 text-red-600': error,
    'bg-gray-200 border-gray-300 cursor-not-allowed text-gray-500': disabled,
  });

  return (
    <div className="mb-3">
      {label && (
        <label htmlFor={id} className="text-sm font-medium block">
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        disabled={disabled}
        className={inputClasses}
      />
    </div>
  );
};

FormInput.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  className: PropTypes.string,
};

export default FormInput;
