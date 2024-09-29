import {} from "react-icons";
import { BsGithub, BsGoogle, BsLinkedin } from "react-icons/bs";
import {} from "../_styles/login.scss";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="flex form-container">
      <div className="form-wrapper flex col">
        <img src="/logo.png" alt="" />
        <h1>Welcome!</h1>
        <div className="input-wrapper flex col">
          <div className="input-sect flex col">
            <label htmlFor="email">E-mail</label>
            <input type="text" id="email" name="email" />
          </div>
          <div className="input-sect flex col">
            <label htmlFor="password">Password</label>
            <input type="text" id="password" name="password" />
          </div>
          <button className="btn-login flex">LOGIN</button>
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
