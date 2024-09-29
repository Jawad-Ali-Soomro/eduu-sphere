import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./_pages/Home";
import Login from "./_auth/Login";
import Register from "./_auth/Register";

function App() {
  const authToken = window.localStorage.getItem("_eduusphere_auth_token");
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={authToken ? <Home /> : <Login />} />
          <Route
            path="/register"
            element={authToken ? <Home /> : <Register />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
