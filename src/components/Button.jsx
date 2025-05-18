import PropTypes from 'prop-types';

const Button = ({ label, type = 'submit' }) => {
  return (
    <button
      type={type}
      className="px-4 py-2 bg-[#DB2777] rounded-md cursor-pointer font-semibold text-[#E6E6FA] hover:text-black  hover:bg-[#FFB6C1] text-sm w-full font-poppins sm:w-auto"
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

export default Button;
