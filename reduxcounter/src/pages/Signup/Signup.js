import { useState } from "react";
import { useNavigate } from "react-router";
import { Formik } from "formik";
import * as yup from "yup";
import { ref } from "yup";
import './Signup.css';

const signupSchema = yup.object({
  fullName: yup.string().required().min(2).max(25),
  email: yup
    .string()
    .required("Email is required field")
    .email("Email is not valid"),
  password: yup
    .string()
    .required("Please enter your password")
    .min(6, "Password must have at least 6 characters")
    .max(30),
  confirmPassword: yup
    .string()
    .required("Please confirm password")
    .oneOf([ref("password")], "Password does not match"),
});

const Signup = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const submitSignup = (values) => {
    fetch("https://js-course-server.onrender.com/user/signup", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.userId) {
          console.log(data);
          navigate("/");
        } else {
          alert("Neuspesno");
        }
      });
  };

  return (
    <div className="mejn">
      <Formik
        initialValues={{
          fullName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={(values, actions) => {
          submitSignup(values);
        }}
        validationSchema={signupSchema}
          >
              {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit
              }) =>  isLoading ? (
                <div aria-label="Orange and tan hamster running in a metal wheel" role="img" class="wheel-and-hamster">
                <div class="wheel"></div>
                <div class="hamster">
                  <div class="hamster__body">
                    <div class="hamster__head">
                      <div class="hamster__ear"></div>
                      <div class="hamster__eye"></div>
                      <div class="hamster__nose"></div>
                    </div>
                    <div class="hamster__limb hamster__limb--fr"></div>
                    <div class="hamster__limb hamster__limb--fl"></div>
                    <div class="hamster__limb hamster__limb--br"></div>
                    <div class="hamster__limb hamster__limb--bl"></div>
                    <div class="hamster__tail"></div>
                  </div>
                </div>
                <div class="spoke"></div>
              </div>      
          ): (
                <div className="forma">
                
                  <input
                    className="inp"
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder="Email"
                  />
                  <p className="error-message">
                    {errors.email && touched.email && errors.email}
                  </p>
               
                
                  <input
                    className="inp"
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    placeholder="Password"
                  />
                  <p className="error-message">
                    {errors.password && touched.password && errors.password}
                  </p>
               
                
                  <input
                    className="inp"
                    type="password"
                    name="confirmPassword"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.confirmPassword}
                    placeholder="Confirm password"
                  />
                  <p className="error-message">
                    {errors.confirmPassword &&
                      touched.confirmPassword &&
                      errors.confirmPassword}
                  </p>
                
                
                  <input
                    className="inp"
                    type="text"
                    name="fullName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.fullName}
                    placeholder="Username"
                  />
                  <button
                  className="signup-btn"
                  type="button"
                  onClick={() => {
                    setIsLoading(true);
                    handleSubmit();
                  }}
                >
                  Sign Up
                </button>
          </div>
          
              )}
      </Formik>
    </div>
  );
};

export default Signup;
