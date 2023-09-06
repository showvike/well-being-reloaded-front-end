import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Nav/Nav";

const Main = () => {
  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
