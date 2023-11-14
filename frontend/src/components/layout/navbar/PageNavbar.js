import { NavLink } from "react-router-dom";

const PageNavbar = () => {
  const links = [
    {
      text: "Home",
      path: "/",
    },
    {
      text: "Login",
      path: "/login",
    },
    {
      text: "Sign up",
      path: "/signup",
    },
  ];

  return (
    <nav>
      <ul>
        {links.map((link) => {
          return (
            <li key={link.text} style={{ color: "blue", textDecorationLine: "underline" }}>
              <NavLink to={link.path}>{link.text}</NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default PageNavbar;
