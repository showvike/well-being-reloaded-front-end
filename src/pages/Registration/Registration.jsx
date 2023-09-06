import { Link } from "react-router-dom";
import doctor from "../../assets/doctor.gif";
import patient from "../../assets/patient.gif";

const Registration = () => {
  return (
    <div className="pt-28 px-28 h-screen">
      <h1 className="text-4xl font-black text-[#16A085] py-5 text-center">
        Registration
      </h1>
      <div className="pt-8 grid grid-cols-2 gap-8">
        <Link to="/patient/registration">
          <div className="border border-[#16A085] flex flex-col items-center p-5 rounded shadow-2xl hover:shadow-[#16A085] transition-all">
            <div>
              <img className="w-72 h-72" src={patient} alt="patient" />
            </div>
            <p className="py-8 text-3xl font-black text-[#16A085]">
              As a Patient
            </p>
          </div>
        </Link>
        <Link to="/doctor/registration">
          <div className="border border-[#16A085] flex flex-col items-center p-5 rounded shadow-2xl hover:shadow-[#16A085] transition-all">
            <div>
              <img className="w-72 h-72" src={doctor} alt="doctor" />
            </div>
            <p className="py-8 text-3xl font-black text-[#16A085]">
              As a Doctor
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Registration;
