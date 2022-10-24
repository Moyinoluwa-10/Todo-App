import React, { useEffect, useState } from "react";
import "./Tasklist.css";
import AllImage from "../../assets/svgs/allblue.svg";
import DeleteImage from "../../assets/svgs/delete.svg";
import BackImage from "../../assets/svgs/right.svg";
import DotImage from "../../assets/svgs/dotmenu.svg";
import { Link, useNavigate } from "react-router-dom";

const Alltask = () => {
  const [data, setData] = useState([]);
  const [token, setToken] = useState({});

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

  // console.log(data);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    const url = `https://users-todoapp.herokuapp.com/api/v1/todos/${id}`;
    fetch(url, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  const xyz = data?.map((data, key) => {
    return (
      <div className="section-task" key={key}>
        <div>
          <p className="date">{data.due_date.split("T")[0]}</p>
          <h2 className="title">{data.title}</h2>
          <p className="time">{data.due_date.slice(11, 16)}</p>
        </div>
        <div>
          <img
            src={DeleteImage}
            alt="delete-icon"
            onClick={() => {
              handleDelete(data.id);
            }}
          />
        </div>
      </div>
    );
  });

  const handleClick = () => {
    const url = "https://users-todoapp.herokuapp.com/api/v1/todos";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        title: "Workout",
        description: "Go to the gym",
        due_date: "2022-09-28T16:31",
      }),
    })
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
    // const url =
    //   "https://users-todoapp.herokuapp.com/api/v1/todos/e0ff55ac-1505-422e-8892-4ea18f6794da";
    // fetch(url, {
    //   method: "PATCH",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization:
    //       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhNjFhMGI5LWM4YzktNDJmYy05NzA4LTFjNTA5NGYyNmIzYSIsImVtYWlsIjoid2FsZXR1cm5lckB5YWhvby5jb20iLCJpYXQiOjE2NjY0NTgyMjksImV4cCI6MTY2NjQ2MTgyOX0.L7R0AMT2i2G-fSi14sTyv0o4E8zbuIehsxvVlZ2HML0",
    //   },
    //   body: JSON.stringify({
    //     title: "Shopping",
    //     description: "Go to shoprite",
    //   }),
    // })
    //   .then((response) => response.json())
    //   .then((result) => console.log(result))
    //   .catch((err) => console.log(err));
    //
  };

  return (
    <div className="tasklist">
      <div className="section-top">
        <div>
          <Link to={"/"}>
            <img src={BackImage} alt="return-button" />
          </Link>
        </div>
        <div>
          <img src={DotImage} alt="option-button" />
        </div>
      </div>
      <div className="section-bottom">
        <div className="section-task-details">
          <div>
            <img src={AllImage} alt="task-type" />
            <h1>All</h1>
            <p>{data.length} Tasks</p>
          </div>
        </div>
        <button onClick={handleClick}>Click me</button>

        <div className="section-list">{xyz}</div>
      </div>
    </div>
  );
};

export default Alltask;
