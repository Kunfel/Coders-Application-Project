import React from "react";
import "primeicons/primeicons.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/slices/themeSlice";

function DarkModeButton() {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.theme.mode);
  const isDark = mode === 'dark';

  const darkModeHandler = () => {
    dispatch(toggleTheme());
    document.body.classList.toggle("dark");
  };

  return (
    <div className="">
      <button 
        onClick={darkModeHandler}
        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
        title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      >
        {isDark ? (
          <i className="pi pi-sun text-yellow-500"></i>
        ) : (
          <i className="pi pi-moon text-gray-700"></i>
        )}
      </button>
    </div>
  );
}

export default DarkModeButton;