import React from "react";
import "./Login.css";
import RegisterImage from "../../assets/images/register.png";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const validate = (values) => {
    const errors = {};

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
      email: "",
      password: "",
    },
    validate,
    onSubmit: () => {
      setTimeout(() => {
        const url = "https://users-todoapp.herokuapp.com/api/v1/users/login";
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
            if (result.message === "User logged in successfully") {
              toast.success(JSON.stringify("Login successful", null, 2), {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
              const user = JSON.stringify(result);
              sessionStorage.setItem("user", user);
              setTimeout(() => {
                navigate("/");
              }, 1500);
            } else if (result.message === "Incorrect Details") {
              toast.error(
                JSON.stringify("Email or password is incorrect", null, 2),
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
    <div className="login">
      <div className="title">
        <h1>Login to your account</h1>
      </div>

      <div className="image-container">
        <img src={RegisterImage} alt="Group1-logo" />
      </div>

      <div>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Input email"
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
              autoComplete={"email"}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Input password"
              onChange={formik.handleChange}
              value={formik.values.password}
              onBlur={formik.handleBlur}
              autoComplete={"current-password"}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="error">{formik.errors.password}</div>
            ) : null}
          </div>

          <button className="btn" type="submit">
            Log In
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
        <Link to="/register" className="footLink">
          Don't have an account? Register
        </Link>
      </div>
    </div>
  );
};

export default Login;
