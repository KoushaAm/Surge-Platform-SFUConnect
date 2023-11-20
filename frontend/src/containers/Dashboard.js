import { useExploreClubsContext } from "../context/ExploreClubsContext";
import { useEffect } from "react";

const Dashboard = () => {
  const { getAllClubsHandler, getAllCategoriesHandler } =
    useExploreClubsContext();

  useEffect(() => {
    // Fetch all clubs data from backend here
    // replace the test_all_clubs_data and test_all_categories_data with frontend API calls
    const test_all_clubs_data = {
      name: "Surge",
    };

    const test_all_categories_data = {
      category: "Projects",
    };

    getAllClubsHandler(test_all_clubs_data);
    getAllCategoriesHandler(test_all_categories_data);
  }, [getAllClubsHandler, getAllCategoriesHandler]);

  return (
    <div>
      <h1> dashboard content </h1>
    </div>
  );
};

export default Dashboard;
