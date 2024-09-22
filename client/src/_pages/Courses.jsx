import "../_styles/courses.scss";
import { useState } from "react";
import axios from "axios";
import { apiCourse } from "../_global/apiRoutes";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BiSearch } from "react-icons/bi";

const Courses = () => {
  const [courseData, setData] = useState();
  const navigate = useNavigate();
  const getCourses = async () => {
    const apiResponse = await axios.get(`${apiCourse}/get/all`);
    setData(apiResponse.data.data);
  };
  useEffect(() => {
    getCourses();
  });

  return (
    <div className="courses-wrap flex col">
      <div className="search-bar flex">
        <BiSearch />
        <input type="text" placeholder="Search Courses!" />
      </div>
      <div className="wrapper flex">
        {courseData?.map((course) => {
          return (
            <div
              className="card flex col"
              key={course?.name}
              onClick={() => navigate(`/course/${course?._id}`)}
            >
              <img src={course?.thumbnail} alt="" />
              <h2>{course?.title.substring(0, 25)}...</h2>
              <p>{course?.instructor?.name}</p>
              <div className="level flex">
                <h5>{course?.level}</h5>
                <p>${course?.price}</p>
              </div>
              <button>ENROLL</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Courses;
