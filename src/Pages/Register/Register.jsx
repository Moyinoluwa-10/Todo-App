import React from "react";
import "./Register.css";
import RegisterImage from "../../Assets/Images/register.png";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "Please fill out this field";
    }

    if (!values.email) {
      errors.email = "Please fill out this field";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Please fill out this field";
    } else if (values.password.length < 8) {
      errors.password = "Password must be 8 characters or more";
    } else if (values.password === "12345678") {
      errors.password = "Password must not be 12345678!!!";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validate,
    onSubmit: () => {
      setTimeout(() => {
        const url = "https://users-todoapp.herokuapp.com/api/v1/users/";
        fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formik.values),
        })
          .then((response) => response.json())
          .then((result) => {
            console.log(result);
            if (result.message === "User created") {
              toast.success(JSON.stringify("Signup successful", null, 2), {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
              setTimeout(() => {
                navigate("/login");
              }, 1500);
            } else if (result.message === "User Already Exists") {
              toast.error(
                JSON.stringify("User Already Exists, Please Log In", null, 2),
                {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: true,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "colored",
                }
              );
              setTimeout(() => {
                navigate("/login");
              }, 1500);
            } else {
              toast.error(JSON.stringify("An error occured", null, 2), {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
            }
          })
          .catch((err) => console.log(err));
      }, 200);
    },
  });

  return (
    <div className="register">
      <div className="image-container">
        <img src={RegisterImage} alt="Group1-logo" />
      </div>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Input name"
              onChange={formik.handleChange}
              value={formik.values.name}
              onBlur={formik.handleBlur}
              required
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="error">{formik.errors.name}</div>
            ) : null}
          </div>
          <div className="form-group">
            <input
              type="text"
              name="email"
              placeholder="Input email"
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="form-group">
            <input
              type="text"
              name="password"
              placeholder="Input password"
              onChange={formik.handleChange}
              value={formik.values.password}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="error">{formik.errors.password}</div>
            ) : null}
          </div>

          <button className="btn" type="submit">
            Get Started
          </button>

          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </form>
      </div>
      <div className="link-box">
        <Link to="/login" className="footLink">
          Already have an account? Log In
        </Link>
      </div>
    </div>
  );
};

export default Register;
