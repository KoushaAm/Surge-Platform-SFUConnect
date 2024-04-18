import { NavLink } from "react-router-dom";

const PageNavbar = () => {
  const links = [
    {
      text: "Home",
      path: "/",
    },
    {
      text: "Dashboard",
      path: "/app/dashboard",
    },
    {
      text: "About us",
      path: "/about",
    }
  ];

  return (
    <nav className="fixed inset-0 flex justify-center items-center">
      <ul className="flex flex-col items-center gap-10 w-30">
      <h1 className= " p-5 text-3xl font-bold font-rubik">MyConnect</h1>

        {links.map((link) => (
          <li key={link.text}>
            <NavLink
              to={link.path}
              className="w-60 p-2 flex items-center justify-center font-rubik text-lg rounded-md border-2 border-transparent opacity-50 hover:opacity-100 hover:border-gray-700 text-gray-700 ease-in-out duration-200"
              style={{ width: "160px", marginBottom: "10px" }}
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default PageNavbar;
// const PageNavbar = () => {
//   const links = [
//     {
//       text: "Home",
//       path: "/",
//     },
//     {
//       text: "Dashboard",
//       path: "/app/dashboard",
//     },
//     {
//       text: "About",
//       path: "/about",
//     },
//     {
//       text: "Login",
//       path: "/login",
//     },
//     {
//       text: "Sign up",
//       path: "/signup",
//     },
//   ];