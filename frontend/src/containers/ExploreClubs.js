import { useExploreClubsContext } from "../context/ExploreClubsContext";

const ExploreClubs = () => {
  const { clubs, categories } = useExploreClubsContext();

  return (
    <div>
      <h1> All clubs content </h1>
      {console.log(clubs)}
      {console.log(categories)}
    </div>
  );
};

export default ExploreClubs;
