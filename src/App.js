import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Pages/Register/Register";
import Task from "./Pages/Task/Task";
import VerifyCode from "./Pages/Verify/VerifyCode";
import CreateNewTask from "./Pages/CreateNewTask/CreateNewTask";
import Alltask from "./Pages/Tasklist/Alltask";
import Login from "./Pages/Login/Login";
import ProtectedRoutes from "./Components/ProtectedRoutes/ProtectedRoutes";

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route exact path={"/tasks"} element={<Task />} />
          <Route exact path={"/verify"} element={<VerifyCode />} />
          <Route exact path={"/create-task"} element={<CreateNewTask />} />
          <Route exact path={"/register"} element={<Register />} />
          <Route exact path={"/login"} element={<Login />} />
          <Route exact path={"/tasks/all"} element={<Alltask />} />
          <Route element={<ProtectedRoutes />}>
            <Route exact path={"/"} element={<Task />} />
          </Route>
                  <Route exact path={"/tasks/all"} element={<Alltask />} />
        </Routes>
      </Router>

</div>
  );
}

export default App;
