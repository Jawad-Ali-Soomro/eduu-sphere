/* eslint-disable react/prop-types */
import Avatar from "react-avatar";
import "../../_styles/sidebar.scss";
import { GoSignOut } from "react-icons/go";
import { BiCode, BiCompass, BiSearch } from "react-icons/bi";
import { RiDashboardLine } from "react-icons/ri";
import { GrGroup } from "react-icons/gr";

const User = ({ userInfo }) => {
  const location = window.location.pathname;
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
        <div className="profile flex">
          <div
            className="btn-logout flex"
            onClick={() =>
              window.localStorage.clear() + window.location.reload()
            }
          >
            <GoSignOut />
            <p>Logout</p>
          </div>
          <Avatar
            className="avatar"
            name={userInfo?.username}
            value={userInfo?.username}
            size="40"
          />
        </div>
      </div>
      <div className="main-sidebar flex col">
        <div className="logo flex col">
          <img src="/logo.png" alt="" />
          {/* <p>Education Made Easy!</p> */}
        </div>
        <div className="navs flex col">
          <ul className="flex col">
            <li className="flex" id={location === "/" ? "active" : ""}>
              <RiDashboardLine className="icon" />
              <p>Dashboard</p>
            </li>
            <li className="flex">
              <BiCompass className="icon" />
              <p>Browse</p>
            </li>
            <li className="flex">
              <GrGroup className="icon" />
              <p>Friends</p>
            </li>
            <li className="flex">
              <BiCode className="icon" />
              <p>Codelab</p>
            </li>
          </ul>
        </div>
        <div className="bottom-quote flex col">
          <h2>Upgrade To Pro</h2>
          <p>Unlock all courses, get access to source code, and more.</p>
          <button>Upgrade</button>
        </div>
      </div>
    </div>
  );
};

export default User;
