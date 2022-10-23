import React, { useEffect, useState } from "react";
import "./Tasklist.css";
import AllImage from "../../assets/svgs/allblue.svg";
import DeleteImage from "../../assets/svgs/delete.svg";

const Alltask = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const url = "https://users-todoapp.herokuapp.com/api/v1/todos";
    fetch(url, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImY3OTg1OGY2LTEzMWEtNDNmNC04MmQzLTBhZDg5MGM1ZDliZiIsImVtYWlsIjoiamVycnl3aXprbGF5MUBnbWFpbC5jb20iLCJpYXQiOjE2NjY0NTc5NjQsImV4cCI6MTY2NjQ2MTU2NH0.SyUOmKkFZU2JhJvAsMfG6_OCVyGhhFsf61TvF2SZ7qw",
      },
    })
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((err) => console.log(err));
  }, []);

  const xyz = data?.map((data, key) => {
    return (
      <div className="section-task" key={key}>
        <div>
          <p className="date">{data.due_date.split("T")[0]}</p>
          <h2 className="title">{data.title}</h2>
          <p className="time">16:00</p>
        </div>
        <div>
          <img src={DeleteImage} alt="delete-icon" />
        </div>
      </div>
    );
  });

  const handleClick = () => {
    // const url = "https://users-todoapp.herokuapp.com/api/v1/users/";
    // fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     name: "wale",
    //     email: "waleturner@yahoo.com",
    //     password: "hiydghkjcksdcachhcagcdcdyihcdcadhcacah",
    //   }),
    // })
    //   .then((response) => response.json())
    //   .then((result) => console.log(result))
    //   .catch((err) => console.log(err));
    // const url = "https://users-todoapp.herokuapp.com/api/v1/users/login";
    // fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     email: "waleturner@yahoo.com",
    //     password: "hiydghkjcksdcachhcagcdcdyihcdcadhcacah",
    //   }),
    // })
    //   .then((response) => response.json())
    //   .then((result) => console.log(result))
    //   .catch((err) => console.log(err));
    // const url = "https://users-todoapp.herokuapp.com/api/v1/todos";
    // fetch(url, {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization:
    //       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhNjFhMGI5LWM4YzktNDJmYy05NzA4LTFjNTA5NGYyNmIzYSIsImVtYWlsIjoid2FsZXR1cm5lckB5YWhvby5jb20iLCJpYXQiOjE2NjY0NTgyMjksImV4cCI6MTY2NjQ2MTgyOX0.L7R0AMT2i2G-fSi14sTyv0o4E8zbuIehsxvVlZ2HML0",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((result) => console.log(result))
    //   .catch((err) => console.log(err));
    // const url = "https://users-todoapp.herokuapp.com/api/v1/todos";
    // fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization:
    //       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhNjFhMGI5LWM4YzktNDJmYy05NzA4LTFjNTA5NGYyNmIzYSIsImVtYWlsIjoid2FsZXR1cm5lckB5YWhvby5jb20iLCJpYXQiOjE2NjY0NTgyMjksImV4cCI6MTY2NjQ2MTgyOX0.L7R0AMT2i2G-fSi14sTyv0o4E8zbuIehsxvVlZ2HML0",
    //   },
    //   body: JSON.stringify({
    //     title: "Workout",
    //     description: "Go to the gym",
    //     due_date: "2022-10-26",
    //   }),
    // })
    //   .then((response) => response.json())
    //   .then((result) => console.log(result))
    //   .catch((err) => console.log(err));
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
    // const url =
    //   "https://users-todoapp.herokuapp.com/api/v1/todos/e0ff55ac-1505-422e-8892-4ea18f6794da";
    // fetch(url, {
    //   method: "DELETE",
    //   headers: {
    //     Authorization:
    //       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhNjFhMGI5LWM4YzktNDJmYy05NzA4LTFjNTA5NGYyNmIzYSIsImVtYWlsIjoid2FsZXR1cm5lckB5YWhvby5jb20iLCJpYXQiOjE2NjY0NTgyMjksImV4cCI6MTY2NjQ2MTgyOX0.L7R0AMT2i2G-fSi14sTyv0o4E8zbuIehsxvVlZ2HML0",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((result) => console.log(result))
    //   .catch((err) => console.log(err));
  };

  return (
    <div className="tasklist">
      <div className="section-top"></div>
      <div className="section-bottom">
        <div className="section-task-details">
          <div>
            <img src={AllImage} alt="task-type" />
            <h1>All</h1>
            <p>23 Tasks</p>
          </div>
        </div>
        <button onClick={handleClick}>Click me</button>
        <div className="section-list">
          <div className="section-task">
            <div>
              <p className="date">Today</p>
              <h2 className="title">Practice design</h2>
              <p className="time">16:00</p>
            </div>
            <div>
              <img src={DeleteImage} alt="delete-icon" />
            </div>
          </div>
          {xyz}
        </div>
      </div>
    </div>
  );
};

export default Alltask;
