import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png";

const Nav = () => {
  return (
    <nav className="flex justify-between items-center h-24 shadow-md px-28 fixed w-full">
      <div>
        <Link to="#">
          <img className="w-24 h-24" src={logo} alt="logo.png" />
        </Link>
      </div>
      <ul className="flex gap-8 text-[#777777]">
        <li>
          <Link to="#">Home</Link>
        </li>
        <li>
          <Link to="#">Services</Link>
        </li>
        <li>
          <Link to="#">About</Link>
        </li>
        <li>
          <Link to="#">Doctors</Link>
        </li>
        <li>
          <Link to="#">Contact</Link>
        </li>
        <li>
          <Link to="#">Login</Link>
        </li>
        <li>
          <Link to="#">Register</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
