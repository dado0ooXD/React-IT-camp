import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import "./Edit.css";
import { Formik } from "formik";
import * as yup from "yup";

const editSchema = yup.object({
  quoteText: yup.string().required("This field is required"),
  quoteAuthor: yup.string().required("This field is required"),
  quoteSource: yup.string().required("This field is required"),
  category: yup.string().required("This field is required"),
});

const Edit = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [quote, setQuote] = useState({
    quoteText: "",
    quoteAuthor: "",
    quoteSource: "",
    category: "",
  });

  // UCITAVANJE KATEGORIJA

  useEffect(() => {
    fetch("https://js-course-server.onrender.com/category/get-all")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        console.log(data);
      });
  }, []);

  // UZIMANJE CITATA

  useEffect(() => {
    fetch("https://js-course-server.onrender.com/quotes/get-quote/" + params.id)
      .then((res) => res.json())
      .then((data) => {
        setQuote(data);
      });
  }, []);

  // FUNKCIJA ZA EDITOVANJE

  const editQuote = (values) => {
    fetch("https://js-course-server.onrender.com/quotes/edit/" + params.id, {
      method: "PATCH",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
        authorization: `${process.env.REACT_APP_TOKEN_KEY}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Citat je uspesno editovan!");
        navigate("/");
      })
      .catch(() => {
        alert("error");
      });
  };

  return (
    <div className="main">
      <Formik
        enableReinitialize={true}
        initialValues={quote}
        validationSchema={editSchema}
        onSubmit={(values, actions) => {
          editQuote(values);
        }}
      >
        {({
          values,
          errors,
          touched,
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
            <p className="error-message">
              {errors.quoteText && touched.quoteText && errors.quoteText}
            </p>
            <input
              type="text"
              name="quoteAuthor"
              placeholder="Quote Text"
              value={values.quoteAuthor}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <p className="error-message">
              {errors.quoteAuthor && touched.quoteAuthor && errors.quoteAuthor}
            </p>
            <input
              type="text"
              name="quoteSource"
              placeholder="Quote Text"
              value={values.quoteSource}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <p className="error-message">
              {errors.quoteSource && touched.quoteSource && errors.quoteSource}
            </p>
            <div>
              <select
                name="category"
                onChange={handleChange}
                value={values.category}
              >
                <option value={""} selected={true} disabled={true}>
                  Select category
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
            </div>
            <button onClick={handleSubmit} type="button">
              Submit
            </button>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default Edit;

// const [quote, SetQuote] = useState([]);
// const [author, setAuthor] = useState("");
// const [text, setText] = useState("");
// const [source, setSource] = useState("");

// const editQuote = () => {
//   const newQuote = {
//     quoteText: text,
//     quoteSource: source,
//     quoteAuthor: author,
//   };

//   fetch("https://js-course-server.onrender.com/quotes/edit/" + params.id, {
//     method: "PATCH",
//     body: JSON.stringify(newQuote),
//     headers: {
//       "Content-Type": "application/json",
//       authorization: `${process.env.REACT_APP_TOKEN_KEY}`
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       alert("Citat je uspesno editovan!");
//       navigate("/");
//     })
//     .catch(() => {
//       alert("error");
//     });
//   console.log(params)
// };
// console.log(process.env)
// return (
//   <div className="main">
//     <input
//       placeholder="text"
//       value={text}
//       onChange={(e) => {
//         setText(e.target.value);
//       }}
//     />
//     <input
//       placeholder="author"
//       value={author}
//       onChange={(e) => {
//         setAuthor(e.target.value);
//       }}
//     />
//     <input
//       placeholder="source"
//       onChange={(e) => {
//         setSource(e.target.value);
//       }}
//     />

//     <button onClick={editQuote}>Edit</button>
//   </div>
// );
