import React from "react";
import "primeicons/primeicons.css";

function DarkModeButton() {
  const [dark, setDark] = React.useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  return (
    <div className="bg-lightMode dark:bg-darkMode">
      <button onClick={() => darkModeHandler()}>
        {dark && <i className="pi pi-sun"></i>}
        {!dark && <i className="pi pi-moon"></i>}
      </button>
    </div>
  );
}
export default DarkModeButton;
