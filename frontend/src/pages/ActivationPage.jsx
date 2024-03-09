import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { server } from "../server";

const ActivationPage = () => {
  const { activation_token } = useParams();
  const [error, setError] = useState(false);

  useEffect(() => {
    if (activation_token) {
      const activationEmail = async () => {
        try {
          await axios
            .post(`${server}/user/activation`, {
              activation_token,
            })
            .then((res) => {
              console.log(res);
            });
        } catch (error) {
          setError(true);
        }
      };

      activationEmail();
    }
  }, []);

  return (
    <div
      className="flex justify-center items-center"
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      {error ? (
        <p>Your token is expired! 👾 </p>
      ) : (
        <p>Your account has been succesfully created 🚀</p>
      )}
    </div>
  );
};

export default ActivationPage;
