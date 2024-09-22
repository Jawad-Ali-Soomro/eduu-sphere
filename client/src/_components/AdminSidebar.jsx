import { LuLogOut } from "react-icons/lu";
import "../_styles/sidebar.scss";
import {
  FiHome,
  FiBook,
  FiClipboard,
  FiSettings,
  FiUsers,
  FiBarChart,
} from "react-icons/fi";

const AdminSidebar = () => {
  const location = window.location.pathname;
  return (
    <div className="sidebar flex col">
      <ul>
        <li
          className="flex"
          style={{ background: `${location === "/" ? "white" : "s"}` }}
        >
          <FiHome className="icon" />
        </li>
        <li className="flex">
          <FiUsers className="icon" /> {/* Manage users */}
        </li>
        <li className="flex">
          <FiBook className="icon" />
        </li>
        <li className="flex">
          <FiBarChart className="icon" /> {/* View analytics */}
        </li>
        <li className="flex">
          <FiClipboard className="icon" />
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

export default AdminSidebar;
