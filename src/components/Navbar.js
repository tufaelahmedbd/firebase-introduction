import { Link } from "react-router-dom";
import { IoLogoFirebase } from "react-icons/io5";

const Navbar = ({ user }) => {
  return (
    <nav className="navbar flex justify-between container mx-auto items-center py-5 border-b">
      <Link to="/" className=" font-medium text-[#FED049] flex items-center">
        <IoLogoFirebase />
        Firebase Intro
      </Link>
      <ul className="links flex gap-10">
        <li>
          <Link to="/" className="hover:text-[#FED049] duration-300s">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-[#FED049] duration-300s">
            About
          </Link>
        </li>
        <li>
          <Link to="/profile" className="hover:text-[#FED049] duration-300s">
            Profile
          </Link>
        </li>
        <li>
          <Link
            to={`/${user?.email ? "profile" : "login"}`}
            className="hover:text-[#FED049] duration-300s"
          >
            {user?.email ? `Welcome, ${user.displayName}` : "login"}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
