/* eslint-disable react-hooks/exhaustive-deps */
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom"; // Import Navigate
import { Login, NotFound } from "./_auth";
import Register from "./_auth/Register";
import { AdminSidebar, StudentSidebar, TeacherSidebar } from "./_components";
import Admin from "./_pages/Admin";
import Teacher from "./_pages/Teacher";
import User from "./_pages/User";
import axios from "axios";
import { apiUser } from "./_global/apiRoutes";
import { useEffect, useState } from "react";

function App() {
  const authToken = window.localStorage.getItem("authToken");
  const [user, setUser] = useState(null);

  const getUserProfile = async () => {
    if (!authToken) {
      return;
    }
    try {
      const apiResponse = await axios.get(`${apiUser}/get/profile`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      setUser(apiResponse.data.data);
    } catch (error) {
      console.error("Error fetching user profile:", error);
      // If error occurs, user will not be set and they will be redirected to login
    }
  };

  useEffect(() => {
    if (authToken) {
      getUserProfile();
    }
  }, [authToken]);

  // Function to render component based on user role
  const renderComponentByRole = () => {
    switch (user?.role) {
      case "admin":
        return <Admin user={user} />;
      case "teacher":
        return <Teacher user={user} />;
      case "student":
        return <User user={user} />;
      default:
        return <Navigate to="/login" />; // Redirect to login if the role is undefined
    }
  };

  return (
    <BrowserRouter>
      {/* Conditionally render the sidebar based on user role */}
      {authToken && user && user.role === "student" && <StudentSidebar />}
      {authToken && user && user.role === "admin" && <AdminSidebar />}
      {authToken && user && user.role === "teacher" && <TeacherSidebar />}

      <Routes>
        {/* Root path - render based on role or redirect to login */}
        <Route
          path="/"
          element={
            authToken ? (
              user ? (
                renderComponentByRole() // Render the correct component based on role
              ) : (
                // If user is not yet fetched, we can show a loading spinner or empty element
                this
              )
            ) : (
              <Navigate to="/login" /> // Redirect to login if no auth token
            )
          }
        />

        {/* Login and register routes */}
        <Route
          path="/login"
          element={authToken ? <Navigate to={"/"} /> : <Login />}
        />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
