import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Pages/Register/Register";
import Task from "./Pages/Task/Task";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path={"/"} element={<Register />} />
        <Route exact path={"/tasks"} element={<Task />} />
      </Routes>
    </Router>
  );
}

export default App;

