import React, { useState, useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router";
import "./AddQuote.css";
import { Formik } from "formik";
import * as yup from "yup";

const addQuoteSchema = yup.object({
  quoteText: yup.string().required("This field is required"),
  quoteAuthor: yup.string().required("This field is required"),
  quoteSource: yup.string().required("This field is required"),
  category: yup.string().required("Select category"),
});

const AddQuote = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const dataToken = localStorage.getItem("auth_token");

  useEffect(() => {
  fetch("https://js-course-server.onrender.com/category/get-all")
    .then((res) => res.json())
    .then((data) => {
      setCategories(data);
      console.log(data)
    });
}, []);

  return (
    <div className="main">
          <Formik
      initialValues={{ quoteText: "", quoteAuthor: "", quoteSource: "", category: "" }}
      validationSchema={addQuoteSchema}
      onSubmit={(values, actions) => {
        fetch("https://js-course-server.onrender.com/quotes/add-quote", {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
            authorization: dataToken,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data)
            alert("Citat uspesno dodat");
            navigate("/")
          })
          .catch((error) => console.log(error));
        
        
        if (!dataToken) {
          return <Navigate to={"/login"} replace={true} />;
          // navigate("/login")
        }
      }}
    >
      {({
        values, // formikov state => { email: "", password: "" }
        errors, // errors = { email: 'Neispravan email', password: 'Password is required field' }
        touched, // touched = { email: true }
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <div className="main">
         
          <input
            type="text"
            name="quoteText"
            placeholder="Quote Text"
            value={values.quoteText}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <p className="error-message">{ errors.quoteText &&
                  touched.quoteText &&
                  errors.quoteText}</p>
          
          <input
            type="text"
            name="quoteAuthor"
            placeholder="Quote Author"
            value={values.quoteAuthor}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <p className="error-message">{ errors.quoteAuthor &&
                  touched.quoteAuthor &&
                  errors.quoteAuthor}</p>
          <input
            type="text"
            name="quoteSource"
            placeholder="Quote Source"
            value={values.quoteSource}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <p className="error-message">{ errors.quoteSource &&
                  touched.quoteSource &&
                  errors.quoteSource}</p>
          
          <select
            name="category"
            onChange={handleChange}
            value={values.category}
          >
            <option value={""} disabled={true}>
              Choose category
            </option>
            {categories.map((item, index) => (
              <option key={index} value={item._id}>
                {item.name}
              </option>
            ))}
            </select>
            <p className="error-message">
                {errors.category && touched.category && errors.category}
              </p>
          <button className="addquote-btn" onClick={handleSubmit} type="button">
            Add Quote
          </button>
        </div>
      )}
    </Formik>
</div>
  );
};

export default AddQuote;

// const [author, setAuthor] = useState("");
//   const [text, setText] = useState("");
//   const [source, setSource] = useState("");
//   const [category, setCategory] = useState("hardkodirano");
//   // const [categories, setCategories] = useState([]);

//   const addQuote = {
//     quoteText: text,
//     quoteSource: source,
//     quoteAuthor: author,
//     category: category,
//   };

//   // useEffect(() => {
//   //   fetch("https://js-course-server.onrender.com/category/get-all")
//   //     .then((res) => res.json())
//   //     .then((data) => {
//   //       setCategories(data);
//   //     });
//   // }, []);

//   const addNewQuote = () => {
//     fetch("https://js-course-server.onrender.com/quotes/add-quote", {
//       method: "POST",
//       body: JSON.stringify(addQuote),
//       headers: {
//         "Content-Type": "application/json",
//         authorization: localStorage.getItem("auth_token"),
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         alert("Citat je uspesno dodat!");
//         navigate("/");
//       })
//       .catch(() => {
//         alert("error");
//       });
//   };

//   return (
//     <div className="main">
// <input
//   name="quoteText"
//   placeholder="Quote Text"
//   value={text}
//   onChange={(e) => {
//     setText(e.target.value);
//     console.log(text);
//   }}
// />
// <input
//   name="quoteAuthor"
//   placeholder="Quote Author"
//   value={author}
//   onChange={(e) => {
//     setAuthor(e.target.value);
//   }}
// />
// <input
//   name="quoteSource"
//   placeholder="Quote Source"
//   onChange={(e) => {
//     setSource(e.target.value);
//   }}
// />

// <button
//   className="addquote-btn"
//   onClick={addNewQuote}
//   disabled={text === "" || author === "" || source === ""}
// >
//   Add Quote
// </button>
//     </div>
//   );
