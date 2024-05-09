import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

function EditingCus() {
  let { id } = useParams();
  const [customerDeets, setDeets] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3001/clients/byId/${id}`).then((response) => {
      setDeets(response.data);
    });
  });

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
    <>
      <div>
        <Formik
          initialValues={initial}
          onSubmit={submitted}
          validationSchema={validatingdata}
        >
          <Form>
            <input type="text" value={customerDeets.cname}></input>
            <br></br>
            <label>Enter the edited Client Name</label>
            <br></br>
            <br></br>
            <ErrorMessage className="error" name="cname" component="span" />
            <br></br>
            <Field
              className="field"
              name="cname"
              placeholder="Enter the edited client Name"
            ></Field>
            <br></br>
            <br></br>
            <textarea value={customerDeets.cphone}></textarea>
            <br></br>
            <label>Enter the edited Phone Number</label>
            <br></br>
            <ErrorMessage className="error" name="cphone" component="span" />
            <br></br>
            <Field
              className="field"
              name="cphone"
              placeholder="Enter the edited Phone number"
            ></Field>
            <br></br>
            <br></br>
            <textarea value={customerDeets.cemail}></textarea>
            <br></br>
            <label>Enter the edited mail address</label>
            <br></br>
            <ErrorMessage className="error" name="cemail" component="span" />
            <br></br>
            <Field
              className="field"
              name="cemail"
              placeholder="Enter the edited Email address"
            ></Field>
            <br></br>
            <br></br>
            <textarea value={customerDeets.caddress1}></textarea>
            <br></br>
            <label>Enter the edited Client address line 1</label>
            <br></br>
            <ErrorMessage className="error" name="caddress1" component="span" />
            <br></br>
            <Field
              className="field"
              name="caddress1"
              placeholder="Enter the edited first line of Physical address"
            ></Field>
            <br></br>
            <br></br>
            <textarea value={customerDeets.caddress2}></textarea>
            <br></br>
            <label>Enter the edited Client address line 2</label>
            <br></br>
            <ErrorMessage className="error" name="caddress2" component="span" />
            <br></br>
            <Field
              className="field"
              name="caddress2"
              placeholder="Enter the edited second line of Physical address"
            ></Field>
            <br></br>
            <br></br>
            <textarea value={customerDeets.caddress3}></textarea>
            <br></br>
            <label>Enter the edited Client address line 3</label>
            <br></br>
            <ErrorMessage className="error" name="caddress3" component="span" />
            <br></br>
            <Field
              className="field"
              name="caddress3"
              placeholder="Enter the edited third line of Physical address"
            ></Field>
            <br></br>
            <br></br>
            <textarea value={customerDeets.cpincode}></textarea>
            <br></br>
            <label>Enter the edited pincode</label>
            <br></br>
            <ErrorMessage className="error" name="cpincode" component="span" />
            <br></br>
            <Field
              className="field"
              name="cpincode"
              placeholder="Enter the edited pincode"
            ></Field>
            <br></br>
            <br></br>
            <button type="submit">Save Edited Details</button>
          </Form>
        </Formik>
      </div>
    </>
  );
}

export default EditingCus;
