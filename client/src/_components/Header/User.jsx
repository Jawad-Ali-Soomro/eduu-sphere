/* eslint-disable react/prop-types */
import Avatar from "react-avatar";
import "../../_styles/sidebar.scss";
import { BiCode, BiCompass, BiLogOut, BiSearch } from "react-icons/bi";
import { RiDashboardLine } from "react-icons/ri";
import { GrGroup } from "react-icons/gr";
import { FiFeather } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const User = ({ userInfo }) => {
  const location = window.location.pathname;
  const navigate = useNavigate();

  return (
    <div className="sidebar flex col">
      <div className="top-bar flex">
        <div className="search-bar flex">
          <BiSearch />
          <input type="text" />
          <div className="keys flex">
            <span>ALT</span>+<span>F</span>
          </div>
        </div>
      </div>
      <div className="main-sidebar flex col">
        <div className="logo flex">
          <FiFeather className="icon" />
        </div>
        <div className="navs flex col">
          <ul className="flex col">
            <li
              className="flex"
              id={location === "/" ? "active" : ""}
              onClick={() => navigate("/")}
            >
              <RiDashboardLine className="icon" />
            </li>
            <li
              className="flex"
              onClick={() => navigate("/explore")}
              id={location === "/explore" ? "active" : ""}
            >
              <BiCompass className="icon" />
            </li>
            <li className="flex">
              <GrGroup className="icon" />
            </li>
            <li className="flex">
              <BiCode className="icon" />
            </li>
          </ul>
        </div>
        <div className="profile flex col">
          <Avatar
            className="avatar"
            name={userInfo?.username}
            value={userInfo?.username}
            size="40"
          />
          <div
            className="btn-logout flex"
            onClick={() =>
              window.localStorage.clear() +
              navigate("/") +
              window.location.reload()
            }
          >
            <BiLogOut />
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
