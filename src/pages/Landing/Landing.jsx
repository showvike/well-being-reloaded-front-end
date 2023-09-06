import About from "../../components/About/About";
import Banner from "../../components/Banner/Banner";
import Doctors from "../../components/Doctors/Doctors";
import Services from "../../components/Services/Services";
import Statistics from "../../components/Statistics/Statistics";

const Landing = () => {
  return (
    <div>
      <Banner />
      <Statistics />
      <Services />
      <About />
      <Doctors />
    </div>
  );
};

export default Landing;
