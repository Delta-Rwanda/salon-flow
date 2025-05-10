import PropTypes from 'prop-types';

const GoogleSignButton = ({ children, submit, variant = 'primary' }) => {
  const baseStyles =
    'w-full h-[50px] px-4 rounded-md font-medium transition-colors flex items-center justify-center';
  const variants = {
    primary: 'bg-gray-900 text-white hover:bg-gray-800 duration-200',
    outline:
      'border border-gray-300 text-gray-900 hover:bg-gray-50 duration-200',
  };

  return (
    <button onClick={submit} className={`${baseStyles} ${variants[variant]}`}>
      {children}
    </button>
  );
};

GoogleSignButton.propTypes = {
  children: PropTypes.node.isRequired,
  submit: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(['primary', 'outline']),
};

export default GoogleSignButton;
