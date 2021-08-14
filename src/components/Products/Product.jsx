import React from "react";
import { useHistory } from "react-router-dom";

const Product = (props) => {
  const history = useHistory();
  return (
    <li className="list-group-item d-flex justify-content-between align-items-start">
      <div className="ms-2 me-auto">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">{props.product.name}</h5>
        </div>
        <p className="mb-1">{props.product.description}</p>
        <small className="text-muted">Costo: {props.product.cost}</small>
      </div>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <button
          onClick={() => history.push(`/update-product/${props.product._id}`)}
          className="btn me-md-2"
          type="button"
        >
          <i className="icon-pencil"></i>
        </button>
        <button
          onClick={props.deleteProduct.bind(this, props.product._id)}
          className="btn"
          type="button"
        >
          <i className="icon-trash"></i>
        </button>
      </div>
    </li>
  );
};

export default Product;
