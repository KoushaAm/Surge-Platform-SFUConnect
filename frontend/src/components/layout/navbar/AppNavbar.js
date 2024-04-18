import { NavLink } from "react-router-dom";
import myClubs from "../../../assets/icons/myClubs.svg";
import allClubs from "../../../assets/icons/allClubs.svg";
import logout from "../../../assets/icons/logout.svg";

const Navbar = () => {
  const links = [
    {
      text: "Dashboard",
      path: "/app/dashboard",
      icon: <img src={myClubs} alt="My Clubs" className="mr-4" />, //placeholder icon
    },
    {
      text: "My Clubs",
      path: "/app/myclubs",
      icon: <img src={myClubs} alt="My Clubs" className="mr-4" />,
    },
    {
      text: "All Clubs",
      path: "/app/exploreclubs",
      icon: <img src={allClubs} alt="My Clubs" className="mr-4" />,
    },
  ];

  // Placeholder variables
  const profileImageUrl = "https://i.imgur.com/pWPslub.png";
  const name = "John Smith";

  return (
    <nav className="w-64 p-7">
      {/*profile picture, name, and view profile link */}
      <div className="flex flex-col items-center">
        <div
          className="w-24 h-24 mb-4 rounded-full bg-cover bg-center hover:border-2 hover:border-custom-orange-primary"
          style={{ backgroundImage: `url('${profileImageUrl}')` }}
        />
        <div className="text-gray-900 font-rubik font-normal text-lg">
          {`${name}`}
        </div>
        <NavLink
          to="/app/viewprofile"
          className="text-custom-orange-primary font-karla text-base hover:underline"
        >
          View Profile
        </NavLink>
      </div>

      {/* Map main nav links */}
      <ul className="mt-7">
        {links.map((link) => (
          <li key={link.text} className="pt-1">
            <NavLink
              to={link.path}
              className="w-60 p-2 flex items-center w-full font-rubik text-lg rounded-md border-2 border-transparent opacity-50 hover:opacity-100 hover:border-gray-700 text-gray-700 ease-in-out duration-200"
            >
              {link.icon}
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Logout button */}
      <div className="flex items-center border-t-2 pt-1 mt-14">
        <NavLink
          to=""
          className="p-1 flex items-center w-full font-rubik text-lg rounded-md border-2 border-transparent opacity-50 hover:opacity-100 hover:border-gray-700 text-gray-700 ease-in-out duration-200"
        >
          <img src={logout} alt="Logout" className="mr-4 opacity-70" />
          Logout
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;