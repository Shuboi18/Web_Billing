import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateBill() {
  const [customerdeet, setDeets] = useState([]);
  const [selectedval, setSelectedval] = useState();
  let history = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:3001/clients").then((response) => {
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
          Select a Customer
        </option>
        {customerdeet.map((value, key) => {
          return (
            <option value={value.id} key={value.id}>
              {value.cname}
            </option>
          );
        })}
      </select>
      <button
        onClick={() => {
          history(`/creatingBill/${selectedval}`);
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default CreateBill;
