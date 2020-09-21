import React from "react";
import classes from "./storeOptions.module.css";


import { Link } from "react-router-dom";

const storeOptions = () => {
  return (
    <React.Fragment>
      <div className={classes.Container}>
      <Link to="/centerTables">
        <div>
          <img src="https://pelzimages.netlify.app/img/brownMultipurposeCenterTable.jpg" alt="thumbnail" />
          <h1>Center Tables</h1>
        </div>
      </Link>
      <Link to="/sideTables">
        <div>
          <img src="https://pelzimages.netlify.app/img/sideTables/img5.jpg" alt="thumbnail" />
          <h1>Side Tables</h1>
        </div>
      </Link>
      <Link to="/sofas">
        <div>
          <img src="https://pelzimages.netlify.app/img/sofa/sofa6.jpg" alt="thumbnail" />
          <h1>Sofa</h1>
        </div>
      </Link>
      <Link to="/diningTables">
        <div>
          <img src="https://pelzimages.netlify.app/img/dTables/img3.jpg" alt="thumbnail" />
          <h1>Dining Tables</h1>
        </div>
      </Link>
    </div>
    </React.Fragment>
    
  );
};

export default storeOptions;
