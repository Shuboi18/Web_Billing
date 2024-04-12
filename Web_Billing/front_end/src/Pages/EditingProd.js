import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
function EditingProd() {
  let { id } = useParams();
  const [ProductDeets, setDeets] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3001/products/byId/${id}`).then((response) => {
      setDeets(response.data);
    });
  });
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
  return (
    <div>
      <Formik initialValues={initial1} validationSchema={validatingdata1}>
        <Form>
          <label>Please Edit Product Name</label>
          <br></br>
          <ErrorMessage className="error" name="title" component="span" />
          <br></br>
          <Field
            className="field"
            name="title"
            placeholder="Edit the Product Name"
            value={ProductDeets.title}
          ></Field>
          <br></br>
          <br></br>
          <label>Please Edit Product Price</label>
          <br></br>
          <ErrorMessage className="error" name="price" component="span" />
          <br></br>
          <Field
            className="field"
            name="price"
            placeholder="Edit the Product Price"
          ></Field>
          <br></br>
          <br></br>
          <label>Please Edit Description</label>
          <br></br>
          <ErrorMessage className="error" name="description" component="span" />
          <br></br>
          <Field
            className="field"
            name="description"
            placeholder="Edit the Product Description"
          ></Field>
          <br></br>
          <br></br>
          <button type="submit">Save Product</button>
        </Form>
      </Formik>
    </div>
  );
}

export default EditingProd;
