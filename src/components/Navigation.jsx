import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { MdLanguage } from 'react-icons/md';
import { MdLightMode } from 'react-icons/md';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('English');

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="flex flex-row justify-around items-center w-full h-16 bg-[#F8F9FA]">
      <h1>SALON FLOW</h1>
      <ul className="flex flex-row gap-3">
        <div className="flex flex-row justify-center items-center">
          <MdLanguage className="text-black text-3xl" />
          <p className="text-[#555555] font-medium text-[20px]">
            <span className="text-[#555555]">{name}</span>
          </p>
          <div
            className=" w-10 h-6 flex flex-col justify-center items-center"
            onClick={handleOpen}
          >
            {isOpen ? (
              <ChevronDown className="w-10 h-6 text-[#555555]" />
            ) : (
              <ChevronUp className="w-10 h-6 text-[#555555]" />
            )}
          </div>

          {isOpen && (
            <div className="bg-white w-36 p-3 ">
              {['English', 'French', 'Kinyarwanda'].map((n) => (
                <p
                  key={n}
                  className="hover:bg-yellow-400 cursor-pointer"
                  onClick={() => setName(n)}
                >
                  {n}
                </p>
              ))}
            </div>
          )}
        </div>
        <MdLightMode className="text-3xl text-center" />
        <li className="bg-[#FFB6C1] pr-3 pl-3 pt-0.5 pb-0.5 rounded-md">
          <Link to="/">Sign In</Link>
        </li>
        <li className="border-sold border-[#FFB6C1] border-4 pr-3 pl-3 pt-0.5 pb-0.5 rounded-md">
          <Link to="/">Create Account</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
