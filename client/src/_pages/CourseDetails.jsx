import axios from "axios";
import { useParams } from "react-router-dom";
import { apiCourse } from "../_global/apiRoutes"; // removed apiUser
import { useEffect, useState } from "react";
import "../_styles/maincourse.scss";

const CourseDetails = () => {
  const { courseId } = useParams();
  const [courseDetails, setDetails] = useState(null);
  const [isEnrolled, setIsEnrolled] = useState(false);

  const getCourseDetails = async () => {
    try {
      const apiResponse = await axios.get(`${apiCourse}/get/${courseId}`);
      setDetails(apiResponse.data.data);
    } catch (error) {
      console.error("Error fetching course details", error);
    }
  };

  const checkEnrollment = () => {
    const loggedInUserId = window.localStorage.getItem("userId");
    const enrolled = courseDetails?.studentsEnrolled?.some(
      (student) => student?._id === loggedInUserId
    );
    setIsEnrolled(enrolled);
  };

  useEffect(() => {
    if (courseDetails) {
      checkEnrollment();
    }
  }, [courseDetails]);

  useEffect(() => {
    getCourseDetails();
  }, [courseId]);

  const enrollUser = async () => {
    try {
      const loggedInUserId = window.localStorage.getItem("userId");
      const apiResponse = await axios.post(`${apiCourse}/enroll`, {
        userId: loggedInUserId,
        courseId: courseId,
      });
      if (apiResponse.status === 200) {
        setIsEnrolled(true);
        setDetails((prevDetails) => ({
          ...prevDetails,
          studentsEnrolled: [
            ...prevDetails.studentsEnrolled,
            { _id: loggedInUserId },
          ],
        }));
      }
    } catch (error) {
      console.error("Error enrolling user", error);
    }
  };

  return (
    <div className="main-course-detail flex">
      <div className="top-banner flex col">
        <h1>{courseDetails?.title}</h1>
        <p>{courseDetails?.description}</p>
        <p
          style={{
            fontWeight: "600",
            padding: "10px 30px",
            background: "indigo",
            borderRadius: "20px",
            color: "white",
            textTransform: "uppercase",
            fontSize: ".5rem",
          }}
        >
          {courseDetails?.level}
        </p>
        <div className="flex info-wrap">
          <h4 className="flex">{courseDetails?.lessons?.length} Lessons </h4> •
          <h4 className="flex">{courseDetails?.quizzes?.length} Quizzes</h4> •
          <h4 className="flex">{courseDetails?.tasks?.length} Tasks</h4> •
          <h4 className="flex">
            {courseDetails?.studentsEnrolled?.length} Enrollments
          </h4>
        </div>
        <div className="details-thumbnail flex col">
          <img src={courseDetails?.thumbnail} alt="" />
          <p>{courseDetails?.category}</p>
          <p>{courseDetails?.duration}</p>
          <button
            disabled={isEnrolled}
            data-price={"$" + `${courseDetails?.price}`}
            style={{
              background: `${isEnrolled ? "gray" : "#333"}`,
              cursor: `${isEnrolled ? "not-allowed" : "pointer"}`,
            }}
            onClick={enrollUser}
          >
            {isEnrolled ? "Enrolled" : "Enroll"}
          </button>
        </div>
      </div>
      <div className="course-details flex col"></div>
    </div>
  );
};

export default CourseDetails;
