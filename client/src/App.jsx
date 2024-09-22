import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Home } from "./_pages";
import { Login } from "./_auth";
import { Routes } from "react-router-dom";
import Register from "./_auth/Register";

function App() {
  const authToken = window.localStorage.getItem("authToken");
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={authToken ? <Home /> : <Login />} />
          <Route path={authToken ? "/" : "/register"} element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
