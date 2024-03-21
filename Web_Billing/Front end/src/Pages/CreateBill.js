import React, { useState, useEffect } from "react";
import axios from "axios";

function CreateBill() {
  const [productdeet, setDeets] = useState([]);
  const [selectedval, setSelectedval] = useState();
  useEffect(() => {
    axios.get("http://localhost:3001/products").then((response) => {
      setDeets(response.data);
    });
  }, []);

  return (
    <div>
      <select
        className="select"
        onChange={(e) => {
          setSelectedval(e.target.value);
        }}
      >
        <option className="option" value=" ">
          Select a product
        </option>
        {productdeet.map((value, key) => {
          return (
            <option value={value.price} key={value.id}>
              {value.title}
            </option>
          );
        })}
      </select>
      <label>{selectedval}</label>
    </div>
  );
}

export default CreateBill;
