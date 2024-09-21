import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Dashboard, Onboarding } from "./_pages";
import { Login, Verify } from "./_auth";
import { Routes } from "react-router-dom";

function App() {
  const authToken = window.localStorage.getItem("authToken");
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={authToken ? <Dashboard /> : <Login />} />
          <Route path="/onboarding" element={<Onboarding />} />

          <Route path="/verify/:verifyToken" element={<Verify />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
