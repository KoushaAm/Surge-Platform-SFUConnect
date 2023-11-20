import { useExploreClubsContext } from "../context/ExploreClubsContext";

const ExploreClubs = () => {
  const { clubs } = useExploreClubsContext();

  return (
    <div>
      <h1> All clubs content </h1>
      {console.log(clubs)}
    </div>
  );
};

export default ExploreClubs;
