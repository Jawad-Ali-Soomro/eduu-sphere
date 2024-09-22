import { useState, useEffect } from "react";
import "../_styles/login.scss";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub, FaGoogle } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import axios from "axios";
import { apiUser } from "../_global/apiRoutes";
const Login = () => {
  const [formStep, setFormStep] = useState(1);
  const navigate = useNavigate();
  useEffect(() => {
    const interval = setInterval(() => {
      setFormStep((prevStep) => {
        if (prevStep === 1) return 2;
        if (prevStep === 2) return 3;
        return 1;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const [showPassword, setShowPassword] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const handleLogin = async () => {
    if (!formData.email || !formData?.password) {
      setErrMessage("Fill All The Fields!");
    } else {
      try {
        const apiResponse = await axios.post(`${apiUser}/login`, {
          email: formData.email,
          password: formData.password,
        });
        console.log(apiResponse.data.token);

        apiResponse.status === 204
          ? setErrMessage("Invalid Password")
          : apiResponse.status === 203
          ? setErrMessage("Invalid Email Address")
          : apiResponse.status === 202
          ? setErrMessage("Incorrect Password")
          : apiResponse.status === 201
          ? setErrMessage("Account Not Found")
          : setErrMessage("");
        apiResponse.status === 200
          ? window.localStorage.setItem("authToken", apiResponse.data.token) +
            window.location.reload()
          : this;
      } catch (error) {
        console.error("Login failed", error);
        setErrMessage("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="form-container flex">
      <div className="slider-main flex col">
        {formStep === 1 ? (
          <div className="slider flex col" style={{ left: "0px" }}>
            <img src="/img1.jpg" alt="" />
            <h2>
              <span>Create</span> Your <span>Course!</span>
            </h2>
          </div>
        ) : formStep === 2 ? (
          <div className="slider flex col" style={{ left: "0px" }}>
            <img src="/img2.jpg" alt="" />
            <h2>
              <span>Invite</span> Friends!
            </h2>
          </div>
        ) : formStep === 3 ? (
          <div className="slider flex col" style={{ left: "0px" }}>
            <img src="/img3.jpg" alt="" />
            <h2>
              <span>Manage</span> Your <span>Profile!</span>
            </h2>
          </div>
        ) : null}
        <div className="step-detector flex">
          <div
            className="step flex"
            style={{
              width: `${formStep === 1 ? "30px" : "10px"}`,
              background: `${formStep === 1 ? "#333" : ""}`,
            }}
          ></div>

          <div
            className="step flex"
            style={{
              width: `${formStep === 2 ? "30px" : "10px"}`,
              background: `${formStep === 2 ? "#333" : ""}`,
            }}
          ></div>

          <div
            className="step flex"
            style={{
              width: `${formStep === 3 ? "30px" : "10px"}`,
              background: `${formStep === 3 ? "#333" : ""}`,
            }}
          ></div>
        </div>
      </div>
      <div className="form-wrapper flex col">
        <img src="/logo.png" alt="" />
        <h1>Welcome Back</h1>
        <div className="inputs-main flex col">
          <div className="input-wrap flex">
            <input
              type="text"
              placeholder="Email Address"
              name="email"
              value={formData?.email}
              onChange={handleChange}
            />
          </div>
          <div className="input-wrap flex">
            <input
              type={`${showPassword ? "text" : "password"}`}
              placeholder="Password"
              name="password"
              value={formData?.password}
              onChange={handleChange}
            />
            <div
              className="show-hide-pass flex"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <MdVisibility className="icon" />
              ) : (
                <MdVisibilityOff className="icon" />
              )}
            </div>
          </div>
        </div>
        {errMessage ? (
          <div className="err-message flex">
            <p>{errMessage}</p>
          </div>
        ) : (
          this
        )}
        <a href="/">Forgot Password?</a>
        <button className="login-btn" onClick={handleLogin}>
          LOGIN
        </button>
        <div className="or-text flex">
          <p>OR</p>
        </div>
        <div className="icons flex">
          <div className="icon flex">
            <FaGoogle />
          </div>
          <div className="icon flex">
            <FaGithub />
          </div>
          <div className="icon flex">
            <BsTwitterX />
          </div>
          <button
            className="register-btn"
            onClick={() => navigate("/register")}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
