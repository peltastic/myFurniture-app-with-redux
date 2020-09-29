import React, { Component } from "react";
import { connect } from "react-redux";
import Spinner from "../../../../components/utilities/Spinner/Spinner"
import * as productInfoAction from "../../../../store/actions/productInfo";

import ProductInfoRendering from "./ProductInfoRendering/ProductInfoRendering";

class ProductInfo extends Component {
  state = {
    data: null,
  };
  componentDidMount() {
    this.props.fetchProductInfo(this.props.match.params.productType);
  }
  render() {
    let info = <Spinner />;
    if (this.props.data) {
      const data = [...this.props.data];

      const content = data.filter((el) => {
        return el.name === this.props.match.params.productInfo;
      });
      info = content.map((el) => {
        return (
          <ProductInfoRendering
            key={el.name}
            name={el.name}
            image={el.image}
            desc={el.description}
            price={el.price}
            url={
              "/" +
              this.props.match.params.productType +
              "/" +
              this.props.match.params.productInfo
            }
          />
        );
      });
    } else if (this.props.error) {
      info = (
        <h1 style={{ color: "red", "fontSize": "20px",}}>FAILED TO FETCH</h1>
      );
    }
    return <React.Fragment>{info}</React.Fragment>;
  }
}

const mapStateToprops = (state) => {
  return {
    data: state.productInfo.data,
    error: state.productInfo.error
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProductInfo: (data) =>
      dispatch(productInfoAction.fetchProductInfo(data)),
  };
};

export default connect(mapStateToprops, mapDispatchToProps)(ProductInfo);
