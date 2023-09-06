import Axios from "axios";

// Create an axios instance with your baseURL
const axios = Axios.create({
  //   baseURL: "https://well-being-reloaded-back-end.vercel.app/",
  baseURL: "http://localhost:5000/",
});

export default axios;
