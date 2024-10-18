// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <section className="py-6 bg-gray-50 sm:pt-8 lg:pt-12"> {/* Reduced padding */}
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-10 gap-x-8"> {/* Reduced gap */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-6"> {/* Reduced padding right */}
            <img className="w-auto h-8" src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg" alt="" /> {/* Reduced logo height */}
            <p className="text-sm leading-relaxed text-gray-600 mt-4"> {/* Reduced font size */}
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
            </p>
            <ul className="flex items-center space-x-3 mt-6">
              {/* Social media icons */}
              {/* Add your icons here */}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Company</p>
            <ul className="mt-4 space-y-2"> {/* Reduced space */}
              <li><a href="#" className="flex text-sm text-black hover:text-blue-600">About</a></li> {/* Reduced font size */}
              <li><a href="#" className="flex text-sm text-black hover:text-blue-600">Features</a></li>
              <li><a href="#" className="flex text-sm text-black hover:text-blue-600">Works</a></li>
              <li><a href="#" className="flex text-sm text-black hover:text-blue-600">Career</a></li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Help</p>
            <ul className="mt-4 space-y-2"> {/* Reduced space */}
              <li><a href="#" className="flex text-sm text-black hover:text-blue-600">Customer Support</a></li>
              <li><a href="#" className="flex text-sm text-black hover:text-blue-600">Delivery Details</a></li>
              <li><a href="#" className="flex text-sm text-black hover:text-blue-600">Terms & Conditions</a></li>
              <li><a href="#" className="flex text-sm text-black hover:text-blue-600">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-6"> {/* Reduced padding left */}
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Subscribe to newsletter</p>
            <form action="#" method="POST" className="mt-4">
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input type="email" name="email" id="email" placeholder="Enter your email" className="block w-full p-2 text-black placeholder-gray-500 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600" /> {/* Reduced padding */}
              </div>
              <button type="submit" className="inline-flex items-center justify-center px-4 py-2 mt-2 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700">Subscribe</button> {/* Reduced padding */}
            </form>
          </div>
        </div>

        <hr className="mt-10 mb-6 border-gray-200" /> {/* Reduced margin */}
        <p className="text-sm text-center text-gray-600">© Abdallah Moharam 2024, All Rights Reserved by Postcraft</p>
      </div>
    </section>
  );
};

export default Footer;
