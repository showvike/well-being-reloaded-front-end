import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo/logo.png";

const Nav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("firstName");
    navigate("/");
  };

  return (
    <nav className="flex justify-between items-center h-24 shadow-md px-28 fixed w-full bg-white">
      <div>
        {location.pathname === "/" ? (
          <a href="#home">
            <img className="w-24 h-24" src={logo} alt="logo.png" />
          </a>
        ) : (
          <Link to="/">
            <img className="w-24 h-24" src={logo} alt="logo.png" />
          </Link>
        )}
      </div>
      <ul className="flex gap-8 text-[#777777]">
        <li className="hover:text-[#16A085] hover:font-black transition-all">
          {location.pathname === "/" ? (
            <a href="#home">Home</a>
          ) : (
            <Link to="/">Home</Link>
          )}
        </li>
        {location.pathname === "/" && (
          <>
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
          </>
        )}
        {localStorage.getItem("firstName") ? (
          <li className="hover:text-[#16A085] hover:font-black transition-all">
            <button onClick={handleLogout}>
              Hello, {localStorage.getItem("firstName")}
            </button>
          </li>
        ) : (
          <>
            <li className="hover:text-[#16A085] hover:font-black transition-all">
              <Link to="/login">Login</Link>
            </li>
            <li className="hover:text-[#16A085] hover:font-black transition-all">
              <Link to="/registration">Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
