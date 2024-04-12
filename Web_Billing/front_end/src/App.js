import "./App.css";
import React from "react";
import CreateProduct from "./Pages/CreateProduct";
import CreateBill from "./Pages/CreateBill";
import CreateCustomer from "./Pages/CreateCustomer";
import Ecustomer from "./Pages/Ecustomer";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import EditingCus from "./Pages/EditingCus";
import Eproduct from "./Pages/Eproduct";
import EditingProd from "./Pages/EditingProd";
import Dproduct from "./Pages/Dproduct";
import DeleteProd from "./Pages/DeleteProd";
import Dcustomer from "./Pages/Dcustomer";
import DeleteCus from "./Pages/DeleteCus";
import BillingProgress from "./Pages/BillingProgress";

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
        <Link to="/Customer">
          <button>Edit Customer Details</button>
        </Link>
        <Link to="/Product">
          <button>Edit Product Details</button>
        </Link>
        <Link to="/DeleteCus">
          <button>Delete Customer Details</button>
        </Link>
        <Link to="/DeleteProd">
          <button>Delete Product Details</button>
        </Link>

        <Routes>
          <Route
            path="/creatingProduct"
            exact
            Component={CreateProduct}
          ></Route>
          <Route path="/creatingBill" exact Component={CreateBill}></Route>
          <Route
            path="/creatingBill/:id"
            exact
            Component={BillingProgress}
          ></Route>
          <Route
            path="/creatingCustomer"
            exact
            Component={CreateCustomer}
          ></Route>
          <Route path="/Customer" exact Component={Ecustomer}></Route>
          <Route path="/Customer/:id" exact Component={EditingCus}></Route>
          <Route path="/DeleteCus" exact Component={Dcustomer}></Route>
          <Route path="/DeleteCus/:id" exact Component={DeleteCus}></Route>
          <Route path="/Product" exact Component={Eproduct}></Route>
          <Route path="/Product/:id" exact Component={EditingProd}></Route>
          <Route path="/DeleteProd" exact Component={Dproduct}></Route>
          <Route path="/DeleteProd/:id" exact Component={DeleteProd}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
