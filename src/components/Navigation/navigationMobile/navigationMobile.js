import React, { useState } from "react";
import "./navigationMobile.css";

import { Link } from "react-router-dom";
const NavigationMobile = () => {
  const [state, setState] = useState({
    show: false,
  });

  const returnNavHandler = () => {
    setState({
      show: false
    })
  }
  const navIconHandler = () => {
    if (!state.show) {
      setState({
        show: true,
      });
    } else {
      setState({
        show: false,
      });
    }
  };
  const navIconClicked = state.show ? "active" : null;
  return (
    <React.Fragment>
      <div className="NavIcon" onClick={navIconHandler}>
        <div className={["NavIconTop", navIconClicked].join(" ")}></div>
        <div className={["NavIconMiddle", navIconClicked].join(" ")}></div>
        <div className={["NavIconBottom", navIconClicked].join(" ")}></div>
      </div>
      <nav className={["Nav", navIconClicked].join(" ")}>
        <ul>
          <Link to="/" onClick={returnNavHandler}>
            <li>HOME</li>
          </Link>
          <li>STORE:</li>
          <Link to="/centerTables" onClick={returnNavHandler}>
            <li>CENTER TABLES</li>
          </Link>
          <Link to="/sideTables" onClick={returnNavHandler}>
            <li>SIDE TABLES</li>
          </Link>
          <Link to="/sofas" onClick={returnNavHandler}>
            <li>SOFA</li>
          </Link>
          <Link to="/diningTables" exact="true" onClick={returnNavHandler}>
            <li>DINING TABLES</li>
          </Link>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default NavigationMobile;
