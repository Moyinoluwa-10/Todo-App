import React, { useEffect, useState } from "react";
import "./Tasklist.css";
import AllImage from "../../assets/svgs/allblue.svg";
import DeleteImage from "../../assets/svgs/delete.svg";
// import EditImage from "../../assets/svgs/edit.svg";
import BackImage from "../../assets/svgs/right.svg";
import DotImage from "../../assets/svgs/dotmenu.svg";
import { Link, useNavigate } from "react-router-dom";
import Add from "../../Components/Add/Add";
import { useFormik } from "formik";
//
const Alltask = () => {
  const [data, setData] = useState([]);
  const [edit, setEdit] = useState({
    id: "2d8dbf71-c54a-480c-be2e-5e0cbf8541a2",
    user_id: "e4c2acd4-fdfd-426c-827c-b16ac3deebb3",
    title: "Workout",
    description: "Go to the gym",
    status: "Pending",
    due_date: "2022-09-28T16:31:00.000Z",
    created_at: "2022-10-25T05:35:37.374Z",
    updated_at: "2022-10-25T05:35:37.374Z",
  });
  const [token, setToken] = useState({});
  const [showModal, setShowModal] = useState(false);

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

  const validate = (values) => {
    const errors = {};

    if (!values.title) {
      errors.title = "Please fill out this field";
    }

    if (!values.description) {
      errors.description = "Please fill out this field";
    }

    return errors;
  };

  // setEdit();

  const formik = useFormik({
    initialValues: {
      title: edit.title,
      description: edit.description,
      due_date: edit.due_date,
    },
    validate,
    onSubmit: (objid) => {
      const id = objid;
      setTimeout((id) => {
        const url = `https://users-todoapp.herokuapp.com/api/v1/todos/${id}`;
        fetch(url, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formik.values),
        })
          .then((response) => response.json())
          .then((result) => {
            console.log(result);
            if (result.message === "User logged in successfully") {
            } else if (result.message === "Incorrect Details") {
            } else {
              setEdit(result);
            }
          })
          .catch((err) => console.log(err));
      }, 200);
    },
  });

  const handleEdit = (id) => {
    const url = `https://users-todoapp.herokuapp.com/api/v1/todos/${id}`;
    fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((result) => {
        // console.log(result);
        if (result.message === "Todo Not Found") {
          console.log("Todo Not Found");
        } else {
          setEdit(result);
          console.log(result);
          setTimeout(() => {
            console.log(edit);
            // setShowModal(true);
          }, 3000);
        }
      })
      .catch((err) => console.log(err));
  };

  // console.log(edit);

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
              src={DeleteImage}
              alt="edit-icon"
              onClick={() => {
                handleEdit(data.id);
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

  const EditModal = (
    <div className="section-edit">
      <div className="edit">
        <form>
          <div className="form-group">
            <input
              type="text"
              name="title"
              placeholder="Add title"
              onChange={formik.handleChange}
              value={formik.values.title}
              onBlur={formik.handleBlur}
            />
            {formik.touched.title && formik.errors.title ? (
              <div className="error">{formik.errors.title}</div>
            ) : null}
          </div>
          <div className="form-group">
            <textarea
              type="text"
              name="description"
              placeholder="Description"
              onChange={formik.handleChange}
              value={formik.values.description}
              onBlur={formik.handleBlur}
            />
            {formik.touched.description && formik.errors.description ? (
              <div className="error">{formik.errors.description}</div>
            ) : null}
          </div>
          <div className="form-group">
            <input
              type="datetime-local"
              name="datetime"
              // onChange={formik.handleChange}
              // value={formik.values.due_date}
              // onBlur={formik.handleBlur}
            />
          </div>

          <button className="btn" type="submit">
            Save
          </button>
        </form>
      </div>
    </div>
  );

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
      <div>{showModal && EditModal}</div>
    </div>
  );
};

export default Alltask;
