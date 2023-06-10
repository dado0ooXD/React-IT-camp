import React, {useState} from "react";
import "./Login.css";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

const loginSchema = yup.object({
  email: yup.string().required("Nedostaje email").email("Neispravan email"),
  // .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i),
  password: yup.string().required("Unesite password").min(6).max(50),
});

const Login = () => {
  const navigate = useNavigate();
  

  return (
    <div className="login-wrapper">
      <Formik
        initialValues={{ email: "", password: "", isLoading: false }}
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
              values.isLoading = true
              if (data.token) {
                localStorage.setItem("auth_token", data.token);
                
                alert(data.success)
                navigate("/addnewquote");
              }             
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
        }) => (
          !values.isLoading ? (<div>
          <button
            onClick={() => {
              console.log(values, "values");
              console.log(errors, "errors");
              console.log(touched, "touched");
            }}
          >
            Console log states
          </button>
          <div>
            <input
              type="email"
              name="email"
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
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            <p className="error-message">
              {errors.password && touched.password && errors.password}
            </p>
          </div>
          <button onClick={handleSubmit} type="button">
            Submit
          </button>
        </div>) : (<div className="spinner-border text-primary" role="status">
  <span className="visually-hidden">Loading...</span>
</div>)
        )}
      </Formik>
    </div>
  );
};

export default Login;