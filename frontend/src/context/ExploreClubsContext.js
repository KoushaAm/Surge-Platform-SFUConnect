import { useState, createContext, useContext } from "react";

const ExploreClubsContext = createContext(null);

export const ExploreClubsProvider = ({ children }) => {
  // State
  const [clubs, setClubs] = useState();
  const [categories, setCategories] = useState();

  const getAllClubsHandler = (allClubsData) => {
    setClubs(allClubsData);
  };

  const getAllCategoriesHandler = (allCategoriesData) => {
    setCategories(allCategoriesData);
  };

  return (
    <ExploreClubsContext.Provider
      value={{
        clubs,
        categories,
        getAllClubsHandler,
        getAllCategoriesHandler,
      }}
    >
      {children}
    </ExploreClubsContext.Provider>
  );
};

export const useExploreClubsContext = () => useContext(ExploreClubsContext);
