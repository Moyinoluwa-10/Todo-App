import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Pages/Register/Register";
import Task from "./Pages/Task/Task";
import Alltask from "./Pages/Tasklist/Alltask";
import Login from "./Pages/Login/Login";
import ProtectedRoutes from "./Components/ProtectedRoutes/ProtectedRoutes";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path={"/register"} element={<Register />} />
        <Route exact path={"/login"} element={<Login />} />
        <Route element={<ProtectedRoutes />}>
          <Route exact path={"/"} element={<Task />} />
        </Route>
        <Route exact path={"/tasks/all"} element={<Alltask />} />
      </Routes>
    </Router>
  );
}

export default App;
