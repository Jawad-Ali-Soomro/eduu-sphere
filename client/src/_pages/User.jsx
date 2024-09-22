/* eslint-disable react/prop-types */
import QRCode from "react-qr-code";
import "../_styles/user.scss";
import ReactStars from "react-stars";
const User = ({ user }) => {
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
      progress: 50,
    },
  ];
  return (
    <div className="user-home flex col">
      <h1 className="flex col">
        Welcome <span>{user?.name}</span>
      </h1>
      <div className="courses-enrolled flex">
        <div className="wrapper flex">
          {courseData?.map((card) => {
            return (
              <div className="card flex col" key={card?.name}>
                <img src={card?.image} alt="" />
                <h3>{card?.name}</h3>
                <h4>{card?.instructor}</h4>
                <ReactStars count={card?.stars} className="star" />
                <div className="course-card-progress">
                  <progress value={card?.progress} max={100} />
                </div>
                <button>Continue</button>
              </div>
            );
          })}
        </div>
      </div>
      <div className="qr-code-bar">
        <QRCode value={`http://localhost:5173/user/${user?._id}`} size={150} />
      </div>
    </div>
  );
};

export default User;
