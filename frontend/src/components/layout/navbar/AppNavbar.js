import { NavLink } from "react-router-dom";
import myClubs from "../../../assets/icons/myClubs.svg";
import allClubs from "../../../assets/icons/allClubs.svg";
import logout from "../../../assets/icons/logout.svg"

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
  const name = "Firstname Lastname";

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
          className="text-custom-orange-primary font-karla text-base"
        >
          View Profile
        </NavLink>
      </div>

      {/* Map main nav links */}
      <ul className="mt-7">
        {links.map((link) => (
          <li key={link.text} className="flex items-center p-2">
            <NavLink to={link.path} className="font-rubik text-lg text-custom-dark-gray flex items-center">
              {link.icon}
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Logout button */}
      <div className="flex items-center p-2 border-t-2 mt-14">
        <NavLink to="" className="font-rubik text-lg text-custom-dark-gray flex items-center">
          <img src={logout} alt="Logout" className="mr-4" />
          Logout
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;