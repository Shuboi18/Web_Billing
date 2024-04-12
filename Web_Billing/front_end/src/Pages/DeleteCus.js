import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function DeleteCus() {
  let { id } = useParams();
  useEffect(() => {
    axios.post(`http://localhost:3001/clients/deleteId/${id}`);
  });
  return (
    <div>
      <h2>The Data has been deleted</h2>
    </div>
  );
}

export default DeleteCus;
