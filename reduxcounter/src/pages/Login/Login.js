import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Formik } from "formik";
import * as yup from "yup";
import jwtDecode, * as ywt_decode from 'jwt-decode';
import './Login.css';
import { useDispatch, useSelector } from "react-redux";
import { authSlice } from "../../store/authSlice";

const loginSchema = yup.object({
    email: yup.string().required("Email is required field").email("Email is not valid"),
    password: yup.string().required("Password is required field").min(8).max(30)
})

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);

  const submitLogin = (values) => {
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
                const decoded = jwtDecode(data.token);
              console.log("data", data, "token", decoded);
              dispatch(authSlice.actions.setData(decoded));
              console.log(authState);
                localStorage.setItem("auth_token", data.token);
                navigate("/");
          }
      });
  };

    return <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, actions) => {
            submitLogin(values)
        }}
        validationSchema={loginSchema}
    >{({
        values,
        errors, 
        touched, 
        handleChange,
        handleBlur,
        handleSubmit,
        }) => (
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
                handleSubmit()
              }} type="button">
                Submit
                  </button>
                  
                  
                </div>
            </div>
    )}
      
  </Formik>;
};

export default Login;
