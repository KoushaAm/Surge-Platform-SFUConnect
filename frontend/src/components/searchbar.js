import React, { useState } from "react";
import { Link } from "react-router-dom";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const categories = ["Sports", "Academic", "Cultural", "Community Service", "Religious", "Science & Technology", "Arts", "Special Interest", "Student Government"]

  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSearch = async () => {
    try {
      setLoading(true);
      let url = "/clubs/";

      if (searchTerm && selectedCategory) {
        url += `search?term=${searchTerm}`;
      }
  
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
    <div className="flex flex-col pt-20 p-10">
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
          className="w-full px-3 py-2 border border-gray-300 rounded-md mr-2 focus:outline-none focus:border-orange-300"
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
          
      

      {/* Show loading animation */}
      {loading && 
        <div className="flex justify-center items-center h-screen">
          <div className="rounded-full h-20 w-20 bg-orange-500 animate-ping"></div>
        </div>
      }

      {/* Show message when no search results */}
      {!loading && searchResults.length === 0 && searchTerm && (
        <p className="text-center text-gray-600">No clubs found. Try a different search term or category.</p>
      )}

      {/* Show message when search bar is empty */}
      {!loading && searchResults.length === 0 && !searchTerm && (
        <p className="text-center text-gray-600">Search for clubs by typing in the search bar above.</p>
      )}

      {/* Display search results */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {searchResults.map((club) => (
          <Link
            key={club._id}
            to={`/app/clubs/${club._id}`}
            className="border rounded-md p-4 hover:shadow-lg transition duration-300 ease-in-out"
          >
            <h2 className="text-lg font-semibold mb-2">{club.title}</h2>
            <p className="text-gray-600 mb-2">{club.description}</p>
            <p className="text-orange-500">{club.category.join(", ")}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SearchBar;
