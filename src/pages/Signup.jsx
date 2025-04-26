import { useState } from 'react';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      alert('You successfully created an account!');
    } else {
      setError('Password and confirm password are not the same!');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6">
      {/* Card */}
      <div className="bg-white shadow-xl rounded-lg w-full max-w-[420px]">
        <div className="w-full px-6 sm:px-8 md:px-10 py-8 sm:py-10">
          {' '}
          {/* Responsive padding */}
          <h2 className="text-base sm:text-lg font-bold mb-1 text-left">
            SALON FLOW
          </h2>
          <h3 className="text-sm sm:text-base font-semibold mb-1 text-left">
            Account Signup-Form
          </h3>
          <h4 className="italic text-xs sm:text-sm mb-3 text-left">
            Already have an account?{' '}
            <a href="/signin" className="text-red-500 hover:underline">
              Sign in
            </a>
          </h4>
          {error && (
            <p className="text-red-500 text-sm text-left mb-3">{error}</p>
          )}
          <form onSubmit={handleSubmit} className="w-full">
            <div className="mb-3">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
                className="w-full p-2 mt-1 border border-gray-400 rounded-md text-sm focus:outline-none bg-gray-100"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                className="w-full p-2 mt-1 border border-gray-400 rounded-md text-sm focus:outline-none bg-gray-100"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
                className="w-full p-2 mt-1 border border-gray-400 rounded-md text-sm focus:outline-none bg-gray-100"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="confirm-password" className="text-sm font-medium">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                required
                className="w-full p-2 mt-1 border border-gray-400 rounded-md text-sm focus:outline-none bg-gray-100"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-pink-400 text-sm rounded font-bold mt-3 py-2 hover:bg-slate-600 hover:text-white transition-colors"
            >
              Sign up
            </button>

            <div className="flex items-center my-4">
              <div className="flex-grow border-t border-gray-400"></div>
              <span className="mx-3 text-xs font-semibold">OR</span>
              <div className="flex-grow border-t border-gray-400"></div>
            </div>

            <button className="w-full bg-slate-900 text-white rounded text-sm font-bold py-2 flex items-center justify-center hover:bg-blue-400 transition-colors">
              <img
                src="/assets/Google.png"
                alt="Google Logo"
                className="w-5 h-5 mr-8"
              />
              Continue with Google
            </button>
          </form>
        </div>
      </div>

      {/* Footer below the card */}
      <footer className="mt-4 text-center text-[10px] sm:text-[8px] text-gray-500 leading-tight max-w-[420px] px-6 sm:px-10">
        <p>
          SalonFlow is part of SalonFlow Inc., the leading online platform for
          salon booking and time-saving services. © 2025 SalonFlow. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
};

export default Signup;
