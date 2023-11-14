import { NavLink } from "react-router-dom";

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
    },
    {
      text: "Explore Clubs",
      path: "/app/exploreclubs",
    },
  ];

  return (
    <nav>
      <ul>
        {links.map((link) => {
          return (
            <li
              key={link.text}
              style={{ color: "blue", textDecorationLine: "underline" }}
            >
              <NavLink to={link.path}>{link.text}</NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
