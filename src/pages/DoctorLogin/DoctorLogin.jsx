import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "../../axios";

const DoctorLogin = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    const submitData = {
      email,
      password,
    };

    axios
      .post("/doctor/login", submitData)
      .then((res) => {
        toast.success("Doctor Login Successful!");
        console.log(res);
        localStorage.setItem("firstName", res.data.body.data.firstName);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Wrong Credentials!");
      });
  };

  return (
    <div className="pt-28 px-28">
      <h1 className="text-4xl font-black text-[#333] py-5 text-center">
        Doctor Login
      </h1>
      <div className="py-5 border border-[#16A085] rounded p-8">
        <h2 className="text-xl font-black text-[#333]">Please Fill Up</h2>
        <form
          onSubmit={handleSubmit}
          className="mt-8 grid grid-cols-1 gap-4 justify-items-center"
        >
          <label htmlFor="email">
            <span className="block mb-2 text-xs text-[#777]">Email</span>
            <input
              className="border border-[#16A085] rounded p-2"
              type="text"
              name="email"
              placeholder="Email"
              required
            />
          </label>
          <label htmlFor="password">
            <span className="block mb-2 text-xs text-[#777]">Password</span>
            <input
              className="border border-[#16A085] rounded p-2"
              type="text"
              name="password"
              placeholder="Password"
              required
            />
          </label>
          <input
            className="border border-[#16A085] rounded p-2 text-[#16A085] font-black hover:bg-[#16A085] hover:text-white transition-all cursor-pointer"
            type="submit"
            value="SUBMIT"
          />
        </form>
      </div>
    </div>
  );
};

export default DoctorLogin;
