import { LuLogOut } from "react-icons/lu";
import "../_styles/sidebar.scss";
import {
  FiHome,
  FiBook,
  FiClipboard,
  FiBell,
  FiSettings,
  FiCheckSquare, // Example for teacher-specific icon
} from "react-icons/fi";

const TeacherSidebar = () => {
  const location = window.location.pathname;
  return (
    <div className="sidebar flex col">
      <ul>
        <li
          className="flex"
          style={{ background: `${location === "/" ? "white" : ""}` }}
        >
          <FiHome className="icon" />
        </li>
        <li className="flex">
          <FiBook className="icon" />
        </li>
        <li className="flex">
          <FiClipboard className="icon" />
        </li>
        <li className="flex">
          <FiCheckSquare className="icon" /> {/* Grade submissions */}
        </li>
        <li className="flex">
          <FiBell className="icon" />
        </li>
        <li className="flex">
          <FiSettings className="icon" />
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

export default TeacherSidebar;
