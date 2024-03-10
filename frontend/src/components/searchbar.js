import React, { useState } from "react";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    try {
      setLoading(true);

      const response = await fetch(`/clubs/search?term=${searchTerm}`);

      const data = await response.json();
      setSearchResults(data);
      setLoading(false);
    } catch (error) {
      console.error("Error searching clubs:", error);
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={(e) => {
          if (e.key == "Enter") {
            e.preventDefault();
            handleSearch();
          }
        }}
        placeholder="Search Clubs"
        className="px-3 py-2 border border-gray-300 rounded-md mb-4 w-64 focus:outline-none focus:border-blue-500"
      />
      <button
        onClick={handleSearch}
        disabled={loading}
        className="px-4 py-2 bg-blue-500 text-white rounded-md mb-4 transition-colors duration-300 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Search
      </button>

      {loading && <p>Loading...</p>}

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {searchResults.map((club) => (
          <div key={club._id} className="border rounded-md p-4">
            <h2 className="text-lg font-semibold mb-2">{club.title}</h2>
            <p className="text-gray-600 mb-2">{club.description}</p>
            <p className="text-blue-500">{club.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchBar;
