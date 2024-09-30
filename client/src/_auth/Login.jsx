import {} from "react-icons";
import { BsGithub, BsGoogle, BsLinkedin } from "react-icons/bs";
import {} from "../_styles/login.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { userEndPoint } from "../_utils/endPoints";
import axios from "axios";

const Login = () => {
  const [errMessage, setMessage] = useState();
  const navigate = useNavigate();
  const [loginData, setData] = useState({
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

  const handleLogin = async () => {
    if (!loginData.email || !loginData.password) {
      setMessage("All Fields Are Required!");
    }
    const response = await axios.post(`${userEndPoint}/login`, {
      email: loginData.email,
      password: loginData.password,
    });
    console.log(response.status);

    if (response.status === 202) {
      setMessage("Account Not Found!");
    } else if (response.status === 201) {
      setMessage("Incorrect Password!");
    } else if (response.status === 200) {
      window.localStorage.setItem(
        "_eduusphere_auth_token",
        response.data.token
      );
      navigate("/");
      window.location.reload();
    }
  };

  return (
    <div className="flex form-container">
      <div className="form-wrapper flex col">
        <img src="/logo.png" alt="" />
        <h1>Welcome!</h1>
        <div className="input-wrapper flex col">
          <div className="input-sect flex col">
            <label htmlFor="email">E-mail</label>
            <input
              type="text"
              id="email"
              name="email"
              onChange={handleChange}
              value={loginData.email}
            />
          </div>
          <div className="input-sect flex col">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              id="password"
              name="password"
              onChange={handleChange}
              value={loginData.password}
            />
          </div>
          {errMessage ? (
            <div className="err-message">
              <p>{errMessage}</p>
            </div>
          ) : (
            this
          )}
          <button className="btn-login flex" onClick={handleLogin}>
            LOGIN
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
            <button
              className="btn-bottom flex"
              onClick={() => navigate("/register")}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
