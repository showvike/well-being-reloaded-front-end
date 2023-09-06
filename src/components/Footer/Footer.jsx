import {
  FaChevronRight,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div id="footer" className="py-5 px-28">
      <div className="grid grid-cols-4">
        <div>
          <h1 className="text-2xl font-black text-[#444] py-4">Quick Links</h1>
          <div className="space-y-4">
            <p className="flex gap-2 items-center text-sm text-[#777]">
              <FaChevronRight className="text-[#16A085]" />
              <Link to="#" className="transition-all hover:ml-4">
                Home
              </Link>
            </p>
            <p className="flex gap-2 items-center text-sm text-[#777]">
              <FaChevronRight className="text-[#16A085]" />
              <Link to="#" className="transition-all hover:ml-4">
                Services
              </Link>
            </p>
            <p className="flex gap-2 items-center text-sm text-[#777]">
              <FaChevronRight className="text-[#16A085]" />
              <Link to="#" className="transition-all hover:ml-4">
                About
              </Link>
            </p>
            <p className="flex gap-2 items-center text-sm text-[#777]">
              <FaChevronRight className="text-[#16A085]" />
              <Link to="#" className="transition-all hover:ml-4">
                Doctors
              </Link>
            </p>
            <p className="flex gap-2 items-center text-sm text-[#777]">
              <FaChevronRight className="text-[#16A085]" />
              <Link to="#" className="transition-all hover:ml-4">
                Book
              </Link>
            </p>
            <p className="flex gap-2 items-center text-sm text-[#777]">
              <FaChevronRight className="text-[#16A085]" />
              <Link to="#" className="transition-all hover:ml-4">
                Login
              </Link>
            </p>
            <p className="flex gap-2 items-center text-sm text-[#777]">
              <FaChevronRight className="text-[#16A085]" />
              <Link to="#" className="transition-all hover:ml-4">
                Register
              </Link>
            </p>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-black text-[#444] py-4">Our Services</h1>
          <div className="space-y-4">
            <p className="flex gap-2 items-center text-sm text-[#777]">
              <FaChevronRight className="text-[#16A085]" />
              <Link to="#" className="transition-all hover:ml-4">
                Dental Care
              </Link>
            </p>
            <p className="flex gap-2 items-center text-sm text-[#777]">
              <FaChevronRight className="text-[#16A085]" />
              <Link to="#" className="transition-all hover:ml-4">
                Message Therapy
              </Link>
            </p>
            <p className="flex gap-2 items-center text-sm text-[#777]">
              <FaChevronRight className="text-[#16A085]" />
              <Link to="#" className="transition-all hover:ml-4">
                Cardiology
              </Link>
            </p>
            <p className="flex gap-2 items-center text-sm text-[#777]">
              <FaChevronRight className="text-[#16A085]" />
              <Link to="#" className="transition-all hover:ml-4">
                Diagnosis
              </Link>
            </p>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-black text-[#444] py-4">Contact Info</h1>
          <div className="space-y-4">
            <p className="flex gap-2 items-center text-sm text-[#777]">
              <FaPhone className="text-[#16A085]" />
              <Link to="#" className="transition-all hover:ml-4">
                +123-456-7890
              </Link>
            </p>
            <p className="flex gap-2 items-center text-sm text-[#777]">
              <FaMailBulk className="text-[#16A085]" />
              <Link to="#" className="transition-all hover:ml-4">
                mail@email.com
              </Link>
            </p>
            <p className="flex gap-2 items-center text-sm text-[#777]">
              <FaLocationArrow className="text-[#16A085]" />
              <Link to="#" className="transition-all hover:ml-4">
                Somewhere, Earth
              </Link>
            </p>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-black text-[#444] py-4">Follow Us</h1>
          <div className="space-y-4">
            <p className="flex gap-2 items-center text-sm text-[#777]">
              <FaFacebookF className="text-[#16A085]" />
              <Link to="#" className="transition-all hover:ml-4">
                Facebook
              </Link>
            </p>
            <p className="flex gap-2 items-center text-sm text-[#777]">
              <FaTwitter className="text-[#16A085]" />
              <Link to="#" className="transition-all hover:ml-4">
                Twitter
              </Link>
            </p>
            <p className="flex gap-2 items-center text-sm text-[#777]">
              <FaInstagram className="text-[#16A085]" />
              <Link to="#" className="transition-all hover:ml-4">
                Instagram
              </Link>
            </p>
            <p className="flex gap-2 items-center text-sm text-[#777]">
              <FaLinkedin className="text-[#16A085]" />
              <Link to="#" className="transition-all hover:ml-4">
                Linkedin
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div>
        <hr className="my-4" />
        <p className="text-center text-[#777]">
          <small>
            Made With 🖤 by <span className="text-[#16A085]">showvike</span> &{" "}
            <span className="text-[#16A085]">sabbir</span> ©️ 2023
          </small>
        </p>
      </div>
    </div>
  );
};

export default Footer;
