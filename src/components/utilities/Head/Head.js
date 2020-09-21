import React from "react";
import classes from "./Head.module.css";
import Navigation from "../../Navigation/navigationMobile/navigationMobile";

const head = () => {
  return (
    <div className={classes.Head}>
      <Navigation />
    </div>
  );
};

export default head;
