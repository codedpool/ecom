import { useState } from "react";
import { HiMagnifyingGlass, HiMiniXMark } from "react-icons/hi2";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSearchToggle = () => setIsOpen(!isOpen);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() === "") return;
    console.log("Searching for:", searchTerm);
    setIsOpen(false); // Keep open if needed
  };

  const handleClearSearch = () => {
    setSearchTerm("");
    setIsOpen(false);
  };

  return (
    <div
      className={`flex items-center justify-center w-full transition-all duration-300 ${
        isOpen ? "absolute top-0 left-0 w-full bg-white h-24 z-50" : "w-auto"
      }`}
    >
      {isOpen ? (
        <form onSubmit={handleSearch} className="relative flex items-center justify-center w-full">
          <div className="relative w-1/2">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-gray-100 px-4 py-2 pr-20 rounded-lg focus:outline-none w-full placeholder:text-gray-700"
              placeholder="Search..."
            />
            {/* Search Icon (Submit Button) */}
            <button
              type="submit"
              className="absolute right-10 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-black"
            >
              <HiMagnifyingGlass className="h-5 w-5" />
            </button>

            {/* Close (X) Button */}
            <button
              type="button"
              onClick={handleClearSearch}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-black"
            >
              <HiMiniXMark className="h-5 w-5" />
            </button>
          </div>
        </form>
      ) : (
        // Open Search Button
        <button
          onClick={handleSearchToggle}
          className="text-gray-700 hover:text-black"
        >
          <HiMagnifyingGlass className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
