import React from "react";
import classes from "./Head.module.css";
import Navigation from "../../../containers/Navigation/navigationMobile";

const head = () => {
  return (
    <div className={classes.Head}>
      <Navigation />
    </div>
  );
};

export default head;
