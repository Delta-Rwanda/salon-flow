const LogIn = () => {
    return (
        <div className="flex justify-center items-center h-screen ">
            <div className="shadow-lg p-4 bg-white rounded-lg w-[1124px] h-[785px] flex justify-center items-center">
                <form action="">
                    <h1 className=" w-[174px] h-[29px] text-[24px] font-poppins">SALON FLOW</h1>
                    <p className="mt-[20px] text-[24px] font-poppins w-[415px] h-[78px]">Sign in to unlock the best of Salon-Flow</p>
                    <div className="pt-[20px]">
                        <label htmlFor="e-mail">
                            Email
                        </label><br></br>
                        <input type="text" name="email" id="email" className=" p-2.5 border-2 rounded-[10px] block  text-sm text-gray-500 w-[484px] h-[53px]" /><br></br>
                        <label htmlFor="password">
                            Password
                        </label><br></br>
                        <input type="password" name="password" id="password" className="p-2.5 border-2 rounded-[10px] block  text-sm text-gray-500 w-[484px] h-[53px]" /><br></br>
                        <p>Forgot Your password</p><br></br>
                        <button className="w-[484px] h-[68px] px-4 py-2 bg-[#FFB6C1] text-black rounded">
                            Sign In
                        </button><br></br>
                        <button className="mt-[40px] w-[484px] h-[68px] px-4 py-2 bg-[#33313E] text-[#FFFFFF] rounded">
                            Continue with Google
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LogIn;
