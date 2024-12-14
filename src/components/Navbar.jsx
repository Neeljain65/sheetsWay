import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center md:px-2">
        <div className="flex items-center">
          <span className="text-xl font-bold">Logo Here</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-4 cursor-pointer font-bold">
            <li>
              <a href="/" className="text-gray-700 hover:text-red-500">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="text-gray-700 hover:text-red-500">
                About us
              </a>
            </li>
            <li>
              <a href="/services" className="text-gray-700 hover:text-red-500">
                Services
              </a>
            </li>
            <li>
              <a href="/tours" className="text-gray-700 hover:text-red-500">
                Tour Listing
              </a>
            </li>
            <li>
              <a
                href="/registration"
                className="text-gray-700 hover:text-red-500"
              >
                Supplier Registration
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="bg-[#FFCACA] px-4 py-2 rounded-md hover:bg-red-600 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>

        {/* Desktop Sign Up Button */}
        <button className="bg-[#FFCACA] px-4 py-2 rounded-md hover:bg-red-600 hidden md:block">
          Sign Up
        </button>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="z-50 absolute top-full left-0 w-full bg-white shadow-md md:hidden">
            <nav>
              <ul className="flex flex-col">
                <li className="border-b border-gray-200">
                  <a
                    href="/"
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </a>
                </li>
                <li className="border-b border-gray-200">
                  <a
                    href="/about"
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About us
                  </a>
                </li>
                <li className="border-b border-gray-200">
                  <a
                    href="/services"
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Services
                  </a>
                </li>
                <li className="border-b border-gray-200">
                  <a
                    href="/tours"
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Tour Listing
                  </a>
                </li>
                <li className="border-b border-gray-200">
                  <a
                    href="/registration"
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Supplier Registration
                  </a>
                </li>
                <li>
                  <a
                    href="/signup"
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-100 md:hidden"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign Up
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;