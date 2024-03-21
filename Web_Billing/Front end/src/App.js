import "./App.css";
import React from "react";
import CreateProduct from "./Pages/CreateProduct";
import CreateBill from "./Pages/CreateBill";
import CreateCustomer from "./Pages/CreateCustomer";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/creatingProduct">
          <button>Create a New Product</button>
        </Link>

        <Link to="/creatingBill">
          <button>Create a New Bill</button>
        </Link>

        <Link to="/creatingCustomer">
          <button>Create a New Customer</button>
        </Link>

        <Routes>
          <Route
            path="/creatingProduct"
            exact
            Component={CreateProduct}
          ></Route>
          <Route path="/creatingBill" exact Component={CreateBill}></Route>
          <Route
            path="/creatingCustomer"
            exact
            Component={CreateCustomer}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
