import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ExploreClubs = () => {
  const [loading, setLoading] = useState(true);
  const [clubs, setClubs] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetch("/clubs")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setClubs(data);
        setLoading(false);
        setSearchResults(data); // Set initial search results to all clubs
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, []);

  const handleSearch = (searchTerm) => {
    const filteredResults = clubs.filter((club) =>
      club.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  


  return (
    <div className="flex flex-col items-center pt-20 p-40">
      <h2 className="text-2xl font-bold mb-9">All Clubs at SFU!</h2>
      {/* loading animation */}
      {loading && 
        <div class="flex justify-center items-center h-screen">
          <div class="rounded-full h-20 w-20 bg-orange-800 animate-ping"></div>
        </div>
      }
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
};

export default ExploreClubs;
