import About from "../../components/About/About";
import Banner from "../../components/Banner/Banner";
import Doctors from "../../components/Doctors/Doctors";
import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Nav/Nav";
import Services from "../../components/Services/Services";
import Statistics from "../../components/Statistics/Statistics";

const Landing = () => {
  return (
    <div>
      <Nav />
      <Banner />
      <Statistics />
      <Services />
      <About />
      <Doctors />
      <Footer />
    </div>
  );
};

export default Landing;
