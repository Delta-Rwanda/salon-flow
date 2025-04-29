import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';

//  Form validation
const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });
  // Form submission handling
  const validateForm = () => {
    let valid = true;
    const newErrors = {
      email: '',
      password: '',
    };

    // Email validation
    if (!email) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
      valid = false;
    }

    // Password validation
    if (!password) {
      newErrors.password = 'Password is required';
      valid = false;
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      // If form is valid, proceed with submission
      //console.log('Form submitted:', { email, password });
      // You can call your authentication API here
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4 font-poppins">
      <div className="w-full max-w-md px-4 sm:px-6 lg:px-8">
        {/*Title */}
        <h1 className="text-center text-2xl sm:text-3xl font-medium text-gray-800 mb-6">
          SALON FLOW
        </h1>

        {/* Sign in text */}
        <p className="text-xl sm:text-2xl text-center mb-6 sm:mb-8 font-poppins font-regular">
          Sign in to unlock the best of
          <br />
          Salon-Flow.
        </p>

        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-[14px] sm:text-[16px] font-poppins font-regular text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#505050] bg-[#F4F4F4]"
              required
            />
            {errors.email && (
              <p className="text-red-500 text-xs sm:text-sm mt-1">
                {errors.email}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-[14px] sm:text-[16px] text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#505050] bg-[#F4F4F4]"
              required
            />
            {errors.password && (
              <p className="text-red-500 text-xs sm:text-sm mt-1">
                {errors.password}
              </p>
            )}
          </div>

          {/* Forgot Password Link */}
          <div className="flex justify-start mb-4 sm:mb-6">
            <a
              href="#"
              className="text-sm sm:text-xl font-poppins font-semibold text-gray-600 hover:text-gray-800"
            >
              Forgot your password?
            </a>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full bg-[#DB2777] text-sm sm:text-xl font-poppins font-semibold text-black py-2 sm:py-3 rounded-md hover:bg-[#db277893] transition duration-200"
          >
            Sign In
          </button>
        </form>

        {/* OR Divider */}
        <div className="flex items-center my-4 sm:my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="px-4 text-sm sm:text-[16px] text-gray-500 font-poppins font-semibold">
            OR
          </span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Sign In Button With Google */}
        <button
          type="button"
          className="w-full flex items-center justify-center bg-gray-900 text-white py-2 sm:py-3 rounded-md hover:bg-gray-800 transition duration-200"
        >
          <span className="pr-2 sm:pr-6">
            <FcGoogle size={24} className="sm:size-[30px]" />
          </span>
          <p className="text-sm sm:text-xl font-semibold">
            Continue with Google
          </p>
        </button>

        {/* Sign Up Link */}
        <div className="text-center mt-4 sm:mt-6">
          <p className="text-gray-600 text-sm sm:text-xl font-poppins font-bold h-[24px] sm:h-[30px] w-full sm:w-[324px] mx-auto">
            Don&apos;t have an account?
            <a href="#" className="text-[#FFB6C1] ml-1 hover:text-[#ffb6c5d7]">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
