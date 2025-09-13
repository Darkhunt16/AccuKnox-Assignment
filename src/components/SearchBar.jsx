import { useContext } from "react";
import { DashboardContext } from "../context/DashboardContext";

const SearchBar = () => {
  const { searchQuery, setSearchQuery } = useContext(DashboardContext);

  return (
    <input
      type="text"
      placeholder="Search widgets..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="w-full max-w-sm px-4 py-2 border border-gray-300 rounded-lg shadow-sm 
                 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    />
  );
};

export default SearchBar;
