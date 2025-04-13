const LogIn = () => {
    return (
        <div className="flex justify-center items-center h-screen">
          <form action="">
           <h1 className="text-[30px] font-poppins">SALON FLOW</h1>
           <h4>Account Sign-Up Form</h4>
           <p>Already have account?<span>Sign In</span></p>
          
          <label htmlFor="first-name">Your name</label><br></br>
          <input type="text" name="name" id="name" className="border-2 rounded-[8px]" /><br></br>
          <label htmlFor="e-mail">Email</label><br></br>
          <input type="text" name="email" id="email" className="border-2 rounded-[8px]" /><br></br>
          <label htmlFor="password">Password</label><br></br>
          <input type="password" name="password" id="password" className="border-2 rounded-[8px]" /><br></br>
          <label htmlFor="password">Confirm Password</label><br></br>
          <input type="password" name="confirm-password" id="confirm-password" className="border-2 rounded-[8px]" />
        </form>
            
        </div>   
    );
  };
  
  export default LogIn;
  