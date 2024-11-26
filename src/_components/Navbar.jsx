import React, { useState } from "react";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="">
      <header className="px-4 py-2 flex justify-between items-center bg-light-NavbarBg  ">
        <div className="flex items-center px-2">
          {/* logo*/}
          <svg
            width="53"
            height="60"
            viewBox="0 0 53 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
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
          {/* link */}
          <nav className="flex items-center justify-start mx-1 space-x-7 text-gray-600 font-bold">
            <p>CodeCLA</p>
            <a href="#" className="hover:underline">
              Challenges
            </a>
            <a href="./LeaderBoard" className="hover:underline">
              Leaderboard
            </a>
          </nav>
        </div>

        <div className="flex items-center  space-x-4">
          {/* Profile Section */}
          <div className="relative">
            <button
              className="flex items-center space-x-2"
              onClick={toggleDropdown}
            >
              <img
                src="https://via.placeholder.com/40"
                alt="User Avatar"
                className=" w-10 h-10 rounded-full border border-gray-500"
              />
              <span className=" hidden md:inline">User Name</span>
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className=" absolute right-0 mt-2 bg-white text-black rounded shadow-md w-40">
                <a
                  href="#profile"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Profile
                </a>
                <a href="#logout" className="block px-4 py-2 hover:bg-gray-100">
                  Logout
                </a>
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};
export default Navbar;
