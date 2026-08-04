import React from "react";
import { BiPhone } from "react-icons/bi";
import { BsInstagram, BsMeta, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-gray-300">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-0">
        <div>
          <h3 className="text-lg text-gray-800 mb-4">Newsletter</h3>
          <p className="text-sm text-gray-500 mb-4">
            Be the first to hear about our new products, Exclusive event, And
            online offers
          </p>
          <p className="text-sm text-gray-500 mb-4">
            Sign up and get 10% off your first order
          </p>

          <form className="flex">
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="p-3 w-full text-sm border-t border-b border-l border-gray-200 rounded-l-lg focus:outline-none focus:right-2 focus:ring-gray-400  transition-all"
            />
            <button className="bg-black text-white hover:bg-gray-800 transition-all cursor-pointer  text-sm  rounded-r-lg px-2">
              Subscribe
            </button>
          </form>
        </div>

        <div>
          <h3 className="text-lg text-gray-800 mb-4">Shop</h3>
          <p className="text-gray-600 mb-2 text-sm">Men's top wear</p>
          <p className="text-gray-600 text-sm mb-2">Women's top wear</p>
          <p className="text-gray-600 mb-2 text-sm">Men's Bottom wear</p>
          <p className="text-gray-600 mb-2 text-sm">Women's Bottom wear</p>
        </div>

        <div>
          <h3 className="text-lg text-gray-800 mb-4">Support</h3>
          <p className="text-gray-600 mb-2 text-sm">Contact-Us</p>
          <p className="text-gray-600 text-sm mb-2">About Us </p>
          <p className="text-gray-600 mb-2 text-sm">FAQs</p>
          <p className="text-gray-600 mb-2 text-sm">Features</p>
        </div>

        <div>
          <h3 className="text-lg text-gray-800 mb-4">Follow Us</h3>
          <div className="flex items-center gap-5 mb-4">
            <BsMeta className="h-4 w-4 text-gray-700 hover:text-black cursor-pointer" />
            <BsInstagram className="h-4 w-4 text-gray-700 hover:text-black cursor-pointer" />
            <BsTwitter className="h-4 w-4 text-gray-700 hover:text-black cursor-pointer" />
          </div>

          <h3 className="text-lg text-gray-800 mb-4">Call Us</h3>
          <div className="flex items-center gap-2 mb-4">
            <BiPhone className="h-6 w-6 text-gray-700 hover:text-black cursor-pointer" />
            <p className=" text-black">+2126542220001</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-12 px-4 lg:px-0 border-t border-gray-300 pt-6 ">
        <p className="text-gray-600 text-sm text-center tracking-tighter ">
          &#169; 2025, Compiletab. All Right Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
