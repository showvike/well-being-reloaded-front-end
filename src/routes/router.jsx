import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import DoctorLogin from "../pages/DoctorLogin/DoctorLogin";
import DoctorRegistration from "../pages/DoctorRegistration/DoctorRegistration";
import Landing from "../pages/Landing/Landing";
import Login from "../pages/Login/Login";
import PatientLogin from "../pages/PatientLogin/PatientLogin";
import PatientRegistration from "../pages/PatientRegistration/PatientRegistration";
import Registration from "../pages/Registration/Registration";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/patient/registration",
        element: <PatientRegistration />,
      },
      {
        path: "/doctor/registration",
        element: <DoctorRegistration />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/patient/login",
        element: <PatientLogin />,
      },
      {
        path: "/doctor/login",
        element: <DoctorLogin />,
      },
    ],
  },
]);

export default router;
