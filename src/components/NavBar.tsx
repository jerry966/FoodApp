import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import foodLogo from "../assets/food-logo.png"; // Update path as needed

const NavBar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  // Active link styling
  const activeLinkClass = "text-main font-bold";
  const normalLinkClass =
    "text-primary hover:text-main transition-colors duration-200";

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center">
            <img src={foodLogo} alt="FoodieApp Logo" className="h-8 w-8 mr-2" />
            <span className="title-lg text-main font-bold text-xl">
              FoodieApp
            </span>
          </Link>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`subtitle-primary ${
                location.pathname === "/" ? activeLinkClass : normalLinkClass
              }`}
            >
              Home
            </Link>
            <Link
              to="/offers"
              className={`subtitle-primary ${
                location.pathname === "/offers"
                  ? activeLinkClass
                  : normalLinkClass
              }`}
            >
              Offers
            </Link>

            {/* Categories Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="subtitle-primary flex items-center text-primary hover:text-main focus:outline-none"
              >
                Categories
                <svg
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown menu */}
              {showDropdown && (
                <div className="absolute mt-2 w-40 bg-white rounded-md shadow-lg py-1 z-10">
                  <Link
                    to="/category/veg"
                    className="block px-4 py-2 subtitle-secondary hover:bg-secondary/10"
                    onClick={() => setShowDropdown(false)}
                  >
                    Veg
                  </Link>
                  <Link
                    to="/category/non-veg"
                    className="block px-4 py-2 subtitle-secondary hover:bg-secondary/10"
                    onClick={() => setShowDropdown(false)}
                  >
                    Non-Veg
                  </Link>
                </div>
              )}
            </div>

            {/* Search */}
            {/* <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
              />
              <div className="absolute left-3 top-2.5">
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <button className="bg-secondary text-white px-6 py-2.5 rounded-lg ml-2 subtitle-primary">
                Search
              </button>
            </div> */}
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4">
            <Link
              to="/"
              className={`block py-2 px-4 subtitle-primary ${
                location.pathname === "/" ? "text-main" : "text-primary"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/offers"
              className={`block py-2 px-4 subtitle-primary ${
                location.pathname === "/offers" ? "text-main" : "text-primary"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Offers
            </Link>
            <div className="py-2 px-4">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="subtitle-primary flex items-center text-primary"
              >
                Categories
                <svg
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={showDropdown ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
                  />
                </svg>
              </button>
              {showDropdown && (
                <div className="pl-4 mt-2">
                  <Link
                    to="/category/veg"
                    className="block py-2 subtitle-secondary"
                    onClick={() => {
                      setShowDropdown(false);
                      setIsOpen(false);
                    }}
                  >
                    Veg
                  </Link>
                  <Link
                    to="/category/non-veg"
                    className="block py-2 subtitle-secondary"
                    onClick={() => {
                      setShowDropdown(false);
                      setIsOpen(false);
                    }}
                  >
                    Non-Veg
                  </Link>
                </div>
              )}
            </div>
            {/* <div className="flex items-center py-2 px-4">
              <input
                type="text"
                placeholder="Search"
                className="px-4 py-2 rounded-lg border border-gray-300 w-full"
              />
              <button className="bg-secondary text-white px-3 py-2 rounded-lg ml-2 subtitle-primary">
                Search
              </button>
            </div> */}
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
