import { useState } from "react";
import "../_styles/login.scss";
import { BiLogoGithub, BiLogoGoogle } from "react-icons/bi";
import { BsEye, BsEyeSlash, BsTwitter } from "react-icons/bs";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Login = () => {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const handleLoginFormData = (e) => {
    setLoginFormData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
    });
  };

  const [showPassword, setShowPassword] = useState(false);

  console.log(loginFormData);

  return (
    <div className="form-container flex">
      <div className="form-wrapper flex col">
        <img src="/logo.png" className="logo" alt="" />
        <div className="input-container flex col">
          <div
            className="input-wrap border flex col"
            style={{
              border: `${
                loginFormData?.email
                  ? "1.3px solid royalblue"
                  : "1.3px solid red"
              }`,
            }}
          >
            <input
              id="email"
              type="text"
              name="email"
              placeholder="Email Address"
              value={loginFormData?.email}
              onChange={handleLoginFormData}
            />
          </div>
          <div
            className="input-wrap border flex col"
            style={{
              border: `${
                loginFormData?.password
                  ? "1.3px solid royalblue"
                  : "1.3px solid red"
              }`,
            }}
          >
            <input
              id="email"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={loginFormData?.password}
              onChange={handleLoginFormData}
            />
            <button onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FiEye /> : <FiEyeOff />}
            </button>
          </div>
          <div className="text flex">
            <p>Forgot Password?</p>
          </div>
          <button
            className="login-btn"
            style={{
              background: `${
                !loginFormData?.email || !loginFormData?.password
                  ? "gray"
                  : "royalblue"
              }`,
            }}
            disabled={!loginFormData?.email || !loginFormData?.password}
            onClick={() => alert("Hello")}
          >
            Login
          </button>
          <div className="text-after-btn flex">
            <p>OR</p>
          </div>
          <div className="icons flex">
            <div className="icon flex">
              <BiLogoGoogle />
            </div>
            <div className="icon flex">
              <BiLogoGithub />
            </div>
            <div className="icon flex">
              <BsTwitter />
            </div>
          </div>
        </div>
        <img src="/login-banner.png" className="banner-img" alt="" />
      </div>
    </div>
  );
};

export default Login;
