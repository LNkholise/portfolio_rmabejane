import { NavLink } from 'react-router-dom';
import { Menu, X, LinkedinIcon } from 'lucide-react';
import React from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 max-w-6xl bg-white/90 backdrop-blur-md text-gray-800 w-full px-4 rounded-md shadow-md ml-2">
      <div className="flex justify-between items-center px-4 py-3 sm:px-6">
        <div className="h-10 w-10 flex items-center sm:h-12 sm:w-12">
          <NavLink to="/"><img src="logo.png" alt="MyApp" className="h-full w-auto" /></NavLink>
        </div>

        {/* Desktop Menu */}
        <ul className="md:flex hidden navbar-menu space-x-6 text-xs font-light uppercase">
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'text-blue-500 font-semibold' : 'text-gray-800')}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/selected-works" className={({ isActive }) => (isActive ? 'text-blue-500 font-semibold' : 'text-gray-800')}>
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? 'text-blue-500 font-semibold' : 'text-gray-800')}>
              Contact
            </NavLink>
          </li>
        </ul>

        <a
          href="https://www.linkedin.com/in/refiloemabejane"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex"
        >
          <button className="flex items-center gap-2 rounded-md bg-blue-700 p-2 text-white hover:bg-blue-600 transition">
            <LinkedinIcon size={16} />
          </button>
        </a>



        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <ul className={`md:hidden overflow-hidden text-xs transition-all duration-300 ease-in-out bg-transparent bg-none backdrop-blur-sm px-4 ${isOpen ? 'max-h-96 py-4' : 'max-h-0 py-0'}`}>
        <li className="py-1">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'text-blue-600 font-semibold' : 'text-gray-800')}>
            Home
          </NavLink>
        </li>
        <li className="py-1">
          <NavLink to="/selected-works" className={({ isActive }) => (isActive ? 'text-blue-600 font-semibold' : 'text-gray-800')}>
            About Me
          </NavLink>
        </li>
        <li className="py-1">
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'text-blue-600 font-semibold' : 'text-gray-800')}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
