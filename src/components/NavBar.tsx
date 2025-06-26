import Moon from "../assets/images/icon-moon.svg";
import Sun from "../assets/images/icon-sun.svg";
import { useState } from "react";

const NavBar = () => {
  const [darkMode, setDarkMode] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  const toggleMode = () => {
    const isCurrentlyDark = document.documentElement.classList.contains("dark");

    document.documentElement.classList.remove(
      isCurrentlyDark ? "dark" : "light"
    );
    document.documentElement.classList.add(isCurrentlyDark ? "light" : "dark");

    setDarkMode(!isCurrentlyDark);
  };

  return (
    <nav>
      <div className="grid grid-cols-2">
        <div>
          <h1 className="text-2xl font-bold dark:text-white">devfinder</h1>
        </div>
        <div className="flex justify-end items-center">
          <button className="flex cursor-pointer" onClick={toggleMode}>
            <span className="mr-4">{darkMode ? "Light" : "Dark"}</span>
            <img src={darkMode ? Sun : Moon} alt="" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
