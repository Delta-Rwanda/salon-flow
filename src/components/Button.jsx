import PropTypes from 'prop-types';

const Button = ({ label, onClick, variant = 'default', icon: Icon }) => {
  const baseStyle =
    'w-full py-3 rounded-md font-semibold text-sm flex items-center justify-center transition duration-200';

  const variants = {
    default: 'bg-pink-600 text-white hover:bg-pink-700',
    google: 'bg-gray-800 text-white hover:bg-gray-900',
  };

  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant]}`}>
      {Icon && <Icon className="mr-2 text-lg" />}
      {label}
    </button>
  );
};
Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(['default', 'google']),
  icon: PropTypes.elementType,
};

export default Button;
