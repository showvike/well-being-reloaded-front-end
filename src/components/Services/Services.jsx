import { FaHeartbeat, FaNotesMedical, FaPills, FaUserMd } from "react-icons/fa";

const Services = () => {
  return (
    <div id="services" className="bg-[#f5f5f5] py-5 px-28">
      <h1 className="text-4xl font-black text-[#444] py-5 text-center">
        OUR <span className="text-[#16A085]">SERVICES</span>
      </h1>
      <div className="grid grid-cols-4 gap-5">
        <div className="border border-[#16A085] p-6 rounded shadow-2xl bg-white hover:shadow-[#16a085] transition-all">
          <div className="text-[#16a085]">
            <FaNotesMedical className="text-5xl" />
          </div>
          <p className="text-2xl font-black text-[#444] py-4">Free Checkups</p>
          <p className="text-[#777] text-sm leading-loose">
            Free checkups are essential for preventive healthcare. Regular
            screenings can detect issues early, ensuring a healthier, happier
            life for all.
          </p>
        </div>
        <div className="border border-[#16A085] p-6 rounded shadow-2xl bg-white hover:shadow-[#16a085] transition-all">
          <div className="text-[#16a085]">
            <FaUserMd className="text-5xl" />
          </div>
          <p className="text-2xl font-black text-[#444] py-4">Expert Doctors</p>
          <p className="text-[#777] text-sm leading-loose">
            Expert doctors possess extensive knowledge, experience, and skills,
            ensuring accurate diagnoses and effective treatments, leading to
            improved patient outcomes.
          </p>
        </div>
        <div className="border border-[#16A085] p-6 rounded shadow-2xl bg-white hover:shadow-[#16a085] transition-all">
          <div className="text-[#16a085]">
            <FaPills className="text-5xl" />
          </div>
          <p className="text-2xl font-black text-[#444] py-4">Medicines</p>
          <p className="text-[#777] text-sm leading-loose">
            Medicines play a crucial role in treating and managing various
            health conditions, alleviating symptoms, and improving overall
            well-being when used responsibly.
          </p>
        </div>
        <div className="border border-[#16A085] p-6 rounded shadow-2xl bg-white hover:shadow-[#16a085] transition-all">
          <div className="text-[#16a085]">
            <FaHeartbeat className="text-5xl" />
          </div>
          <p className="text-2xl font-black text-[#444] py-4">Total Care</p>
          <p className="text-[#777] text-sm leading-loose">
            Total care encompasses comprehensive attention to physical, mental,
            and emotional health, addressing all aspects for optimal well-being
            and quality of life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
