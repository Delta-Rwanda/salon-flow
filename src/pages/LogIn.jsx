


//import { useState } from 'react';

import { FcGoogle } from "react-icons/fc";

const LogIn = () => {
    //const [email] = useState('');
    //const [password] = useState('');


    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4 font-poppins">
            <div className="w-full max-w-md">
                {/*Title */}
                <h1 className="text-center text-2xl font-medium text-gray-800 mb-6">SALON FLOW</h1>

                {/* Sign in text */}
                <p className=" text-2xl text-center mb-8   font-poppins font-regular">
                    Sign in to unlock the best of<br />
                    Salon-Flow.
                </p>

                <form>
                    {/* Email Field */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-[16px]  font-poppins font-regular text-gray-700 mb-1">Email</label>
                        <input
                            id="email"
                            type="email"
                            //value={email}
                            //onChange
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#505050] bg-[#F4F4F4]"
                            required
                        />
                    </div>

                    {/* Password Field */}
                    <div className="mb-2">
                        <label htmlFor="password" className="block text-sm text-gray-700 mb-1">Password</label>
                        <input
                            id="password"
                            type="password"
                            //value={password}
                            //onChange
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#505050] bg-[#F4F4F4]"
                            required
                        />
                    </div>

                    {/* Forgot Password Link */}
                    <div className="flex justify-start mb-6">
                        <a href="#" className="text-xl font-poppins font-semibold text-gray-600 hover:text-gray-800">
                            Forgot your password?
                        </a>
                    </div>

                    {/* Sign In Button */}
                    <button
                        type="submit"
                        className="w-full bg-[#ffb6c1e6] text-xl font-poppins font-semibold text-black py-3 rounded-md hover:bg-[#ffb6c080] transition duration-200"
                    >
                        Sign In
                    </button>
                </form>

                {/* OR Divider */}
                <div className="flex items-center my-6">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span className="px-4 text-[16px] text-gray-500 font-poppins font-semibold" >OR</span>
                    <div className="flex-grow border-t border-gray-300"></div>
                </div>

                {/* Sign In Button  */}
                <button
                    type="button"
                    className="w-full flex items-center justify-center bg-gray-900 text-white py-3 rounded-md hover:bg-gray-800 transition duration-200"
                >
                <span className="pr-6 ">
                    {<FcGoogle size={30}/>}
                </span>
                <p className="text-xl font-semibold">
                    Continue with Google

                </p>
                </button>

                {/* Sign Up Link */}
                <div className="text-center mt-6">
                    <p className=" text-gray-600 text-xl font-poppins font-mixed">
                        Don&apos;t have an account?
                        <a href="#" className="text-[#FFB6C1] ml-1 hover:text-[#ffb6c5d7]">
                            Sign Up
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
export default LogIn
