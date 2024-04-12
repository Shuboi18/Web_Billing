import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function EditingCus() {
  let { id } = useParams();
  const [customerDeets, setDeets] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3001/clients/byId/${id}`).then((response) => {
      setDeets(response.data);
    });
  });
  return (
    <div>
      <textarea
        value={customerDeets.cname}
        onChange={(e) => setDeets(e.target.value)}
      ></textarea>
      <textarea value={customerDeets.cphone}></textarea>
      <textarea value={customerDeets.cemail}></textarea>
      <textarea value={customerDeets.caddress1}></textarea>
      <textarea value={customerDeets.caddress2}></textarea>
      <textarea value={customerDeets.caddress3}></textarea>
      <textarea value={customerDeets.cpincode}></textarea>
    </div>
  );
}

export default EditingCus;
