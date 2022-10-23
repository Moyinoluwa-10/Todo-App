import React from "react";
import "./Tasktype.css";

const Tasktype = ({ TaskImage, TaskName, TaskNumber }) => {
  return (
    <div className="tasktype">
      <img src={TaskImage} alt="taskimage" />
      <h3>{TaskName}</h3>
      <p>{TaskNumber} tasks</p>
    </div>
  );
};

export default Tasktype;
