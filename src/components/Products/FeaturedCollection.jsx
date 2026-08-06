// import React from "react";
import { Link } from "react-router-dom";
import featuredImg from "../../assets/featured.webp";
const FeaturedCollection = () => {
  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center bg-green-50 rounded-3xl">
        {/* left conetent */}
        <div className="lg:w-1/2 p-8 text-center lg:text-left">
          <h2 className="text-lg font-semibold text-gray-700 mb-2 ">
            Comfort and style
          </h2>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Apparel made for your everyday life
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Discover high-quality, comfortable clothing that effortlessly blends
            fashion and function. Designed to make you look and feel great day.
          </p>
          <Link
            to="collections/all"
            className="text-white bg-black px-6 py-3 rounded-lg text-lg hover:bg-gray-900"
          >
            Shop Now
          </Link>
        </div>

        {/* right side */}
        <div className="lg:w-1/2">
          <img
            src={featuredImg}
            alt=""
            className="w-full h-full object-cover rounded-tr-2xl rounded-br-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
