import React from "react";
import Header from "../header/header";
import Head from '../utilities/Head/Head'

const layout = (props) => {
  return (
    <React.Fragment>
      <Head />
      <Header />
      <main>{props.children}</main>
    </React.Fragment>
  );
};

export default layout;
