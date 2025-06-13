import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import foodLogo from "../../assets/food-logo.png"; // Update path as needed

const NavBar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  
  // Mock cart items count - in a real app, this would come from context or Redux
  const cartItemsCount = 3;

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

            {/* Cart Icon for Desktop */}
            <Link 
              to="/add-to-cart" 
              className="relative hover:text-main transition-colors duration-200"
              aria-label="Shopping Cart"
            >
              <svg 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
                />
              </svg>
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-main text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Link>
          </div>
          
          {/* Mobile menu button and cart icon */}
          <div className="md:hidden flex items-center">
            {/* Cart Icon for Mobile */}
            <Link 
              to="/add-to-cart" 
              className="relative mr-4 text-primary hover:text-main transition-colors duration-200"
              aria-label="Shopping Cart"
            >
              <svg 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
                />
              </svg>
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-main text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Link>
            
            {/* Mobile menu hamburger button */}
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
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;