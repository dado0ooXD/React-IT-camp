import React from 'react';
import { useNavigate } from 'react-router';
import { Formik } from 'formik';
import * as yup from 'yup';



const SignUp = () => {

    const loginSchema = yup.object({
    email: yup.string().required("Nedostaje email").email("Neispravan email"),
    // .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i),
    password: yup.string().required("Unesite password").min(6).max(50),
    });
    
    const navigate = useNavigate();
  return (
    <Formik
        initialValues={{ email: "", password: "",confirmPassword: "" , username: "" }}
        onSubmit={(values, actions) => {
          fetch("https://js-course-server.onrender.com/user/signup", {
            method: "POST",
            body: JSON.stringify(values),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.token) {
                alert(data.success)
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
          <div>
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
                          placeholder='Email'
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
                          placeholder='Password'
              />
              <p className="error-message">
                {errors.password && touched.password && errors.password}
              </p>
                  </div>
                  <div>
                  <input
                type="password"
                name="confirmPassword"
                onChange={handleChange}
                onBlur={handleBlur}
                          value={values.confirmPassword}
                          placeholder='Confirm password'
              />
                  </div>
                  <div>
                  <input
                type="text"
                name="username"
                onChange={handleChange}
                onBlur={handleBlur}
                          value={values.username}
                          placeholder='Username'
              />
                  </div>
            <button onClick={handleSubmit} type="button">
              Submit
            </button>
          </div>
        )}
      </Formik>
  )
}

export default SignUp
