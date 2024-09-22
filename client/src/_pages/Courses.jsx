import ReactStars from "react-stars";
import "../_styles/courses.scss";

const Courses = () => {
  const courseData = [
    {
      name: "The Ultimate Javascript",
      image: "https://img-c.udemycdn.com/course/240x135/851712_fc61_6.jpg",
      instructor: "Jons",
      stars: 5,
      price: 10,
      progress: 30,
    },
    {
      name: "The Ultimate React",
      image: "https://img-c.udemycdn.com/course/240x135/4471614_361e_8.jpg",
      instructor: "Jons",
      stars: 3.5,
      price: 10,
      progress: 70,
    },
    {
      name: "[NEW] Spring Boot",
      image: "https://img-c.udemycdn.com/course/240x135/647428_be28_10.jpg",
      instructor: "Jons",
      stars: 4,
      price: 10,
    },
    {
      name: "[NEW] Spring Boot",
      image: "https://img-c.udemycdn.com/course/240x135/647428_be28_10.jpg",
      instructor: "Jons",
      stars: 4,
      price: 10,
    },
  ];
  return (
    <div className="courses-wrap flex col">
      <div className="wrapper flex">
        {courseData?.map((course) => {
          return (
            <div className="card flex col" key={course?.name}>
              <img src={course?.image} alt="" />
              <h2>{course?.name}</h2>
              <p>{course?.instructor}</p>
              <ReactStars value={course?.stars} />
              <button>ENROLL</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Courses;
