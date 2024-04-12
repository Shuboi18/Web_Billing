import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Dproduct() {
  const [productdeet, setDeets] = useState([]);
  const [selectedval, setSelectedval] = useState();
  let history = useNavigate();
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
          Select a Product
        </option>
        {productdeet.map((value, key) => {
          return (
            <option value={value.id} key={value.id}>
              {value.title}
            </option>
          );
        })}
      </select>
      <button
        onClick={() => {
          history(`/DeleteProd/${selectedval}`);
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default Dproduct;
