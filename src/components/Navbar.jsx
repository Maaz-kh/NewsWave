import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/newsWave.png";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const NavBarItems = [
    "home", "business", "entertainment", "general", "health", "science", "sports", "technology"
  ];

  return (
    <nav className="bg-gray-900 text-white fixed top-0 w-full z-50 shadow-md">
      <div className="container mx-auto px-4 flex justify-between lg:justify-around items-center py-3 relative">

        <a href="/" className="flex items-center">
          <img src={logo} alt="NewsApp Logo" className="h-10" />
        </a>


        <button
          className="lg:hidden text-white focus:outline-none text-2xl"
          onClick={() => setIsOpen(!isOpen)}

        >
          ☰
        </button>

        <div className={`lg:flex lg:items-center lg:space-x-6 
              ${isOpen ? "absolute left-0 top-full bg-gray-900 w-full shadow-lg flex flex-col space-y-4 p-4" : "hidden"}  
              lg:relative lg:block lg:bg-transparent lg:p-0 lg:space-y-0`}>


          <ul className="flex flex-col md:flex-col md:space-x-6 text-center lg:space-x-6 lg:flex-row">
            {NavBarItems.map((item) => (
              <li key={item}>
                <NavLink
                  to={item === "home" ? "/" : `/${item}`}
                  end={item === "home"}
                  className={({ isActive }) =>
                    `block py-2 px-4 rounded-md ${isActive ? "text-white bg-blue-800" : "text-gray-300 hover:text-white"
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
