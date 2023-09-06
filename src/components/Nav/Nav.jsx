import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png";

const Nav = () => {
  return (
    <nav className="flex justify-between items-center h-24 shadow-md px-28 fixed w-full bg-white">
      <div>
        <a href="#home">
          <img className="w-24 h-24" src={logo} alt="logo.png" />
        </a>
      </div>
      <ul className="flex gap-8 text-[#777777]">
        <li className="hover:text-[#16A085] hover:font-black transition-all">
          <a href="#home">Home</a>
        </li>
        <li className="hover:text-[#16A085] hover:font-black transition-all">
          <a href="#services">Services</a>
        </li>
        <li className="hover:text-[#16A085] hover:font-black transition-all">
          <a href="#about">About</a>
        </li>
        <li className="hover:text-[#16A085] hover:font-black transition-all">
          <a href="#doctors">Doctors</a>
        </li>
        <li className="hover:text-[#16A085] hover:font-black transition-all">
          <a href="#footer">Contact</a>
        </li>
        <li className="hover:text-[#16A085] hover:font-black transition-all">
          <Link to="#">Login</Link>
        </li>
        <li className="hover:text-[#16A085] hover:font-black transition-all">
          <Link to="#">Register</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
