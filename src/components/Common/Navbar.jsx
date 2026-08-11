import { useState } from "react";
import { HiOutlineShoppingBag, HiOutlineUser } from "react-icons/hi";
import { HiBars3BottomRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import CartDrawer from "../Layout/CartDrawer";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);

  const toggleNavDrawer = () => setNavDrawerOpen(!navDrawerOpen);
  function handleDrawerToggle() {
    setDrawerOpen(!drawerOpen);
  }
  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        <div>
          <Link to="/" className="text-2xl font-bold">
            ManyItems
          </Link>
        </div>

        <div className="hidden md:flex space-x-6">
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Men
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Women
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Top Wear
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Bottom Wear
          </Link>
        </div>

        {/* right icons */}
        <div className="flex items-center space-x-4">
          <Link to="/profile" className="hover:text-black">
            <HiOutlineUser className="size-6 text-gray-700" />
          </Link>
          <button
            className="relative hover:text-black cursor-pointer"
            onClick={handleDrawerToggle}
          >
            <HiOutlineShoppingBag className="size-6 text-gray-700" />
            <span className="absolute -top-1  bg-rabbit-red text-white text-xs rounded-full px-2 py-0.5">
              4
            </span>
          </button>
          {/* search */}

          <div className="overflow-hidden">
            <SearchBar />
          </div>

          <button onClick={toggleNavDrawer} className="md:hidden">
            <HiBars3BottomRight className="size-6 text-gray-700" />
          </button>
        </div>
      </nav>

      <CartDrawer
        handleDrawerToggle={handleDrawerToggle}
        drawerOpen={drawerOpen}
        setDrawerOpen={setDrawerOpen}
      />

      {/* mobile navigation */}
      <div
        className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-120 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${navDrawerOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleNavDrawer}>
            <IoMdClose className="size-6 text-gray-600" />
          </button>
        </div>
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-4">Menu</h2>
          <nav className="space-y-5">
            <Link
              to="#"
              className="block text-gray-600 hover:text-black"
              onClick={toggleNavDrawer}
            >
              Men
            </Link>

            <Link
              to="#"
              className="block text-gray-600 hover:text-black"
              onClick={toggleNavDrawer}
            >
              Women
            </Link>

            <Link
              to="#"
              className="block text-gray-600 hover:text-black"
              onClick={toggleNavDrawer}
            >
              Top Wear
            </Link>

            <Link
              to="#"
              className="block text-gray-600 hover:text-black"
              onClick={toggleNavDrawer}
            >
              Bottom Wear
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
