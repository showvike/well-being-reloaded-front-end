import CountUp from "react-countup";
import { FaHospital, FaUserMd, FaUsers } from "react-icons/fa";

const Statistics = () => {
  return (
    <div className="py-12 px-28">
      <h1 className="text-4xl font-black text-[#444] py-5 text-center">
        OUR <span className="text-[#16A085]">STATISTICS </span>
      </h1>
      <div className="grid grid-cols-3 gap-5">
        <div className="border border-[#16A085] flex flex-col items-center p-6 rounded shadow-2xl hover:shadow-[#16a085] transition-all">
          <div className="text-[#16a085]">
            <FaUserMd className="text-5xl" />
          </div>
          <p className="text-4xl font-black text-[#444] py-4">
            <CountUp end={140} duration={10} />+
          </p>
          <p className="text-[#777]">Doctors at Work</p>
        </div>
        <div className="border border-[#16A085] flex flex-col items-center p-6 rounded shadow-2xl hover:shadow-[#16a085] transition-all">
          <div className="text-[#16a085]">
            <FaUsers className="text-5xl" />
          </div>
          <p className="text-4xl font-black text-[#444] py-4">
            <CountUp end={1040} duration={10} />+
          </p>
          <p className="text-[#777]">Satisfied Patients</p>
        </div>
        <div className="border border-[#16A085] flex flex-col items-center p-6 rounded shadow-2xl hover:shadow-[#16a085] transition-all">
          <div className="text-[#16a085]">
            <FaHospital className="text-5xl" />
          </div>
          <p className="text-4xl font-black text-[#444] py-4">
            <CountUp end={80} duration={10} />+
          </p>
          <p className="text-[#777]">Available Hospitals</p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
