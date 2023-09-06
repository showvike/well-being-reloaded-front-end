import About from "../../components/About/About";
import Banner from "../../components/Banner/Banner";
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
    </div>
  );
};

export default Landing;
