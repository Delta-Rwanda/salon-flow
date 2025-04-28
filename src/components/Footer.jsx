import { Link } from 'react-router-dom';
import SocialMedia from './SocialMedia';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full bg-[#555555] text-[#E6E6FA] space-y-10 px-4 py-10">
      <div className="max-w-6xl mx-auto flex flex-col  md:flex-row space-y-5 sm:space-y-5 md:space-y-1 md:justify-between">
        <div className="flex flex-col gap-3 md:max-w-sm">
          <h2 className="text-xl font-bold">Salon-Flow</h2>
          <p className="text-sm max-w-[290px]">
            The premier platform connecting clients with top salons in their
            area. Find, book, and enjoy salon services with ease.
          </p>
          <SocialMedia />
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-bold">For Clients</h2>
          <div className="flex flex-col text-sm gap-1">
            {[
              'Find Salons',
              'Browse Service',
              'Book Appointment',
              'Manage Account',
              'Write Reviews',
            ].map((item, id) => (
              <Link
                key={id}
                className="hover:text-[#17a2b8] hover:underline"
                to="*"
                target="_blank"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2 md:max-w-xs">
          <h2 className="text-xl font-bold">Contact Us</h2>
          <p className="text-sm max-w-[270px]">
            123 Platform Ave, Suite 200, San Francisco, CA 94107
          </p>
          <p className="text-sm">(555) 123-4567</p>
          <p className="text-sm">info@salonflow.com</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2 px-2 sm:px-2 md:p-0.5 w-full md:w-auto">
        <p className="text-[#E6E6FA] md:text-lg text-sm">
          Send me tips, trends, updates & offers
        </p>
        <form className="flex flex-col md:bg-[#9894B1] p-2 md:p-0 sm:p-2 rounded-md sm:flex-row items-center sm:bg-amber-50 bg-amber-50 sm:gap-2 gap-2 md:gap-0 w-full md:max-w-[360px]">
          <input
            type="email"
            required
            placeholder="Enter your email"
            className="px-4 py-2 rounded-md bg-[#9894B1] cursor-pointer sm:rounded-l-md sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm w-full sm:w-64"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-[#DB2777] rounded-md cursor-pointer font-semibold text-[#E6E6FA] hover:text-black  hover:bg-[#FFB6C1] text-sm w-full sm:w-auto"
          >
            Subscribe
          </button>
        </form>
      </div>
      <div className="text-center text-sm px-4">
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
