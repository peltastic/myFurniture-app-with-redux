import React, { Component } from "react";
import Product from "./Product/Product";

import { Link } from "react-router-dom";
import classes from "./Products.module.css"
import Head from "../utilities/Head/Head"

import Spinner from "../utilities/Spinner/Spinner"

import axios from "axios";

class Products extends Component {
  state = {
    data: null,
  };

  componentDidMount() {
    axios
      .get(
        "https://e-commerce-app-464f3.firebaseio.com/" +
          this.props.match.params.productType +
          ".json"
      )
      .then((response) => {
        const responseData = [];
        for (const data in response.data) {
          responseData.push(response.data[data]);
        }
        this.setState({
          data: responseData,
        });
      });
  }

  render() {
    let product = <Spinner />;
    if (this.state.data) {
      product = this.state.data.map((el) => {
        return (
          <Link to={this.props.match.url + "/" + el.name} key={el.image}>
            <Product name={el.name} image={el.image} price={el.price} />
          </Link>
        );
      });
    }
    return (
      <React.Fragment>
        <Head />
        <div className={classes.Div}>{product}</div>
      </React.Fragment>
    );
  }
}

export default Products;
