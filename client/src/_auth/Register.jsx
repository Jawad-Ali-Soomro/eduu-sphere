import { useState, useEffect } from "react";
import "../_styles/login.scss";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub, FaGoogle } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [formStep, setFormStep] = useState(1);
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

  return (
    <div
      className="form-container flex"
      style={{ animation: "animate2 1s linear" }}
    >
      <div className="form-wrapper flex col" style={{ marginLeft: "180px" }}>
        <img src="/logo.png" alt="" />
        <h1>Get Started</h1>
        <div className="inputs-main flex col">
          <div className="input-wrap flex">
            <input type="text" placeholder="Username" />
          </div>
          <div className="input-wrap flex">
            <input type="text" placeholder="Email Address" />
          </div>
          <div className="input-wrap flex">
            <input type="text" placeholder="Password" />
          </div>
        </div>
        <a href="/">Provacy Policy?</a>
        <button className="login-btn">REGISTER</button>
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
          <button className="register-btn" onClick={() => navigate("/")}>
            LOGIN
          </button>
        </div>
      </div>
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
            onClick={() => setFormStep(1)}
            style={{
              width: `${formStep === 1 ? "30px" : "10px"}`,
              background: `${formStep === 1 ? "#333" : ""}`,
            }}
          ></div>

          <div
            className="step flex"
            onClick={() => setFormStep(2)}
            style={{
              width: `${formStep === 2 ? "30px" : "10px"}`,
              background: `${formStep === 2 ? "#333" : ""}`,
            }}
          ></div>

          <div
            className="step flex"
            onClick={() => setFormStep(3)}
            style={{
              width: `${formStep === 3 ? "30px" : "10px"}`,
              background: `${formStep === 3 ? "#333" : ""}`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Register;
