import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({
  type = 'button',
  disabled = false,
  onClick,
  className = '',
  children,
  icon,
}) => {
  const baseStyles =
    'w-full rounded font-bold py-2 flex items-center justify-center text-sm sm:text-sm transition-colors';

  const combinedClasses = classNames(baseStyles, className, {
    'cursor-not-allowed bg-gray-400': disabled,
  });

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={combinedClasses}
    >
      {icon && <span className="mr-3 sm:mr-8">{icon}</span>}
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  icon: PropTypes.node,
};

export default Button;
