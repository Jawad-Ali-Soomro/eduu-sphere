import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Welcome } from "./_pages";
import { Login } from "./_auth";
import { Routes } from "react-router-dom";

function App() {
  const authToken = window.localStorage.getItem("authToken");
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={authToken ? <Welcome /> : <Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
