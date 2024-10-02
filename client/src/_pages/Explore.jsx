/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import Admin from "../_components/Header/Admin";
import User from "../_components/Header/User";
import "../_styles/explore.scss";
import axios from "axios";
import { courseEndPoint } from "../_utils/endPoints";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Explore = ({ userInfo }) => {
  const [courseData, setData] = useState();
  const navigate = useNavigate();

  const fetchUserdata = async () => {
    const response = await axios.get(`${courseEndPoint}/get-all`);
    setData(response.data.courses);
  };

  useEffect(() => {
    fetchUserdata();
  }, [courseData]);
  return (
    <div>
      {userInfo?.isAdmin ? (
        <Admin userInfo={userInfo} />
      ) : (
        <User userInfo={userInfo} />
      )}
      <div className="main-explore flex col">
        <div className="main-courses flex">
          {courseData?.map((course) => {
            return (
              <div className="card flex col" key={course?._id}>
                <img
                  src={course?.thumbnail}
                  alt=""
                  onClick={() => navigate(`/course/${course?._id}`)}
                />
                <h2>{course?.title?.substring(0, 25)}...</h2>
                <p>{course?.instructor?.username}</p>
                <h3>${course?.price}</h3>
                <span>{course?.category}</span>
                <button
                  style={{
                    background: `${
                      course?.price <= 0 ? "#50C878" : "royalblue"
                    }`,
                  }}
                >
                  {course?.price > 0 ? "ENROLL" : "Enroll for free"}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Explore;
