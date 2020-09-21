import React from "react";
import Product from "../../Product";
import classes from "./ProductInfoRendering.module.css";
import Head from "../../../../utilities/Head/Head";

const productInfoRendering = (props) => {
  return (
    <React.Fragment>
      <Head />
      <div>
        <div className={classes.Image}>
          <Product image={props.image} price={props.price} name={props.name} />
        </div>

        <p className={classes.Desc}>Description: {props.desc}</p>
        <button
          className={["buy-button snipcart-add-item", classes.Button].join(" ")}
          data-item-id={props.name}
          data-item-price={props.price}
          data-item-url={props.url}
          data-item-description={props.desc}
          data-item-image={props.image}
          data-item-name={props.name}
        >
          Add to cart
        </button>
      </div>
    </React.Fragment>
  );
};

export default productInfoRendering;
