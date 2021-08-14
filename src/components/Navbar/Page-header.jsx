import React from "react";
import { Link } from "react-router-dom";

const PageHeader = () => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item active" aria-current="page">
          PRODUCTOS
        </li>
      </ol>
      <div className="d-flex">
        <Link to="/new-product">Crear un producto</Link>
      </div>
    </nav>
  );
};

export default PageHeader;
