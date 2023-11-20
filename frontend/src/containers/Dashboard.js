import { useExploreClubsContext } from "../context/ExploreClubsContext";
import { useEffect } from "react";

const Dashboard = () => {
  const { getAllClubsHandler } = useExploreClubsContext();

  useEffect(() => {
    // Fetch all clubs data from backend here
    // replace the test_all_clubs_data
    const test_all_clubs_data = {
      name: "Surge",
    };
    getAllClubsHandler(test_all_clubs_data);
  }, [getAllClubsHandler]);

  return (
    <div>
      <h1> dashboard content </h1>
    </div>
  );
};

export default Dashboard;
