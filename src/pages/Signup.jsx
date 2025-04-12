import {useState} from 'react';

const Signup = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (event) =>{
        event.preventDefault();
        if(password===confirmPassword){
           alert("You successfully created an account!")
        }
        else{
         setError("Password and confirm password are not the same!")
          return;
        }
      }
  return (
    <div>
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
       <div className="flex flex-col items-start px-6 w-full max-w-lg">
       <h2 className="text-2xl font-bold mb-2 text-center sm:text-3xl">SALON FLOW</h2>
    <h3 className="text-sm font-bold mb-2 text-center sm:text-base">Account Signup-Form</h3>
    <h4 className="italic mb-4 text-center sm:text-base">
      Already have an account?{' '}
      <a href="/signin" className="text-red-500 hover:underline">
        Sign in
      </a>
    </h4>
    {error && <p className="text-red-500 text-center mb-4">{error}</p>}

    {/* Form container */}
    <form onSubmit={handleSubmit} className="h-auto w-full sm:w-72 bg-white rounded shadow-2xl justify-start items-center px-4 py-4">
      {/* Name input */}
      <div id="name-input">
        <label htmlFor="name">Enter your name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
          className="border-gray-500 border-solid border-1 rounded-md w-full p-1 mt-2 cursor-pointer hover:bg-gray-200 focus:outline-none"
        />
      </div>

      {/* Email input */}
      <div id="email-input">
        <label htmlFor="email">Enter your email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          className="border-gray-500 border-solid border-1 rounded-md w-full p-1 mt-2 cursor-pointer hover:bg-gray-200 focus:outline-none"
        />
      </div>

      {/* Password input */}
      <div id="password-input">
        <label htmlFor="password">Enter your password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
          className="border-gray-500 border-solid border-1 rounded-md w-full p-1 mt-2 cursor-pointer hover:bg-gray-200 focus:outline-none"
        />
      </div>

      {/* Confirm password input */}
      <div id="confirmPassword-input">
        <label htmlFor="confirm-password">Confirm your password:</label>
        <input
          type="password"
          id="confirm-password"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          required
          className="border-gray-500 border-solid border-1 rounded-md w-full p-1 mt-2 cursor-pointer hover:bg-gray-200 focus:outline-none"
        />
      </div>

      <button
        type="submit"
        className="border-gray-500 w-full bg-pink-400 rounded text-center font-bold mt-5 p-1 hover:bg-slate-600 hover:text-white"
      >
        Sign up
      </button>

      <div className="flex items-center my-4">
        <div className="border-t border-gray-400 flex-grow"></div>
        <span className="mx-4 text-sm font-semibold">OR</span>
        <div className="border-t border-gray-400 flex-grow"></div>
      </div>

      <button className="border-gray-500 w-full bg-slate-900 text-white rounded text-center text-sm font-bold mt-2 p-2 flex items-center justify-center hover:bg-blue-400">
        <img
          src="/assets/GoogleImg.png"
          alt="Google Logo"
          className="w-5 h-5 mr-2"
        />
        Continue with Google
      </button>
    </form>
  </div>
    </div>
</div>
    
  )
}

export default Signup