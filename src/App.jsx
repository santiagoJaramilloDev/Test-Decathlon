import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import ProductForm from "./components/Products/ProductForm";
import Profile from "./views/Profile";
import ProtectedRoute from "./auth/Protected-route";
import Loading from "./Loading";

function App() {
  const { isLoading } = useAuth0();
  if (isLoading) {
    return <Loading />;
  }
  return (
    <Fragment>
      <div className="container">
        <Navbar></Navbar>
        <Switch>
          <ProtectedRoute exact path="/" component={Products}></ProtectedRoute>
          <ProtectedRoute
            path="/new-product"
            component={ProductForm}
          ></ProtectedRoute>
          <ProtectedRoute
            path="/update-product/:id"
            component={ProductForm}
          ></ProtectedRoute>
          <ProtectedRoute path="/profile" component={Profile}>
            {" "}
          </ProtectedRoute>
        </Switch>
      </div>
    </Fragment>
  );
}

export default App;
