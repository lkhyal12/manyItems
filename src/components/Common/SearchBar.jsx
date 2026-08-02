import { useState } from "react";
import { HiMagnifyingGlass, HiMiniXMark } from "react-icons/hi2";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  function handleSearch(e) {
    e.preventDefault();
    console.log(`searchterm: ${searchTerm}`);
  }
  return (
    <div
      className={`flex items-center justify-center w-full transition-all duration-300 ${isOpen ? "absolute top-0 left-0 w-full bg-white h-24 z-50 " : "w-auto"}`}
    >
      {isOpen ? (
        <form
          className="relative flex items-center justify-center w-full"
          onSubmit={handleSearch}
        >
          <div className="relative w-1/2 ">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              className="bg-gray-100 px-4 py-2 pl-2 rounded-lg focus:outline-none w-full placeholder:text-gray-700"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {/* search icon */}
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
            >
              <HiMagnifyingGlass className="size-6 text-gray-700" />
            </button>
          </div>
          {/* close btn */}
          <button
            type="button"
            onClick={handleToggle}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
          >
            <HiMiniXMark className="size-6" />
          </button>
        </form>
      ) : (
        <button onClick={handleToggle}>
          <HiMagnifyingGlass className="size-6 text-gray-700" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
