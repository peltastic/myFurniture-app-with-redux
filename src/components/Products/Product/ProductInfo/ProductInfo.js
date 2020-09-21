import React, { Component } from "react";
import axios from "axios";

import ProductInfoRendering from "./ProductInfoRendering/ProductInfoRendering";

class ProductInfo extends Component {
  state = {
    data: null,
  };
  componentDidMount() {
    console.log(this.props.match.params);
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
    let info = <p></p>;
    if (this.state.data) {
      const data = [...this.state.data];
      console.log(data);

      const content = data.filter((el) => {
        return el.name === this.props.match.params.productInfo;
      });
      console.log(content);
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
    }
    // return <p></p>;
    return <React.Fragment>{info}</React.Fragment>;
  }
}

export default ProductInfo;
// table-2
// description:
// "Well structure, modern, new age, center table t..."
// image:
// "https://pelzimages.netlify.app/img/brownMultipu..."
// "name ":
// "Brown Multi-purpose Center Table"
// price:
// 45000
