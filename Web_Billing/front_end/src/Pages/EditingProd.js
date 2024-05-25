import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
function EditingProd() {
  let { id } = useParams();
  const [initialValues, setInitialValues] = useState({
    title: "",
    price: "",
    description: "",
  });
  const validatingdata = Yup.object().shape({
    title: Yup.string().min(5).max(75).required(),
    price: Yup.number().required(),
    description: Yup.string().max(150),
  });

  useEffect(() => {
    axios.get(`http://localhost:3001/products/byId/${id}`).then((response) => {
      setInitialValues(response.data);
    });
  }, [id]);

  const submitted = (data) => {
    axios
      .post(`http://localhost:3001/products/updateId/${id}`, data)
      .then((response) => {
        console.log("IT WORKED");
      });
  };

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      validationSchema={validatingdata}
      onSubmit={submitted}
    >
      {({ values, handleChange }) => (
        <Form>
          <div>
            <ErrorMessage className="error" name="title" component="span" />
            <br></br>
            <Field
              as="textarea"
              name="title"
              value={values.title}
              onChange={handleChange}
            />
            <br />
            <br />
            <br />
            <ErrorMessage className="error" name="price" component="span" />
            <br />
            <Field
              as="textarea"
              name="price"
              value={values.price}
              onChange={handleChange}
            />
            <br />
            <br />
            <ErrorMessage
              className="error"
              name="description"
              component="span"
            />
            <br />
            <Field
              as="textarea"
              name="description"
              value={values.description}
              onChange={handleChange}
            />
            <br />
            <button type="submit">Save Edited Details</button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default EditingProd;
