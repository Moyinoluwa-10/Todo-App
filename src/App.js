import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Pages/Register/Register";
import Task from "./Pages/Task/Task";
import VerifyCode from "./Pages/Verify/VerifyCode";
import CreateNewTask from "./Pages/CreateNewTask/CreateNewTask";

function App() {
  return (
    <div class="container">
      <Router>
        <Routes>
          <Route exact path={"/"} element={<Register />} />
          <Route exact path={"/tasks"} element={<Task />} />
          <Route exact path={"/verify"} element={<VerifyCode />} />
          <Route exact path={"/create-task"} element={<CreateNewTask />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
