import { useState, useEffect } from "react";
import "../_styles/login.scss";
import { BiLogoGoogle } from "react-icons/bi";
import { BsGoogle, BsTwitter, BsTwitterX } from "react-icons/bs";
import { FaGithub, FaGoogle } from "react-icons/fa6";

const Login = () => {
  const [formStep, setFormStep] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setFormStep((prevStep) => {
        if (prevStep === 1) return 2;
        if (prevStep === 2) return 1;
        return 1;
      });
    }, 3000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <div className="form-container flex">
      {/* <div className="slider-main flex col">
        {formStep === 1 ? (
          <div className="slider flex col" style={{ left: "0px" }}>
            <img src="/img1.png" alt="" />
            <h2>
              <span>Create</span> Your Own <span>Course!</span>
            </h2>
          </div>
        ) : formStep === 2 ? (
          <div className="slider flex col" style={{ left: "0px" }}>
            <img src="/img3.png" alt="" />
            <h2>
              <span>Invite</span> Friends To <span>Join!</span>
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
        </div>
      </div> */}
      <div className="form-wrapper flex col">
        <img src="/logo.png" alt="" />
        <h1>Welcome Back</h1>
        <div className="inputs-main flex col">
          <div className="input-wrap flex">
            <input type="text" placeholder="Email Address" />
          </div>
          <div className="input-wrap flex">
            <input type="text" placeholder="Password" />
          </div>
        </div>
        <a href="/">Forgot Password?</a>
        <button className="login-btn">LOGIN</button>
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
          <button className="register-btn">Register</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
