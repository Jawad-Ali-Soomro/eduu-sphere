import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./_pages/Home";
import Login from "./_auth/Login";
import Register from "./_auth/Register";
import { useState } from "react";
import axios from "axios";
import { userEndPoint } from "./_utils/endPoints";
import { useEffect } from "react";

function App() {
  const authToken = window.localStorage.getItem("_eduusphere_auth_token");
  const [userInfo, setUserInfo] = useState();

  const sendingRequest = async () => {
    try {
      const response = await axios.get(`${userEndPoint}/get-profile`, {
        headers: {
          Authorization: `Bearer ${authToken}`, // Set the token in the Authorization header
        },
      });
      setUserInfo(response.data.data.data);
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };

  authToken ? sendingRequest() : this;

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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
