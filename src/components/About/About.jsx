import { FaChevronRight } from "react-icons/fa";
import about from "../../assets/about.svg";

const About = () => {
  return (
    <div className="pt-6 px-28 h-screen">
      <h1 className="text-4xl font-black text-[#444] py-5 text-center">
        ABOUT <span className="text-[#16A085]">US</span>
      </h1>
      <div className="grid grid-cols-2 justify-between items-center">
        <div>
          <img src={about} alt="about" />
        </div>
        <div>
          <h1 className="text-4xl font-black text-[#444] leading-loose w-2/3">
            We Take Care of Your Healthy Life
          </h1>
          <p className="mt-2 pt-2 text-[#777] text-sm leading-loose">
            Our mission is to ensure your healthy life. We provide holistic
            care, focusing on physical and mental wellness, preventive measures,
            and timely interventions, empowering you to thrive.
          </p>
          <p className="mt-2 pt-2 text-[#777] text-sm leading-loose">
            Our commitment to your well-being is unwavering. Through a
            personalized approach, we prioritize your health, fostering a
            vibrant and fulfilling life.
          </p>
          <button className="text-[#16A085] mt-4 py-1 pl-3 pr-1 border border-[#16A085] rounded flex items-center gap-2 shadow-2xl hover:bg-[#16A085] hover:text-white">
            Learn More{" "}
            <span className="bg-[#16A085] p-2 rounded hover:bg-white">
              <FaChevronRight className="text-white hover:text-[#16A085]" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
