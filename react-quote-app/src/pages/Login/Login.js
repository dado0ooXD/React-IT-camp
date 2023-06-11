import React, { useState } from "react";
import "./Login.css";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

const loginSchema = yup.object({
  email: yup.string().required("Required field").email("Neispravan email"),
  // .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i),
  password: yup.string().required("Required field").min(6).max(50),
});

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="login-wrapper">
      <Formik
        initialValues={{ email: "", password: ""}}
        onSubmit={(values, actions) => {
          fetch("https://js-course-server.onrender.com/user/login", {
            method: "POST",
            body: JSON.stringify(values),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.token) {
                localStorage.setItem("auth_token", data.token);
                navigate("/addnewquote");
              }
              // else {
              //   setIsLoading(false)
              // }
            });
        }}
        validationSchema={loginSchema}
        
        // validate={(values) => {
        //   const errors = {};
        //   if (
        //     !values.error ||
        //     values.error.length < 10 ||
        //     values.error.length > 100
        //   ) {
        //     errors.email = "Neispravan email";
        //   }
        //   return errors;
        // }}
      >
        {({
          values, // formikov state
          errors, // errors = { email: 'Neispravan email' }
          touched, // touched = { email: true }
          handleChange,
          handleBlur,
          handleSubmit,
        }) =>
          isLoading ? (
            <div className="spinner-border text-danger" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            <div className="formica">
              <div>
                <input
                  type="email"
                    name="email"
                    className="inputs"
                    placeholder="Enter your email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <p className="error-message">
                  {errors.email && touched.email && errors.email}
                </p>
              </div>
              <div>
                <input
                  type="password"
                    name="password"
                    className="inputs"
                    placeholder="Enter your password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <p className="error-message">
                  {errors.password && touched.password && errors.password}
                </p>
              </div>
                <div >
                  <button className="submit-btn" onClick={() => {
                    setIsLoading(true);
                    setTimeout(() => { handleSubmit();}, 2000); 
              }} type="button">
                Submit
                  </button>
                  <p className="no-account" onClick={() => {
                    setIsLoading(true);
                    // setTimeout(() => {navigate("/signup");}, 2000);
                    navigate("/signup")
                  }}>Sign Up?</p>
                  {/* <button
                    className="submit-btn"
                onClick={() => {
                  console.log(values, "values");
                  console.log(errors, "errors");
                  console.log(touched, "touched");
                }}
              >
                Console log states
              </button> */}
                </div>
            </div>
          )
        }
      </Formik>
    </div>
  );
};

export default Login;
