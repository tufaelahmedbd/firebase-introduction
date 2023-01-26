import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar flex justify-between container mx-auto items-center py-5 border-b">
      <Link to="/" className=" font-medium text-[#FED049]">
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
          <Link to="/login" className="hover:text-[#FED049] duration-300s">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
