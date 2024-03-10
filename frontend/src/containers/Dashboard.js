import { useExploreClubsContext } from "../context/ExploreClubsContext";
import { useEffect } from "react";
import SearchBar from "../components/searchbar";

const Dashboard = () => {
  const { getAllClubsHandler, getAllCategoriesHandler } =
    useExploreClubsContext();

  useEffect(() => {
    // Fetch all clubs data from backend here
    // replace the test_all_clubs_data and test_all_categories_data with frontend API calls

    // const test_all_clubs_data = {
    //   name: "Surge",
    // };

    // const test_all_categories_data = {
    //   name: "Project",
    // };

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

    // getAllClubsHandler(test_all_clubs_data);
    // getAllCategoriesHandler(test_all_categories_data);
  }, []);

  return (
    <div>
      <h1> dashboard content </h1>
      <SearchBar />
    </div>
  );
};

export default Dashboard;
