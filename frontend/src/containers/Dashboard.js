import { useExploreClubsContext } from "../context/ExploreClubsContext";
import { useEffect } from "react";
import SearchBar from "../components/searchbar";

const Dashboard = () => {
  const { getAllClubsHandler, getAllCategoriesHandler } =
    useExploreClubsContext();

  useEffect(() => {
    // Fetch all clubs data from backend here
    // replace the test_all_clubs_data and test_all_categories_data with frontend API calls
    fetch("/clubs")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        getAllClubsHandler(data);
        console.log("data", data);
      })
      .catch((error) => console.log("Error:", error));

  }, []);

  return (
    <div className="">
      <SearchBar />
    </div>
  );
};

export default Dashboard;
