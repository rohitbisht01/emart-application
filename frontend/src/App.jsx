import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ActivationPage, Login, Signup } from "./Routes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import axios from "axios";
import { server } from "./server";

const App = () => {
  useEffect(() => {
    axios
      .get(`${server}/user/getuser`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route
          path="/activation/:activation_token"
          element={<ActivationPage />}
        />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
    </BrowserRouter>
  );
};

export default App;
