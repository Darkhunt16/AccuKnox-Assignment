import { useContext } from "react";
import { DashboardContext } from "../context/DashboardContext";
import Category from "./Category";
import SearchBar from "./SearchBar";

const Dashboard = () => {
  const { categories } = useContext(DashboardContext);

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      {/* Search Bar */}
      <div className="mb-6">
        <SearchBar />
      </div>

      {/* Categories Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
