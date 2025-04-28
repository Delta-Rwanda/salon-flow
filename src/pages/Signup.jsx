import { useState, useEffect } from 'react';
import FormInput from '../components/FormInput';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setError('');
    setSuccess('');

    if (!name.trim()) {
      setError('Name cannot be empty.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Password and confirm password are not the same!');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setSuccess('Account successfully created!');
      setLoading(false);
      setName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    }, 1000);
  };

  useEffect(() => {
    if (error) setError('');
  }, [name, email, password, confirmPassword]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6">
      <div className="bg-white shadow-xl rounded-lg w-full max-w-[420px] lg:max-w-[600px] xl:max-w-[700px] transition-all duration-300">
        <div className="w-full px-6 sm:px-8 md:px-10 py-8 sm:py-10">
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
          {success && (
            <p className="text-green-500 text-sm text-left mb-3">{success}</p>
          )}

          <form onSubmit={handleSubmit} className="w-full">
            <FormInput
              label="Name"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
            <FormInput
              label="Email"
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            <FormInput
              label="Password"
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
            <FormInput
              label="Confirm Password"
              id="confirm-password"
              type="password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              required
            />

            <button
              type="submit"
              disabled={loading}
              className={`w-full ${
                loading
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-pink-400 hover:bg-slate-600 hover:text-white'
              } text-sm rounded font-bold mt-3 py-2 transition-colors`}
            >
              {loading ? 'Creating Account...' : 'Sign up'}
            </button>

            <div className="flex items-center my-4">
              <div className="flex-grow border-t border-gray-400"></div>
              <span className="mx-3 text-xs font-semibold">OR</span>
              <div className="flex-grow border-t border-gray-400"></div>
            </div>

            <button className="w-full bg-slate-900 text-white rounded text-xs sm:text-sm font-bold py-2 flex items-center justify-center hover:bg-blue-400 transition-colors">
              <img
                src="/assets/Google.png"
                alt="Google Logo"
                className="w-5 h-5 mr-3 sm:mr-8"
              />
              <span className="hidden sm:inline">Continue with Google</span>
            </button>
          </form>
        </div>
      </div>

      <footer className="mt-4 text-center text-[10px] sm:text-[8px] text-gray-500 leading-tight max-w-[420px] px-6 sm:px-10 mb-7">
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
