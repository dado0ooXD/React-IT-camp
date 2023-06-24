import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Formik } from "formik";
import * as yup from "yup";

const loginSchema = yup.object({
    email: yup.string().required("Email is required field").email("Email is not valid"),
    password: yup.string().required("Password is required field").min(8).max(30)
})

const Login = () => {
  const navigate = useNavigate();

  const submitLogin = () => {
    fetch("https://js-course-server.onrender.com/user/login", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {});
  };

    return <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, actions) => {
            submitLogin()
        }}
    >
      
  </Formik>;
};

export default Login;
