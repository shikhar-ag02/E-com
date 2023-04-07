import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../Assets/4.4 crown.svg";

import "./header.style.scss";

const Header = () => {
  return (
    <div className="header">
      <Link className="logo-component" to="/">
        <Logo className="logo" />
      </Link>

      <div className="options">
        <Link className="option" to="/shop">
          {" "}
          Shop
        </Link>
        <Link className="option" to="/shop">
          {" "}
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Header;
