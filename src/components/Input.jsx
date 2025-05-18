import PropTypes from 'prop-types';

const Input = ({
  type = 'text',
  placeholder = '',
  required = false,
  value,
  onChange,
}) => {
  return (
    <input
      type={type}
      required={required}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="px-4 py-2 rounded-md bg-[#9894B1] cursor-pointer sm:rounded-l-md sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm w-full font-poppins sm:w-64"
    />
  );
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
