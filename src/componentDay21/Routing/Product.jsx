import React from "react";
import { Link, Outlet } from "react-router-dom";

const Product = () => {
  return (
    <>
      <div>Product</div>
      <button className="btn btn-light">
        <Link to={"/product/gents"} style={{ color: "black" }}>
          Gents
        </Link>
      </button>
      <button className="btn btn-light">
        <Link to={"/product/ladies"} style={{ color: "black" }}>
          Ladies
        </Link>
      </button>
      <Outlet />
    </>
  );
};

export default Product;
