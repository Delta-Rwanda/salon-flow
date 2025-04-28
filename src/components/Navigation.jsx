import { Link } from 'react-router-dom';
import {
  ChevronDown,
  ChevronUp,
  Globe,
  Sun,
  Menu,
  X,
  Moon,
} from 'lucide-react';
import { useState } from 'react';

const Navigation = () => {
  const [isChevronDown, setIsChevronDown] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [language, setLanguage] = useState('English');
  const handleOpen = () => setIsChevronDown(!isChevronDown);
  const toggleMobile = () => setMobileOpen(!mobileOpen);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav className="w-full bg-[#F8F9FA] shadow-md px-4 py-3">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="font-bold text-xl md:text-2xl cursor-pointer">
          SALON FLOW
        </h1>
        <div
          className="md:hidden text-3xl cursor-pointer"
          onClick={toggleMobile}
        >
          {mobileOpen ? <X /> : <Menu />}
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6">
          <div className="relative flex items-center space-x-1">
            <Globe className="text-black text-2xl cursor-pointer" />
            <p className="text-[#555] font-medium text-lg cursor-pointer">
              {language}
            </p>
            <div className="cursor-pointer" onClick={handleOpen}>
              {isChevronDown ? (
                <ChevronDown className="w-5 h-5 text-[#555] hover:text-[#17a2b8]" />
              ) : (
                <ChevronUp className="w-5 h-5 text-[#555] hover:text-[#17a2b8]" />
              )}
            </div>
            {isChevronDown && (
              <div className="absolute top-10 right-0 bg-white w-36 shadow-md rounded-md z-50">
                {['English', 'French', 'Kinyarwanda'].map((n) => (
                  <p
                    key={n}
                    onClick={() => {
                      setLanguage(n);
                      setIsChevronDown(false);
                    }}
                    className="py-2 px-4 hover:bg-[#17a2b8] cursor-pointer text-center"
                  >
                    {n}
                  </p>
                ))}
              </div>
            )}
          </div>
          <div className="flex items-center space-x-4">
            <div onClick={toggleTheme}>
              {isDarkMode ? (
                <Moon className="text-2xl hover:text-[#17a2b8] cursor-pointer" />
              ) : (
                <Sun className="text-2xl hover:text-[#17a2b8] cursor-pointer" />
              )}
            </div>
            <li className="bg-[#DB2777] px-3 py-1 rounded hover:bg-[#FFB6C1]">
              <Link className="text-[#E6E6FA] hover:text-black" to="/signIn">
                Sign In
              </Link>
            </li>
            <li className="border-2 border-[#FFB6C1] px-3 py-1 rounded hover:bg-[#FFB6C1]">
              <Link to="/createAccount">Create Account</Link>
            </li>
          </div>
        </ul>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden mt-4 space-y-3">
          <div className="flex items-center space-x-2">
            <Globe className="text-black text-xl cursor-pointer" />
            <span>{language}</span>
            <div onClick={handleOpen} className="cursor-pointer">
              {isChevronDown ? (
                <ChevronDown className="w-5 h-5 text-[#555]" />
              ) : (
                <ChevronUp className="w-5 h-5 text-[#555]" />
              )}
            </div>
          </div>
          {isChevronDown && (
            <div className="bg-white w-36 shadow-md rounded-md">
              {['English', 'French', 'Kinyarwanda'].map((n) => (
                <p
                  key={n}
                  onClick={() => {
                    setLanguage(n);
                    setIsChevronDown(false);
                  }}
                  className="py-2 px-4 hover:bg-[#17a2b8] cursor-pointer text-center"
                >
                  {n}
                </p>
              ))}
            </div>
          )}
          <div className="flex flex-col space-y-2">
            <div onClick={toggleTheme}>
              {isDarkMode ? (
                <Moon className="text-2xl hover:text-[#17a2b8] cursor-pointer" />
              ) : (
                <Sun className="text-2xl hover:text-[#17a2b8] cursor-pointer" />
              )}
            </div>
            <Link
              to="/signIn"
              className="bg-[#DB2777] px-3 py-1 rounded hover:bg-[#FFB6C1] text-center font-semibold text-[#E6E6FA] hover:text-black"
            >
              Sign In
            </Link>
            <Link
              to="/createAccount"
              className="border-2 border-[#FFB6C1] px-3 py-1 rounded hover:bg-[#FFB6C1] text-center font-semibold"
            >
              Create Account
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
