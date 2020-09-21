import React from "react";
import Layout from "./components/Layout/Layout";
import StoreOptions from "./components/storeOptions/storeOptions";
import Products from "./components/Products/Products";
import ProductInfo from "./components/Products/Product/ProductInfo/ProductInfo";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <React.Fragment>
      <Route
        path="/"
        exact
        render={() => {
          return (
            <Layout>
              <Route path="/" exact component={StoreOptions} />
            </Layout>
          );
        }}
      />
      <Route path="/:productType" exact component={Products} />
      <Route path="/:productType/:productInfo" exact component={ProductInfo} />
    </React.Fragment>
  );
};

export default App;
