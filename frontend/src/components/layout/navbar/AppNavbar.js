import { NavLink } from "react-router-dom";
import myClubs from "../../../assets/icons/myClubs.svg";
import allClubs from "../../../assets/icons/allClubs.svg";

const Navbar = () => {
  const links = [
    {
      text: "Profile",
      path: "/app/dashboard",
    },
    {
      text: "Dashboard",
      path: "/app/dashboard",
    },
    {
      text: "My Clubs",
      path: "/app/myclubs",
      icon: <img src={myClubs} alt="My Clubs" className="mr-4"/>,
    },
    {
      text: "All Clubs",
      path: "/app/exploreclubs",
      icon: <img src={allClubs} alt="My Clubs" className="mr-4"/>,
    },
  ];

  return (
    <nav>
      <ul>
        {links.map((link) => (
          <li key={link.text} className="flex items-center p-3">
            <NavLink to={link.path} className="font-rubik text-xl text-custom-dark-gray flex items-center">
              {link.icon}
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
