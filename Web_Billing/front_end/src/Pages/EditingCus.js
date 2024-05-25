import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

function EditingCus() {
  let { id } = useParams();
  const [initialValues, setInitialValues] = useState({
    cname: "",
    cphone: "",
    cemail: "",
    caddress1: "",
    caddress2: "",
    caddress3: "",
    cpincode: "",
  });
  const validatingdata = Yup.object().shape({
    cname: Yup.string().min(5).max(75).required(),
    cphone: Yup.number().required(),
    cemail: Yup.string().max(40),
    caddress1: Yup.string().max(30),
    caddress2: Yup.string().max(30),
    caddress3: Yup.string().max(30),
    cpincode: Yup.string(),
  });

  useEffect(() => {
    axios.get(`http://localhost:3001/clients/byId/${id}`).then((response) => {
      setInitialValues(response.data);
    });
  }, [id]);

  const submitted = (data) => {
    axios
      .post(`http://localhost:3001/clients/updateId/${id}`, data)
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
            <ErrorMessage className="error" name="cname" component="span" />
            <br></br>
            <Field
              as="textarea"
              name="cname"
              value={values.cname}
              onChange={handleChange}
            />
            <br />
            <br />
            <br />
            <ErrorMessage className="error" name="cphone" component="span" />
            <br />
            <Field
              as="textarea"
              name="cphone"
              value={values.cphone}
              onChange={handleChange}
            />
            <br />
            <br />
            <ErrorMessage className="error" name="cemail" component="span" />
            <br />
            <Field
              as="textarea"
              name="cemail"
              value={values.cemail}
              onChange={handleChange}
            />
            <br />
            <br />
            <ErrorMessage className="error" name="caddress1" component="span" />
            <br />
            <Field
              as="textarea"
              name="caddress1"
              value={values.caddress1}
              onChange={handleChange}
            />
            <br />
            <br />
            <br />
            <ErrorMessage className="error" name="caddress2" component="span" />
            <br />
            <Field
              as="textarea"
              name="caddress2"
              value={values.caddress2}
              onChange={handleChange}
            />
            <br />
            <br />
            <ErrorMessage className="error" name="caddress3" component="span" />
            <br />
            <Field
              as="textarea"
              name="caddress3"
              value={values.caddress3}
              onChange={handleChange}
            />
            <br />
            <br />
            <br />
            <ErrorMessage className="error" name="cpincode" component="span" />
            <br />
            <Field
              as="textarea"
              name="cpincode"
              value={values.cpincode}
              onChange={handleChange}
            />
            <br />
            <br />
            <br />
            <button type="submit">Save Edited Details</button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default EditingCus;
