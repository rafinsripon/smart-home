import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CartContext } from '../layouts/Root';
import { HiShoppingCart } from "react-icons/hi";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [cart] = useContext(CartContext);
    return (
        <div className="bg-gray-900">
          <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div className="relative flex items-center justify-between">
              <div className="flex items-center">
                <Link
                  to="/"
                  aria-label="Company"
                  title="Company"
                  className="inline-flex items-center mr-8"
                >
                  <svg
                    className="w-8 text-teal-accent-400 text-cyan-500"
                    viewBox="0 0 24 24"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    stroke="currentColor"
                    fill="none"
                  >
                    <rect x="3" y="1" width="7" height="12" />
                    <rect x="3" y="17" width="7" height="6" />
                    <rect x="14" y="1" width="7" height="6" />
                    <rect x="14" y="11" width="7" height="12" />
                  </svg>
                  <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                    Smart Home
                  </span>
                </Link>
                <ul className="flex items-center hidden space-x-8 lg:flex text-white">
                  <li>
                    <NavLink
                      to="/"
                      aria-label="Our product"
                      title="Our product"
                      className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/shop"
                      aria-label="Product pricing"
                      title="Product pricing"
                      className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                    >
                      Shop
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/cart"
                      aria-label="Product pricing"
                      title="Product pricing"
                      className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                    >
                      <div className='relative'>
                        <p className='text-3xl'><HiShoppingCart /></p>
                        <p className='absolute -top-2 w-6 h-6 text-center rounded-full bg-orange-400 text-gray-100 text-2xl text-semibold left-4 leading-6'>{cart.length}</p>
                      </div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/about"
                      aria-label="Our product"
                      title="Our product"
                      className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                    >
                      About
                    </NavLink>
                  </li>
                </ul>
              </div>
              
              <div className="lg:hidden">
                <button
                  aria-label="Open Menu"
                  title="Open Menu"
                  className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                  onClick={() => setIsMenuOpen(true)}
                >
                  <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                    />
                    <path
                      fill="currentColor"
                      d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                    />
                    <path
                      fill="currentColor"
                      d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                    />
                  </svg>
                </button>
                {isMenuOpen && (
                  <div className="absolute top-0 left-0 w-full">
                    <div className="p-5 bg-white border rounded shadow-sm">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <Link
                            to="/"
                            aria-label="Company"
                            title="Company"
                            className="inline-flex items-center"
                          >
                            <svg
                              className="w-8 text-deep-purple-accent-400"
                              viewBox="0 0 24 24"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeMiterlimit="10"
                              stroke="currentColor"
                              fill="none"
                            >
                              <rect x="3" y="1" width="7" height="12" />
                              <rect x="3" y="17" width="7" height="6" />
                              <rect x="14" y="1" width="7" height="6" />
                              <rect x="14" y="11" width="7" height="12" />
                            </svg>
                            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                              Smart Home
                            </span>
                          </Link>
                        </div>
                        <div>
                          <button
                            aria-label="Close Menu"
                            title="Close Menu"
                            className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                              <path
                                fill="currentColor"
                                d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <nav>
                        <ul className="space-y-4">
                          <li>
                            <NavLink
                              to="/"
                              aria-label="Our product"
                              title="Our product"
                              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                              Home
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/shop"
                              aria-label="Product pricing"
                              title="Product pricing"
                              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                              Shop
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/cart"
                              aria-label="Product pricing"
                              title="Product pricing"
                              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                             <div className='relative'>
                              <p className='text-3xl'><HiShoppingCart /></p>
                              <p className='absolute -top-2 w-6 h-6 text-center rounded-full bg-orange-400 text-gray-100 text-2xl text-semibold left-4 leading-6'>{cart.length}</p>
                            </div>
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/about"
                              aria-label="Our product"
                              title="Our product"
                              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                              About
                            </NavLink>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      );
};

export default Header;