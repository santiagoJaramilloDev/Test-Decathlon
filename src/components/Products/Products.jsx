import React, { useState, useEffect, Fragment } from "react";
import Product from "./Product";

import Amplify, { API, graphqlOperation } from "aws-amplify";
import { removeProduct } from "../../graphql/mutations";
import { getProducts } from "../../graphql/queries";

import awsExports from "../../aws-exports";
import PageHeader from "../Navbar/Page-header";
Amplify.configure(awsExports);

const Products = () => {
  const [Products, setProducts] = useState([]);

  //setProducts(ProductsList)

  useEffect(() => {
    fecthProducts();
  }, []);

  const fecthProducts = async () => {
    try {
      const productsData = await API.graphql(graphqlOperation(getProducts));
      const products = productsData.data.getProducts;
      setProducts(products);
    } catch (error) {
      console.log("error en la consulta");
    }
  };

  const deleteProduct = async (id) => {
    try {
      const deleteData = await API.graphql(
        graphqlOperation(removeProduct, { _id: id })
      );
      const deleteprod = deleteData.data.removeProduct;
      fecthProducts();
      console.log(deleteprod);
    } catch (error) {
      console.log("error en la consulta");
    }
  };

  return (
    <div className="pt-5">
      <PageHeader></PageHeader>
      <ol className="list-group">
        {Products.map((e) => (
          <Product
            key={e._id}
            product={e}
            deleteProduct={deleteProduct}
          ></Product>
        ))}
      </ol>
    </div>
  );
};

export default Products;
