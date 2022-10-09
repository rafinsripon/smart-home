import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../image/home.png'
// import './Home.css'

const Home = () => {
    return (
        <div className="mains relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0 ">
          <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
            <div className=" lg:mt-40 lg:max-w-lg lg:pr-5">
              <div className="max-w-xl mb-6">
                <div>
                  <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider bg-lime-400 text-teal-900 uppercase rounded-full bg-teal-accent-400">
                    New Colaboration
                  </p>
                </div>
                <h2 className="max-w-lg mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                  Create a Best Smart Home
                  jumps over{' '}
                  <span className="inline-block text-deep-purple-accent-400 mt-2">
                    In City
                  </span>
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                  quae. explicabo.
                </p>
              </div>
              <div className="flex flex-col items-center md:flex-row">
                <Link
                  to="/shop"
                  className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide bg-pink-500 text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                >
                Show Now
                </Link>
                <Link
                  to="/about"
                  aria-label=""
                  className="inline-flex items-center font-semibold border-2 border-rose-400 px-6 py-2 text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>
          <div className="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mt-8 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
            <img className='w-full' src={banner}
              alt=""
            />
          </div>
        </div>
      );
};

export default Home;