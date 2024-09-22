import { LuLogOut } from "react-icons/lu";
import "../_styles/sidebar.scss";
import {
  FiHome,
  FiBook,
  FiClipboard,
  FiBell,
  FiUser,
  FiSettings,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
const StudentSidebar = () => {
  const location = window.location.pathname;
  const navigate = useNavigate();
  return (
    <div className="sidebar flex col">
      <ul>
        <li
          className="flex"
          style={{ background: `${location == "/" ? "white" : ""}` }}
          onClick={() => navigate("/")}
        >
          <FiHome className="icon" />
        </li>
        <li
          className="flex"
          style={{
            background: `${location == "/explore/courses" ? "white" : ""}`,
          }}
          onClick={() => navigate("/explore/courses")}
        >
          <FiBook className="icon" />
        </li>
        <li className="flex">
          <FiClipboard className="icon" />
        </li>
        <li className="flex">
          <FiBell className="icon" />
        </li>
        <li className="flex">
          <FiSettings className="icon" />
        </li>
        <li className="flex">
          <FiUser className="icon" />
        </li>
      </ul>
      <div
        className="logout flex"
        onClick={() => window.localStorage.clear() + window.location.reload()}
        style={{ cursor: "pointer" }}
      >
        <LuLogOut />
      </div>
    </div>
  );
};

export default StudentSidebar;
