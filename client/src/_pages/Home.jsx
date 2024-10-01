/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import Admin from "../_components/Header/Admin";
import User from "../_components/Header/User";
import Dash_Admin from "./Dash_Admin";
import Dash_User from "./Dash_User";

const Home = ({ userInfo }) => {
  const navigate = useNavigate();

  return (
    <div>
      {userInfo ? (
        <div className="main-container flex">
          {userInfo?.isAdmin ? (
            <Admin userInfo={userInfo} />
          ) : (
            <User userInfo={userInfo} />
          )}
          {userInfo.isAdmin ? (
            <Dash_Admin />
          ) : (
            <Dash_User userInfo={userInfo} />
          )}
        </div>
      ) : (
        navigate("/")
      )}
    </div>
  );
};

export default Home;
