import React, { useState, useEffect } from "react";
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
  useEffect(() => {
    const userData = JSON.parse(sessionStorage.getItem("user"));
    if (userData) {
      setToken(userData.token);
    } else {
      navigate("/login");
    }

    setTimeout(() => {
      const url = "https://users-todoapp.herokuapp.com/api/v1/todos";
      fetch(url, {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      })
        .then((response) => response.json())
        .then((result) => {
          // console.log(result);
          if (result.message === "Invalid Token") {
            navigate("/login");
          } else {
            setData(result);
          }
        })
        .catch((err) => console.log(err));
    }, 1000);
  }, []);

  const [data, setData] = useState([]);
  const [token, setToken] = useState({});

  const navigate = useNavigate();

  // console.log(token);
  // console.log(data);

  // const handleClick = () => {
  //   const url = "https://users-todoapp.herokuapp.com/api/v1/todos";
  //   fetch(url, {
  //     headers: {
  //       Authorization:
  //         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImU0YzJhY2Q0LWZkZmQtNDI2Yy04MjdjLWIxNmFjM2RlZWJiMyIsImVtYWlsIjoib3BlQHlhaG9vLmNvbSIsImlhdCI6MTY2NjU1NzQ2NCwiZXhwIjoxNjY2NTYxMDY0fQ.hhaP3N7ntp8e6Vj2daLnRD9wutneQexTi5-s7s4vh7",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((json) => {
  //       console.log(json.message);
  //     });
  // };

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
          <img
            src={ResetImage}
            alt="reset-page-button"
            onClick={() => {
              window.location.reload();
            }}
          />
        </div>
      </div>

      <div className="section-search">
        <input type="text" placeholder="Search List" />
      </div>

      {/* <button onClick={handleClick}>Click me</button> */}
      <div className="section-task">
        <Link to={"/tasks/all"}>
          <Tasktype
            TaskImage={AllImage}
            TaskName={"All"}
            TaskNumber={data.length}
          />
        </Link>
        {/* <Tasktype TaskImage={MusicImage} TaskName={"General"} TaskNumber={3} /> */}
        {/* <Tasktype TaskImage={WorkImage} TaskName={"Work"} TaskNumber={2} /> */}
        {/* <Tasktype TaskImage={DesignImage} TaskName={"Design"} TaskNumber={4} /> */}
        {/* <Tasktype
          TaskImage={TeamworkImage}
          TaskName={"Shopping"}
          TaskNumber={5}
        /> */}
        {/* <Tasktype TaskImage={StudyImage} TaskName={"Study"} TaskNumber={6} /> */}
      </div>
    </div>
  );
};

export default Task;
