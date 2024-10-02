import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./_pages/Home";
import Login from "./_auth/Login";
import Register from "./_auth/Register";
import Explore from "./_pages/Explore";
import { useState, useEffect } from "react";
import axios from "axios";
import { userEndPoint } from "./_utils/endPoints";
import CourseDetails from "./_pages/CourseDetails";

function App() {
  const authToken = window.localStorage.getItem("_eduusphere_auth_token");
  const [userInfo, setUserInfo] = useState(null); // Initialize as null to handle loading state

  useEffect(() => {
    const sendingRequest = async () => {
      try {
        const response = await axios.get(`${userEndPoint}/get-profile`, {
          headers: {
            Authorization: `Bearer ${authToken}`, // Set the token in the Authorization header
          },
        });
        setUserInfo(response.data.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    if (authToken) {
      sendingRequest();
    }
  }, [authToken]); // Add authToken as a dependency

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={authToken ? <Home userInfo={userInfo} /> : <Login />}
          />
          <Route
            path="/register"
            element={authToken ? <Home userInfo={userInfo} /> : <Register />}
          />
          <Route
            path="/explore"
            element={authToken ? <Explore userInfo={userInfo} /> : <Login />}
          />
          <Route
            path="/course/:id"
            element={
              authToken ? <CourseDetails userInfo={userInfo} /> : <Login />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
