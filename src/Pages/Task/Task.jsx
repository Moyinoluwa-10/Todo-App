import React from "react";
import "./Task.css";
import Tasktype from "../../Components/Tasktype/Tasktype";
import AllImage from "../../Assets/svgs/all.svg";
import WorkImage from "../../Assets/svgs/work.svg";
import MusicImage from "../../Assets/svgs/music.svg";
import DesignImage from "../../Assets/svgs/design.svg";
import StudyImage from "../../Assets/svgs/study.svg";
import TeamworkImage from "../../Assets/svgs/teamwork.svg";
import ResetImage from "../../Assets/svgs/reset.svg";
import { Link } from "react-router-dom";

const Task = () => {
  const handleClick = () => {
    // const url = "https://users-todoapp.herokuapp.com/api/v1/todos";
    // const url = "https://jsonplaceholder.typicode.com/todos/1";
    // fetch(url, {
    //   headers: {
    //     Authorization:
    //       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImY3OTg1OGY2LTEzMWEtNDNmNC04MmQzLTBhZDg5MGM1ZDliZiIsImVtYWlsIjoiamVycnl3aXprbGF5MUBnbWFpbC5jb20iLCJpYXQiOjE2NjY0NDgzNTksImV4cCI6MTY2NjQ1MTk1OX0.VY2wyLWzrrg6JGya2wQW_PzHf-y3QnedTbWMfxEdB2k",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((json) => console.log(json));
  };

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
      <button onClick={handleClick}>Click me</button>

      <div className="section-task">
        <Link to={"/tasks/all"}>
          <Tasktype TaskImage={AllImage} TaskName={"All"} TaskNumber={1} />
        </Link>
        <Tasktype TaskImage={MusicImage} TaskName={"General"} TaskNumber={3} />
        <Tasktype TaskImage={WorkImage} TaskName={"Work"} TaskNumber={2} />
        <Tasktype TaskImage={DesignImage} TaskName={"Design"} TaskNumber={4} />
        <Tasktype
          TaskImage={TeamworkImage}
          TaskName={"Shopping"}
          TaskNumber={5}
        />
        <Tasktype TaskImage={StudyImage} TaskName={"Study"} TaskNumber={6} />
      </div>
    </div>
  );
};

export default Task;
