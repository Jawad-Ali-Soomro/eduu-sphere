import {} from "react-icons";
import { BsGithub, BsGoogle, BsLinkedin } from "react-icons/bs";
import {} from "../_styles/login.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { userEndPoint } from "../_utils/endPoints";

const Register = () => {
  const navigate = useNavigate();
  const [errMessage, setErrMessage] = useState();
  const [registerData, setData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleReister = async () => {
    if (
      !registerData.username ||
      !registerData.email ||
      !registerData.password
    ) {
      return setErrMessage("All Fields Are Required!");
    } else if (registerData.password.length < 6) {
      return setErrMessage("Your password needs to be Six characters or more");
    } else {
      const response = await axios.post(`${userEndPoint}/create`, {
        username: registerData.username,
        email: registerData.email,
        password: registerData.password,
      });
      console.log(response.data.token);

      if (response.status === 201) {
        setErrMessage("Account Exists Already!");
      } else if (response.status === 200) {
        window.localStorage.setItem(
          "_eduusphere_auth_token",
          response.data.token
        );
        navigate("/");
        window.location.reload();
      }
    }
  };

  return (
    <div className="flex form-container">
      <div className="form-wrapper flex col">
        <img src="/logo.png" alt="" />
        <h1>Get Started!</h1>
        <div className="input-wrapper flex col">
          <div className="input-sect flex col">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={registerData.username}
              onChange={handleChange}
            />
          </div>
          <div className="input-sect flex col">
            <label htmlFor="email">E-mail</label>
            <input
              type="text"
              id="email"
              name="email"
              value={registerData.email}
              onChange={handleChange}
            />
          </div>
          <div className="input-sect flex col">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              id="password"
              name="password"
              value={registerData.password}
              onChange={handleChange}
            />
          </div>
          {errMessage ? (
            <div className="err-message">
              <p>{errMessage}</p>
            </div>
          ) : (
            this
          )}
          <button
            className="btn-login flex"
            style={{ marginTop: "20px" }}
            onClick={handleReister}
          >
            REGISTER
          </button>
          <p className="text flex">
            <span>OR</span>
          </p>
          <div className="icons flex">
            <div className="icon flex">
              <BsGoogle />
            </div>
            <div className="icon flex">
              <BsGithub />
            </div>
            <div className="icon flex">
              <BsLinkedin />
            </div>
            <button className="btn-bottom flex" onClick={() => navigate("/")}>
              LOGIN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
