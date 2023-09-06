import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "../../axios";

const PatientRegistration = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const mobileNumber = form.mobileNumber.value;
    const nationalId = form.nationalId.value;
    const birthCertificateNo = form.birthCertificateNo.value;
    const dateOfBirth = form.dateOfBirth.value;
    const bloodGroup = form.bloodGroup.value;
    const gender = form.gender.value;
    const profilePictureUrl = form.profilePictureUrl.value;
    const district = form.district.value;
    const thana = form.thana.value;
    const area = form.area.value;
    const buildingNo = form.buildingNo.value;
    const password = form.password.value;

    const submitData = {
      firstName,
      lastName,
      email,
      mobileNumber,
      nationalId,
      birthCertificateNo,
      dateOfBirth,
      bloodGroup,
      gender,
      profilePictureUrl,
      district,
      thana,
      area,
      buildingNo,
      password,
    };

    axios.post("/patient/registration", submitData).then((res) => {
      toast.success("Patient Registration Successful!");
      console.log(res);
      navigate("/patient/login");
    });
  };

  return (
    <div className="pt-28 px-28">
      <h1 className="text-4xl font-black text-[#333] py-5 text-center">
        Patient Registration Form
      </h1>
      <div className="py-5 border border-[#16A085] rounded p-8">
        <h2 className="text-xl font-black text-[#333]">Please Fill Up</h2>
        <form
          onSubmit={handleSubmit}
          className="mt-8 grid grid-cols-3 gap-4 justify-items-center"
        >
          <label htmlFor="firstName">
            <span className="block mb-2 text-xs text-[#777]">First Name</span>
            <input
              className="border border-[#16A085] rounded p-2"
              type="text"
              name="firstName"
              placeholder="First Name"
              required
            />
          </label>
          <label htmlFor="lastName">
            <span className="block mb-2 text-xs text-[#777]">Last Name</span>
            <input
              className="border border-[#16A085] rounded p-2"
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
            />
          </label>
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
          <label htmlFor="mobileNumber">
            <span className="block mb-2 text-xs text-[#777]">
              Mobile Number
            </span>
            <input
              className="border border-[#16A085] rounded p-2"
              type="text"
              name="mobileNumber"
              placeholder="Mobile Number"
              required
            />
          </label>
          <label htmlFor="nationalId">
            <span className="block mb-2 text-xs text-[#777]">National Id</span>
            <input
              className="border border-[#16A085] rounded p-2"
              type="text"
              name="nationalId"
              placeholder="National Id"
              required
            />
          </label>
          <label htmlFor="birthCertificateNo">
            <span className="block mb-2 text-xs text-[#777]">
              Birth Certificate No
            </span>
            <input
              className="border border-[#16A085] rounded p-2"
              type="text"
              name="birthCertificateNo"
              placeholder="Birth Certificate No"
              required
            />
          </label>
          <label htmlFor="dateOfBirth">
            <span className="block mb-2 text-xs text-[#777]">
              Date Of Birth
            </span>
            <input
              className="border border-[#16A085] rounded p-2"
              type="text"
              name="dateOfBirth"
              placeholder="mm/dd/yy"
              required
            />
          </label>
          <label htmlFor="bloodGroup">
            <span className="block mb-2 text-xs text-[#777]">Blood Group</span>
            <input
              className="border border-[#16A085] rounded p-2"
              type="text"
              name="bloodGroup"
              placeholder="Blood Group"
              required
            />
          </label>
          <label htmlFor="gender">
            <span className="block mb-2 text-xs text-[#777]">Gender</span>
            <input
              className="border border-[#16A085] rounded p-2"
              type="text"
              name="gender"
              placeholder="Gender"
              required
            />
          </label>
          <label htmlFor="profilePictureUrl">
            <span className="block mb-2 text-xs text-[#777]">
              Profile Picture Url
            </span>
            <input
              className="border border-[#16A085] rounded p-2"
              type="text"
              name="profilePictureUrl"
              placeholder="Profile Picture Url"
              required
            />
          </label>
          <label htmlFor="district">
            <span className="block mb-2 text-xs text-[#777]">District</span>
            <input
              className="border border-[#16A085] rounded p-2"
              type="text"
              name="district"
              placeholder="District"
              required
            />
          </label>
          <label htmlFor="thana">
            <span className="block mb-2 text-xs text-[#777]">Thana</span>
            <input
              className="border border-[#16A085] rounded p-2"
              type="text"
              name="thana"
              placeholder="Thana"
              required
            />
          </label>
          <label htmlFor="area">
            <span className="block mb-2 text-xs text-[#777]">Area</span>
            <input
              className="border border-[#16A085] rounded p-2"
              type="text"
              name="area"
              placeholder="Area"
              required
            />
          </label>
          <label htmlFor="buildingNo">
            <span className="block mb-2 text-xs text-[#777]">Building No</span>
            <input
              className="border border-[#16A085] rounded p-2"
              type="text"
              name="buildingNo"
              placeholder="Building No"
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
            className="border border-[#16A085] rounded p-2 col-span-3 w-1/2 text-[#16A085] font-black hover:bg-[#16A085] hover:text-white transition-all cursor-pointer"
            type="submit"
            value="SUBMIT"
          />
        </form>
      </div>
    </div>
  );
};

export default PatientRegistration;
