import PropTypes from 'prop-types';

const SignInButton = ({ children, submit, variant }) => {
  const baseStyles =
    'w-full h-[50px] px-4 font-medium transition-colors rounded-md';

  const variants = {
    primary: 'bg-[#DB2777] text-white hover:bg-[#db277893]',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50',
  };

  const variantStyle = variants[variant] || variants.primary;

  return (
    <button
      type="button"
      onClick={submit}
      className={`${baseStyles} ${variantStyle}`}
    >
      {children}
    </button>
  );
};

// Defining prop types
SignInButton.propTypes = {
  children: PropTypes.node.isRequired,
  submit: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(['primary', 'outline']),
};

// Setting default props
SignInButton.defaultProps = {
  variant: 'primary',
};

export default SignInButton;
