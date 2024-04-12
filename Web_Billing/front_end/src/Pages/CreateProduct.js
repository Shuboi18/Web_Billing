import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./CSS/CreateProduct.css";
function CreateProduct() {
  const initial1 = {
    title: "",
    price: "",
    description: "",
  };
  const validatingdata1 = Yup.object().shape({
    title: Yup.string().min(5).max(75).required(),
    price: Yup.number().required(),
    description: Yup.string().max(150),
  });

  const submitted1 = (data) => {
    axios.post("http://localhost:3001/products", data).then((response) => {
      console.log("IT WORKED");
    });
  };
  return (
    <div>
      <Formik
        initialValues={initial1}
        onSubmit={submitted1}
        validationSchema={validatingdata1}
      >
        <Form>
          <label>Please enter Product Name to the the field</label>
          <br></br>
          <ErrorMessage className="error" name="title" component="span" />
          <br></br>
          <Field
            className="field"
            name="title"
            placeholder="Enter the Product Name"
          ></Field>
          <br></br>
          <br></br>
          <label>Please enter Product Price to the the field</label>
          <br></br>
          <ErrorMessage className="error" name="price" component="span" />
          <br></br>
          <Field
            className="field"
            name="price"
            placeholder="Enter the Product Price"
          ></Field>
          <br></br>
          <br></br>
          <label>Please enter Product Description to the the field</label>
          <br></br>
          <ErrorMessage className="error" name="description" component="span" />
          <br></br>
          <Field
            className="field"
            name="description"
            placeholder="Enter the Product Description"
          ></Field>
          <br></br>
          <br></br>
          <button type="submit">Save Product</button>
        </Form>
      </Formik>
    </div>
  );
}

export default CreateProduct;
