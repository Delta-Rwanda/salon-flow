import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="flex flex-col justify-center items-center w-full bg-[#555555] gap-6 py-6">
      <div className="w-full flex flex-col md:flex-row justify-around items-center md:w-3/4">
        <div className="flex flex-col items-start gap-2">
          <div className="flex gap-2">
            <Link
              to="https://facebook.com"
              target="_blank"
              className="bg-[#F8F9FA] p-1 rounded text-sm hover:bg-blue-700"
            >
              <FaFacebookF />
            </Link>
            <Link
              to="https://twitter.com"
              target="_blank"
              className="bg-[#F8F9FA] rounded text-sm w-5 text-center hover:bg-blue-700"
            >
              𝕏
            </Link>
            <Link
              to="https://instagram.com"
              target="_blank"
              className="bg-[#F8F9FA] p-1 rounded text-sm hover:bg-blue-700"
            >
              <FaInstagram />
            </Link>
            <Link
              to="https://linkedin.com"
              target="_blank"
              className="bg-[#F8F9FA] p-1 rounded text-sm hover:bg-blue-700"
            >
              <FaLinkedinIn />
            </Link>
          </div>
          <p className="text-[#E6E6FA] p-1 text-sm">Follow us</p>
        </div>
        <div className="flex flex-col md:items-start items-center sm:items-center gap-2 px-2 sm:px-2 md:p-0.5 w-full md:w-auto">
          <p className="text-[#E6E6FA] md:text-lg text-sm sm:text-sm">
            Send me tips, trends, updates & offers
          </p>
          <form className="flex flex-col md:bg-[#9894B1] p-2 md:p-0 sm:p-2 rounded-md sm:flex-row items-center sm:bg-amber-50 bg-amber-50 sm:gap-2 gap-2 md:gap-0 w-full">
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md bg-[#9894B1] cursor-pointer sm:rounded-l-md sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm w-full sm:w-64"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-[#FFB6C1] rounded-md cursor-pointer font-semibold  hover:bg-blue-700 text-sm w-full sm:w-auto"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="text-center text-[#E6E6FA] text-sm px-4">
        <p>
          SalonFlow is part of SalonFlow Inc, the leading online platform for
          salon booking and time-saving services.
        </p>
        <p className="mt-1">
          Copyright &copy; {year} SalonFlow. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
