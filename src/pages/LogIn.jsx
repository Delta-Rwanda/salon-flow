import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

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
      // Form submission logic here
      //console.log('Form submitted:', { email, password });
    }
  };

  return (
    <>
      <div className=" flex items-center justify-center min-h-screen bg-[#F4F4F4] p-4 font-poppins">
        <div className="bg-white w-full max-w-md rounded-lg shadow-sm p-6 sm:p-8 mt-[-60px]">
          {/*Title */}
          <h1 className="text-2xl font-medium text-gray-800 mb-6">
            SALON FLOW
          </h1>

          {/* Sign in text */}
          <p className="text-xl text-gray-800 mb-6 font-normal">
            Sign in to unlock the best of
            <br />
            Salon-Flow.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#505050] bg-[#F4F4F4]"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#505050] bg-[#F4F4F4]"
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>

            {/* Forgot Password Link */}
            <div className="flex items-start">
              <a
                href="#"
                className="text-sm font-medium text-gray-600 hover:text-gray-800"
              >
                Forgot your password?
              </a>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full bg-[#DB2777] text-white font-medium py-2 rounded-md hover:bg-[#db277893] transition duration-200"
            >
              Sign In
            </button>
          </form>

          {/* OR Divider */}
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="px-4 text-sm text-gray-500 font-medium">OR</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Sign In With Google Button */}
          <button
            type="button"
            className="w-full flex items-center justify-center bg-gray-900 text-white py-2 rounded-md hover:bg-gray-800 transition duration-200"
          >
            <FcGoogle className="mr-2 text-lg" />
            <span className="text-sm font-medium">Continue with Google</span>
          </button>

          {/* Sign Up Link */}
          <div className="text-center mt-6">
            <p className="text-gray-600 text-sm font-medium">
              Don &apos;t have an account?{' '}
              <a href="#" className="text-[#FFB6C1] hover:text-[#ffb6c5d7]">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#F4F4F4] flex items-center justify-center my-[-60px] ">
        <p className="pb-5 w-[904px] h-[49px] flex  justify-center text-[14px] text-[#505050]">
          SalonFlow is part of SalonFlow Inc., the leading online platform for
          salon booking and time-saving services.<br></br>
          Copyright &copy; 2025 SalonFlow. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default LogIn;
