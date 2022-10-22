import React from "react";
import "./Task.css";
import Tasktype from "../../Components/Tasktype/Tasktype";
import AllImage from "../../assets/svgs/all.svg";
import WorkImage from "../../assets/svgs/work.svg";
import MusicImage from "../../assets/svgs/music.svg";
import DesignImage from "../../assets/svgs/design.svg";
import StudyImage from "../../assets/svgs/study.svg";
import TeamworkImage from "../../assets/svgs/teamwork.svg";
import ResetImage from "../../assets/svgs/reset.svg";

const Task = () => {
  return (
    <div className="tasks">
      <div className="section-header">
        <div className="list">
          <div className="list-bar">
            <span className="list-line"></span>
            <span className="list-line"></span>
            <span className="list-line"></span>
          </div>
          <h3>Lists</h3>
        </div>
        <div>
          <img src={ResetImage} alt="reset-page-button" />
        </div>
      </div>

      <div className="section-search">
        <input type="text" placeholder="Search List" />
      </div>

      <div className="section-task">
        <Tasktype TaskImage={AllImage} TaskName={"All"} TaskNumber={1} />
        <Tasktype TaskImage={WorkImage} TaskName={"Work"} TaskNumber={2} />
        <Tasktype TaskImage={MusicImage} TaskName={"Music"} TaskNumber={3} />
        <Tasktype TaskImage={DesignImage} TaskName={"Design"} TaskNumber={4} />
        <Tasktype
          TaskImage={TeamworkImage}
          TaskName={"Teamwork"}
          TaskNumber={5}
        />
        <Tasktype TaskImage={StudyImage} TaskName={"Study"} TaskNumber={6} />
      </div>
    </div>
  );
};

export default Task;
