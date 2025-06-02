import React from "react";
import { Link } from "react-router-dom";
import foodLogo from "../../assets/food-logo.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-yellow-600 text-white pt-12 pb-6">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and About */}
          <div>
            <div className="flex items-center mb-4">
              <img
                src={foodLogo}
                alt="FoodieApp Logo"
                className="h-8 w-8 mr-2"
              />
              <span className="title-lg text-white font-bold text-xl">
                FoodieApp
              </span>
            </div>
            <p className="text-white/70 mb-4">
              Delicious food delivered to your doorstep. Fast, reliable, and
              tasty.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-secondary">
                <span>📱</span>
              </a>
              <a href="#" className="text-white hover:text-secondary">
                <span>📱</span>
              </a>
              <a href="#" className="text-white hover:text-secondary">
                <span>📱</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-white/70 hover:text-secondary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/menu"
                  className="text-white/70 hover:text-secondary transition-colors"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  to="/offers"
                  className="text-white/70 hover:text-secondary transition-colors"
                >
                  Offers
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white/70 hover:text-secondary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/category/veg"
                  className="text-white/70 hover:text-secondary transition-colors"
                >
                  Vegetarian
                </Link>
              </li>
              <li>
                <Link
                  to="/category/non-veg"
                  className="text-white/70 hover:text-secondary transition-colors"
                >
                  Non-Vegetarian
                </Link>
              </li>
              <li>
                <Link
                  to="/category/desserts"
                  className="text-white/70 hover:text-secondary transition-colors"
                >
                  Desserts
                </Link>
              </li>
              <li>
                <Link
                  to="/category/beverages"
                  className="text-white/70 hover:text-secondary transition-colors"
                >
                  Beverages
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-white/70 mb-2">
              <span className="mr-2">📍</span> 123 Food Street, Cuisine City
            </p>
            <p className="text-white/70 mb-2">
              <span className="mr-2">📞</span> +1 (555) 123-4567
            </p>
            <p className="text-white/70">
              <span className="mr-2">✉️</span> info@foodieapp.com
            </p>
          </div>
        </div>

        <div className="divide mb-6"></div>

        <div className="text-center text-white/50 text-sm">
          <p>
            &copy; {new Date().getFullYear()} FoodieApp. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
