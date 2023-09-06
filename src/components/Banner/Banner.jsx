import banner from "../../assets/banner.svg";

const Banner = () => {
  return (
    <div className="grid grid-cols-2 justify-between items-center pt-24 px-28 h-screen bg-[#f5f5f5]">
      <div>
        <img src={banner} alt="banner" />
      </div>
      <div>
        <h1 className="text-4xl font-black text-[#444]">
          Stay Safe, Stay Healthy
        </h1>
        <p className="text-lg mt-2 pt-2 text-[#777]">
          Stay healthy and stay safe - two vital mantras for a secure, vibrant
          life in a world filled with uncertainties.
        </p>
      </div>
    </div>
  );
};

export default Banner;
