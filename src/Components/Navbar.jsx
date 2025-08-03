import React, { useState } from 'react';
import logo from '../assets/image/apple_logo.svg';
import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  Bars2Icon,
  XMarkIcon,
} from '@heroicons/react/24/solid';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Keyboard accessibility for menu toggle
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') toggleMenu();
  };

  // Menu items array to keep it DRY
  const menuItems = [
    'Store',
    'Mac',
    'iPad',
    'iPhone',
    'Watch',
    'AirPods',
    'TV & Home',
    'Entertainment',
    'Accessories',
    'Support',
  ];

  return (
    <>
      {/* Mobile Navbar */}
      <nav className="md:hidden bg-gray-100 py-2 shadow-sm">
        <div className="flex justify-between items-center px-4 py-2">
          <img src={logo} alt="Apple logo" style={{ height: '24px' }} />

          <ul className="flex gap-6 items-center">
            <li>
              <MagnifyingGlassIcon
                style={{ height: '20px', width: '24px', color: 'black' }}
                aria-label="Search"
                role="button"
                tabIndex={0}
              />
            </li>
            <li>
              <ShoppingBagIcon
                style={{ height: '20px', width: '24px', color: 'black' }}
                aria-label="Shopping Bag"
                role="button"
                tabIndex={0}
              />
            </li>
            <li>
              {menuOpen ? (
                <XMarkIcon
                  onClick={toggleMenu}
                  onKeyDown={handleKeyDown}
                  style={{ height: '24px', width: '24px', color: 'black', cursor: 'pointer' }}
                  role="button"
                  tabIndex={0}
                  aria-label="Close menu"
                />
              ) : (
                <Bars2Icon
                  onClick={toggleMenu}
                  onKeyDown={handleKeyDown}
                  style={{ height: '25px', width: '30px', color: 'black', cursor: 'pointer' }}
                  role="button"
                  tabIndex={0}
                  aria-label="Open menu"
                />
              )}
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden px-4 transition-all duration-500 ease-in-out overflow-hidden ${
            menuOpen ? 'max-h-screen opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-5'
          }`}
          aria-hidden={!menuOpen}
        >
          <ul className="flex flex-col gap-4 py-6 px-2">
            {menuItems.map((item) => (
              <li
                key={item}
                className="text-black text-2xl font-semibold cursor-pointer hover:text-blue-700 transition"
                tabIndex={0}
                role="menuitem"
                onKeyDown={(e) => e.key === 'Enter' && alert(`Clicked on ${item}`)} // example action
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Desktop Navbar */}
      <nav className="hidden md:flex justify-center items-center bg-gray-100 py-4 px-10 shadow-sm">
        <img src={logo} alt="Apple logo" className="h-[15px] mr-[44px]" />
        <ul className="flex gap-10">
          {menuItems.map((item) => (
            <li
              key={item}
              className="text-gray-600 font-normal text-[12px] hover:text-gray-900 cursor-pointer transition"
              tabIndex={0}
              role="menuitem"
              onKeyDown={(e) => e.key === 'Enter' && alert(`Clicked on ${item}`)}
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="flex gap-6 ml-10">
          <MagnifyingGlassIcon
            className="h-5 w-5 text-gray-600 cursor-pointer hover:text-gray-900 transition"
            aria-label="Search"
            role="button"
            tabIndex={0}
          />
          <ShoppingBagIcon
            className="h-5 w-5 text-gray-600 cursor-pointer hover:text-gray-900 transition"
            aria-label="Shopping Bag"
            role="button"
            tabIndex={0}
          />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
