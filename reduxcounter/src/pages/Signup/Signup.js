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
    <div className="main">
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
              }) => (
                <div className="forma">
                <div className="input-div">
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
                </div>
                <div className="input-div">
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
                </div>
                <div className="input-div">
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
                </div>
                <div className="input-div">
                  <input
                    className="inp"
                    type="text"
                    name="fullName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.fullName}
                    placeholder="Username"
                  />
                </div>
                {/* <button className="signup-btn" onClick={handleSubmit} type="button">
              Submit
              </button> */}
                <button
                  className="signup-btn"
                  type="button"
                  onClick={() => {
                    // setIsLoading(true);
                    handleSubmit();
                  }}
                >
                  Sign Up
                </button>
                {/* <p
                  className="have-acc"
                  onClick={() => {
                    setIsLoading(true);
                    setTimeout(() => {
                      navigate("/login");
                    }, 1000);
                  }}
                >
                  You already have an account?
                </p> */}
              </div>
              )}
      </Formik>
    </div>
  );
};

export default Signup;
