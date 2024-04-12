import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

function CreateCustomer() {
  const initial = {
    cname: "",
    cphone: "",
    cemail: "",
    caddress: "",
  };
  const validatingdata = Yup.object().shape({
    cname: Yup.string().min(5).max(75).required(),
    cphone: Yup.string().required(),
    cemail: Yup.string().max(40),
    caddress1: Yup.string().max(30),
    caddress2: Yup.string().max(30),
    caddress3: Yup.string().max(30),
    cpincode: Yup.string(),
  });

  const submitted = (data) => {
    axios.post("http://localhost:3001/clients", data).then((response) => {
      console.log("IT WORKED");
    });
  };
  return (
    <div>
      <Formik
        initialValues={initial}
        onSubmit={submitted}
        validationSchema={validatingdata}
      >
        <Form>
          <label>Please enter Client Name to the field</label>
          <br></br>
          <ErrorMessage className="error" name="cname" component="span" />
          <br></br>
          <Field
            className="field"
            name="cname"
            placeholder="Enter the client Name"
          ></Field>
          <br></br>
          <br></br>
          <label>Please enter Client Phone number to the field</label>
          <br></br>
          <ErrorMessage className="error" name="cphone" component="span" />
          <br></br>
          <Field
            className="field"
            name="cphone"
            placeholder="Enter the client Phone number"
          ></Field>
          <br></br>
          <br></br>
          <label>Please enter Client Email address to the field</label>
          <br></br>
          <ErrorMessage className="error" name="cemail" component="span" />
          <br></br>
          <Field
            className="field"
            name="cemail"
            placeholder="Enter the client Email address"
          ></Field>
          <br></br>
          <br></br>
          <label>Please enter the first line of address to the field</label>
          <br></br>
          <ErrorMessage className="error" name="caddress1" component="span" />
          <br></br>
          <Field
            className="field"
            name="caddress1"
            placeholder="Enter the first line of Physical address"
          ></Field>
          <br></br>
          <br></br>
          <label>Please enter the second line of address to the field</label>
          <br></br>
          <ErrorMessage className="error" name="caddress2" component="span" />
          <br></br>
          <Field
            className="field"
            name="caddress2"
            placeholder="Enter the second line of Physical address"
          ></Field>
          <br></br>
          <br></br>
          <label>Please enter the third line of address to the field</label>
          <br></br>
          <ErrorMessage className="error" name="caddress3" component="span" />
          <br></br>
          <Field
            className="field"
            name="caddress3"
            placeholder="Enter the third line of Physical address"
          ></Field>
          <br></br>
          <br></br>
          <label>Please enter the pincode of address to the field</label>
          <br></br>
          <ErrorMessage className="error" name="cpincode" component="span" />
          <br></br>
          <Field
            className="field"
            name="cpincode"
            placeholder="Enter the pincode of Physical address"
          ></Field>
          <br></br>
          <br></br>
          <button type="submit">Save Client Details</button>
        </Form>
      </Formik>
    </div>
  );
}

export default CreateCustomer;
