import { useState, useEffect } from 'react';
import FormInput from '../components/FormInput';
import Button from '../components/Button';

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
      setError('Password and confirm password do not match!');
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 font-poppins">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-8">
        <h2 className="text-xl font-bold mb-1 text-left">SALON FLOW</h2>
        <h3 className="text-base font-semibold mb-1 text-left">
          Account Signup-Form
        </h3>
        <p className="italic text-sm mb-3 text-left">
          Already have an account?{' '}
          <a href="/signin" className="text-pink-600 hover:underline">
            Sign in
          </a>
        </p>

        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
        {success && <p className="text-green-500 text-sm mb-3">{success}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <FormInput
            label="Name"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
            className="bg-[#9894B1] text-white"
          />
          <FormInput
            label="Email"
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            className="bg-[#9894B1] text-white"
          />
          <FormInput
            label="Password"
            id="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            className="bg-[#9894B1] text-white"
          />
          <FormInput
            label="Confirm Password"
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            required
            className="bg-[#9894B1] text-white"
          />

          <Button
            type="submit"
            disabled={loading}
            className={`w-full mt-4 text-white font-semibold ${
              loading
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-pink-500 hover:bg-pink-700'
            }`}
          >
            {loading ? 'Creating Account...' : 'Sign Up'}
          </Button>

          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-400" />
            <span className="mx-3 text-xs font-semibold">OR</span>
            <div className="flex-grow border-t border-gray-400" />
          </div>

          <Button
            className="bg-slate-900 text-white text-sm hover:bg-blue-600 w-full"
            icon={
              <img
                src="/assets/Google.png"
                alt="Google Logo"
                className="w-5 h-5"
              />
            }
          >
            Continue with Google
          </Button>
        </form>
      </div>

      <footer className="mt-6 text-center text-xs text-gray-500 max-w-md px-4">
        <p>
          SalonFlow is part of SalonFlow Inc., the leading platform for salon
          booking. © 2025 SalonFlow. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Signup;
