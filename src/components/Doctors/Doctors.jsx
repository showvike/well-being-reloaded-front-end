import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import doc1 from "../../assets/doc1.jpg";
import doc2 from "../../assets/doc2.jpg";
import doc3 from "../../assets/doc3.jpg";
import doc4 from "../../assets/doc4.jpg";
import doc5 from "../../assets/doc5.jpg";
import doc6 from "../../assets/doc6.jpg";

const Doctors = () => {
  const common = (
    <>
      <p className="text-[#16A085]">Expert Doctor</p>
      <div className="pt-4 flex gap-2">
        <p className="rounded-full border border-[#16A085] p-3 hover:bg-[#16A085] shadow-2xl">
          <Link to="#">
            <FaFacebookF className="text-2xl text-[#16A085] hover:text-white" />
          </Link>
        </p>
        <p className="rounded-full border border-[#16A085] p-3 hover:bg-[#16A085] shadow-2xl">
          <Link to="#">
            <FaTwitter className="text-2xl text-[#16A085] hover:text-white" />
          </Link>
        </p>
        <p className="rounded-full border border-[#16A085] p-3 hover:bg-[#16A085] shadow-2xl">
          <Link to="#">
            <FaInstagram className="text-2xl text-[#16A085] hover:text-white" />
          </Link>
        </p>
        <p className="rounded-full border border-[#16A085] p-3 hover:bg-[#16A085] shadow-2xl">
          <Link to="#">
            <FaLinkedin className="text-2xl text-[#16A085] hover:text-white" />
          </Link>
        </p>
      </div>
    </>
  );

  return (
    <div className="bg-[#f5f5f5] py-5 px-28">
      <h1 className="text-4xl font-black text-[#444] py-5 text-center">
        OUR <span className="text-[#16A085]">DOCTORS</span>
      </h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="border border-[#16A085] p-6 rounded shadow-2xl bg-white flex flex-col items-center">
          <div className="text-[#16a085]">
            <img
              className="rounded-full border border-[#16A085] w-48 h-48"
              src={doc1}
              alt="doc1"
            />
          </div>
          <p className="text-2xl font-black text-[#444] pt-4">Ada Adams</p>
          {common}
        </div>
        <div className="border border-[#16A085] p-6 rounded shadow-2xl bg-white flex flex-col items-center">
          <div className="text-[#16a085]">
            <img
              className="rounded-full border border-[#16A085] w-48 h-48"
              src={doc2}
              alt="doc2"
            />
          </div>
          <p className="text-2xl font-black text-[#444] pt-4">Joe Goldberg</p>
          {common}
        </div>
        <div className="border border-[#16A085] p-6 rounded shadow-2xl bg-white flex flex-col items-center">
          <div className="text-[#16a085]">
            <img
              className="rounded-full border border-[#16A085] w-48 h-48"
              src={doc3}
              alt="doc3"
            />
          </div>
          <p className="text-2xl font-black text-[#444] pt-4">John Snow</p>
          {common}
        </div>
        <div className="border border-[#16A085] p-6 rounded shadow-2xl bg-white flex flex-col items-center">
          <div className="text-[#16a085]">
            <img
              className="rounded-full border border-[#16A085] w-48 h-48"
              src={doc4}
              alt="doc4"
            />
          </div>
          <p className="text-2xl font-black text-[#444] pt-4">Forty Quinn</p>
          {common}
        </div>
        <div className="border border-[#16A085] p-6 rounded shadow-2xl bg-white flex flex-col items-center">
          <div className="text-[#16a085]">
            <img
              className="rounded-full border border-[#16A085] w-48 h-48"
              src={doc5}
              alt="doc5"
            />
          </div>
          <p className="text-2xl font-black text-[#444] pt-4">Walter White</p>
          {common}
        </div>
        <div className="border border-[#16A085] p-6 rounded shadow-2xl bg-white flex flex-col items-center">
          <div className="text-[#16a085]">
            <img
              className="rounded-full border border-[#16A085] w-48 h-48"
              src={doc6}
              alt="doc6"
            />
          </div>
          <p className="text-2xl font-black text-[#444] pt-4">Gorge Bush</p>
          {common}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
