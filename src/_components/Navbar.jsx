import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import DarkModeButton from "./DarkModeButton";
import { Button } from "@headlessui/react";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="sticky top-0 z-50">
      <header className="px-4 py-2 flex justify-between items-center bg-light-NavbarBg dark:bg-dark-NavbarBg shadow-md">
        <div className="flex items-center px-2">
          {/* Logo */}
         
            <svg width="53" height="60" viewBox="0 0 53 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M52.0254 14.9355L26.0127 0.0012207L0 14.9355V28.3419L6.01866 24.869V18.3912L26.0127 6.91258L46.0067 18.3912V20.9626L52.0254 17.489V14.9355Z"
              fill="#23155B"
            />
            <path
              d="M46.0067 41.3473L26.0127 52.8258L6.01864 41.3473V35.633L14.7957 30.568L22.0771 34.7709L28.6855 30.9566L21.4033 26.7544L14.7949 22.9395L8.18649 26.7544L6.02083 28.0044L0.00213623 31.478V44.8023L26.0148 59.7366L52.0275 44.8023V31.3959L46.0089 34.8695L46.0067 41.3473Z"
              fill="#23155B"
            />
            <path
              d="M46.0067 24.103L31.4072 32.5315L24.7988 36.3458L31.4072 40.1609L38.0156 36.3458L46.0045 31.7351L52.0232 28.2615V20.6301L46.0067 24.103Z"
              fill="#8053FF"
            />
            </svg>
            <Link to="/" className="ml-2 text-lg font-medium text-gray-600 dark:text-white hover:underline">CodeCLA</Link>
            
          
          {/* Navigation Links */}
          <nav className="flex items-center justify-start mx-6 space-x-8 text-lg">
            <Link 
              to="/challenges" 
              className="text-gray-600 dark:text-white hover:underline font-medium transition-colors"
            >
              Challenges
            </Link>
            <Link 
              to="/leaderboard" 
              className="text-gray-600 dark:text-white hover:underline font-medium transition-colors"
            >
              Leaderboard
            </Link>
          </nav>
        </div>

        <div className="flex items-center space-x-6">
          <DarkModeButton />
          
          {/* Profile Section */}
          <div className="relative" ref={dropdownRef}>
            <button
              className="flex items-center space-x-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full py-1 px-2 transition-colors"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <img
                src="https://i.pravatar.cc/150?img=13"
                alt="User Avatar"
                className="w-10 h-10 rounded-full border-2 border-gray-200 dark:border-gray-600"
              />
              <span className="hidden md:inline text-gray-700 dark:text-gray-200 font-medium">Username</span>
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-dark-NavbarBg rounded-lg shadow-lg py-1 border border-gray-200 dark:border-gray-700">
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Profile
                </Link>
                
                <Button
                  className="w-full  px-4 py-2 text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => {}}
                >
                  Logout
                </Button>
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;