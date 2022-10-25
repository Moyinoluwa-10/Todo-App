import React, { useEffect, useState } from "react";
import "./Tasklist.css";
import AllImage from "../../assets/svgs/allblue.svg";
import DeleteImage from "../../assets/svgs/delete.svg";
import EditImage from "../../assets/svgs/pen.svg";
import BackImage from "../../assets/svgs/right.svg";
import DotImage from "../../assets/svgs/dotmenu.svg";
import { Link, useNavigate } from "react-router-dom";
import Add from "../../Components/Add/Add";
// import { useFormik } from "formik";
//
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
    }, 500);
  }, [data]);

  // console.log(data);
  const navigate = useNavigate();

  // const validate = (values) => {
  //   const errors = {};

  //   if (!values.email) {
  //     errors.email = "Please fill out this field";
  //   } else if (
  //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  //   ) {
  //     errors.email = "Invalid email address";
  //   }

  //   if (!values.password) {
  //     errors.password = "Please fill out this field";
  //   } else if (values.password.length < 8) {
  //     errors.password = "Password must be 8 characters or more";
  //   } else if (values.password === "12345678") {
  //     errors.password = "Password must not be 12345678!!!";
  //   }

  //   return errors;
  // };

  // const formik = useFormik({
  //   initialValues: {
  //     title: "",
  //     description: "",
  //     due_date
  //   },
  //   validate,
  //   onSubmit: () => {
  //     setTimeout(() => {
  //       const url = "https://users-todoapp.herokuapp.com/api/v1/users/login";
  //       fetch(url, {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(formik.values),
  //       })
  //         .then((response) => response.json())
  //         .then((result) => {
  //           console.log(result);
  //           if (result.message === "User logged in successfully") {
  //             toast.success(JSON.stringify("Login successful", null, 2), {
  //               position: "top-right",
  //               autoClose: 5000,
  //               hideProgressBar: true,
  //               closeOnClick: true,
  //               pauseOnHover: true,
  //               draggable: true,
  //               progress: undefined,
  //               theme: "colored",
  //             });
  //             const user = JSON.stringify(result);
  //             sessionStorage.setItem("user", user);
  //             setTimeout(() => {
  //               navigate("/");
  //             }, 1500);
  //           } else if (result.message === "Incorrect Details") {
  //             toast.error(
  //               JSON.stringify("Email or password is incorrect", null, 2),
  //               {
  //                 position: "top-right",
  //                 autoClose: 5000,
  //                 hideProgressBar: true,
  //                 closeOnClick: true,
  //                 pauseOnHover: true,
  //                 draggable: true,
  //                 progress: undefined,
  //                 theme: "colored",
  //               }
  //             );
  //           } else {
  //             toast.error(JSON.stringify("An error occured", null, 2), {
  //               position: "top-right",
  //               autoClose: 5000,
  //               hideProgressBar: true,
  //               closeOnClick: true,
  //               pauseOnHover: true,
  //               draggable: true,
  //               progress: undefined,
  //               theme: "colored",
  //             });
  //           }
  //         })
  //         .catch((err) => console.log(err));
  //     }, 200);
  //   },
  // });

  // const handleEdit = (id) => {
  //   const url = `https://users-todoapp.herokuapp.com/api/v1/todos/${id}`;
  //   fetch(url, {
  //     method: "PATCH",
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //     body: JSON.stringify({formik.values}),
  //   })
  //     .then((response) => response.json())
  //     .then((result) => console.log(result))
  //     .catch((err) => console.log(err));
  // };

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

  const todoItems = data?.map((data, key) => {
    return (
      <div className="section-task" key={key}>
        <div>
          <p className="date">{data.due_date.split("T")[0]}</p>
          <h2 className="title">{data.title}</h2>
          <p className="time">{data.due_date.slice(11, 16)}</p>
        </div>
        <div className="change">
          <div>
            <img
              src={EditImage}
              alt="edit-icon"
              onClick={() => {
                handleDelete(data.id);
              }}
            />
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
      </div>
    );
  });

  // const handleClick = () => {
  //   const url = "https://users-todoapp.herokuapp.com/api/v1/todos";
  //   fetch(url, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${token}`,
  //     },
  //     body: JSON.stringify({
  //       title: "Workout",
  //       description: "Go to the gym",
  //       due_date: "2022-09-28T16:31",
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((result) => console.log(result))
  //     .catch((err) => console.log(err));
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
  // };

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

        <div className="section-list">{todoItems}</div>
        <Link to={"/create-task"}>
          <Add />
        </Link>
      </div>
    </div>
  );
};

export default Alltask;
