/* eslint-disable react/prop-types */
import ".././_styles/user_dashboard.scss";

const Dash_User = ({ userInfo }) => {
  return (
    <div className="main-dash flex col">
      <h1>Welcome {userInfo.username}</h1>
      <div
        className="enrolled-courses flex"
        data-content="Enrolled Courses"
      ></div>
    </div>
  );
};

export default Dash_User;
