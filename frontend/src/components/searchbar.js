import React, { useState } from "react";

// http://localhost:8000/clubs/category?term=categoryName
// http://localhost:8000/clubs/search?term=searchTerm
function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const categories = ["Academic", "Arts", "Athletic", "Cultural", "Political", "Religious", "Service", "Social", "Other"];
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSearch = async () => {
    try {
      setLoading(true);
      let url = "/clubs/";
  
      // Add search term to URL if it's not empty
      if (searchTerm & selectedCategory) {
        url += `search?term=${searchTerm}`;
      }
  
      // Add category to URL if it's selected
      if (selectedCategory) {
        url += `category?term=${selectedCategory}`;
      }

      if (!searchTerm && !selectedCategory) {
        url = "/clubs";
      }

      if (searchTerm) { 
        url += `search?term=${searchTerm}`;
      }
  
      const response = await fetch(url);
      const data = await response.json();
      setSearchResults(data);
      setLoading(false);
    } catch (error) {
      console.error("Error searching clubs:", error);
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center pt-20 p-40">
      <div className="flex items-center mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleSearch();
            }
          }}
          placeholder="Search Clubs"
          className="px-3 py-2 border border-gray-300 rounded-md mr-2 focus:outline-none focus:border-orange-300"
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
        >
          <option value="">All Categories</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>
        <button
          onClick={handleSearch}
          disabled={loading}
          className="px-4 py-2 bg-orange-500 text-white rounded-md ml-2 transition-colors duration-300 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          Search
        </button>
      </div>
      
      {loading && <p>Loading...</p>}

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {searchResults.map((club) => (
          <div key={club._id} className="border rounded-md p-4">
            <h2 className="text-lg font-semibold mb-2">{club.title}</h2>
            <p className="text-gray-600 mb-2">{club.description}</p>
            {/* put comma in between categories */}
            <p className="text-orange-500"> {club.category.join(", ")}</p>

            {/* // <p className="text-blue-500">{club.category}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchBar;
