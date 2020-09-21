import React from "react";

import classes from "./Product.module.css";
const product = (props) => {
  return (
    <div className={classes.Container}>
      <img src={props.image} alt="product" />
      <div>
        <p>${props.price}</p>
        <p>{props.name}</p>
      </div>
    </div>
  );
};

export default product;
