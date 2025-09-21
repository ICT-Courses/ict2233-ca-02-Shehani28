import {NavLink} from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = ({ darkMode, setDarkMode}) => {
  return (
    <nav className="fixed top-0 left-0 w-full p-2 flex justify-between items-center bg-white dark:bg-gray-800 z-50 shadow pl-8 text-white">
      <div className={StyleSheetList.brand}>
        <NavLink to="/">Shehani</NavLink>
      </div>

      <div className="flex item-center space-x-4">
        <NavLink to="/" className={({isActive}) => `${styles.link} ${isActive ? styles.activeLink : ""}`}> Home </NavLink>

        <NavLink to="/about" className={({isActive}) => `${styles.link} ${isActive ? styles.activeLink : ""}`}>About</NavLink>

        <NavLink to="/projects" className={({isActive}) => `${styles.link} ${isActive ? styles.activeLink : ""}`}>Projects</NavLink>

        <NavLink to="/contact" className={({isActive}) => `${styles.link} ${isActive ? styles.activeLink : ""}`}>Contact</NavLink>
      
        <button onClick={() => setDarkMode(!darkMode)} className="px-3 py-1 border rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition">
          {darkMode ? "🌙 Dark" : "☀ Light"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;