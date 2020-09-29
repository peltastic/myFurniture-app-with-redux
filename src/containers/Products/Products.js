import React, { Component } from "react";
import Product from "./Product/Product";

import { Link } from "react-router-dom";
import classes from "./Products.module.css";
import Head from "../../components/utilities/Head/Head";
import { connect } from "react-redux";
import Spinner from "../../components/utilities/Spinner/Spinner";
import * as productsAction from "../../store/actions/products";

class Products extends Component {
  componentDidMount() {
    this.props.onFetchproducts(this.props.match.params.productType);
  }

  render() {
    let product = <Spinner />;
    if (this.props.data) {
      product = this.props.data.map((el) => {
        return (
          <Link to={this.props.match.url + "/" + el.name} key={el.image}>
            <Product name={el.name} image={el.image} price={el.price} />
          </Link>
        );
      });
    } else if (this.props.error) {
      product = (
        <h1 style={{ color: "red", "fontSize": "20px",}}>FAILED TO FETCH</h1>
      );
    }
    return (
      <React.Fragment>
        <Head />
        <div className={classes.Div}>{product}</div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.products.data,
    error: state.products.error,
  };
};

const mapDispatchToprops = (dispatch) => {
  return {
    onFetchproducts: (fetch) => dispatch(productsAction.fetchProducts(fetch)),
  };
};

export default connect(mapStateToProps, mapDispatchToprops)(Products);
