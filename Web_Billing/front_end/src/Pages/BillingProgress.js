import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function BillingProgress() {
  let { id } = useParams();
  const [customerDeets, setDeets] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3001/clients/byId/${id}`).then((response) => {
      setDeets(response.data);
    });
  });
  return (
    <div>
      <h1>{customerDeets.cname}</h1>
      <h1>{customerDeets.cphone}</h1>
      <h1>{customerDeets.cemail}</h1>
      <h1>{customerDeets.caddress1}</h1>
      <h1>{customerDeets.caddress2}</h1>
      <h1>{customerDeets.caddress3}</h1>
      <h1>{customerDeets.cpincode}</h1>
    </div>
  );
}

export default BillingProgress;
