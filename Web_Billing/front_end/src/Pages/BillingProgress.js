import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function BillingProgress() {
  let { id } = useParams();
  const [customerDeets, setDeets] = useState([]);
  const [productdeet, setProduct] = useState([]);
  const [selectedval, setSelectedval] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3001/clients/byId/${id}`).then((response) => {
      setDeets(response.data);
    });
  });
  useEffect(() => {
    axios.get("http://localhost:3001/products").then((response) => {
      setProduct(response.data);
    });
  }, []);
  const initial1 = {
    product: "",
    price: "",
    qty: "",
  };
  const validatingdata1 = Yup.object().shape({
    product: Yup.string().required(),
    price: Yup.number().required(),
    qty: Yup.number().required(),
  });
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
    console.log(counter);
  };
  const handleClick2 = () => {
    setCounter(counter - 1);
    console.log(counter);
  };
  return (
    <>
      <div>
        <h1>{customerDeets.cname}</h1>
        <h1>{customerDeets.cphone}</h1>
        <h1>{customerDeets.cemail}</h1>
        <h1>{customerDeets.caddress1}</h1>
        <h1>{customerDeets.caddress2}</h1>
        <h1>{customerDeets.caddress3}</h1>
        <h1>{customerDeets.cpincode}</h1>
        <button onClick={handleClick}>Add more</button>
        <button onClick={handleClick2}>Delete more</button>
        {Array.from(Array(counter)).map((c, index) => {
          return <select key={c}></select>;
        })}
      </div>
      <div>
        <select
          className="select"
          onChange={(e) => {
            setSelectedval(e.target);
          }}
        >
          <option className="option" value=" ">
            Select a Product
          </option>
          {productdeet.map((value, key) => {
            return (
              <option value={value.price} key={value.title}>
                {value.title}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <Formik initialValues={initial1} validationSchema={validatingdata1}>
          <Form>
            <label>Please enter the Product</label>
            <br></br>
            <ErrorMessage className="error" name="product" component="span" />
            <br></br>
            <Field
              className="field"
              name="product"
              placeholder="Enter the Product"
              value={selectedval}
            ></Field>
            <br></br>
            <label>Please enter the Product Price</label>
            <br></br>
            <ErrorMessage className="error" name="price" component="span" />
            <br></br>
            <Field
              className="field"
              name="price"
              placeholder="Enter the Price"
              value={selectedval.value}
            ></Field>
            <br></br>
            <label>Please enter the Quantity</label>
            <br></br>
            <ErrorMessage className="error" name="qty" component="span" />
            <br></br>
            <Field
              className="field"
              name="qty"
              placeholder="Enter the Quantity"
            ></Field>
            <br></br>
          </Form>
        </Formik>
      </div>
    </>
  );
}

export default BillingProgress;
